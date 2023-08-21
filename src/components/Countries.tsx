import { useEffect, useState } from "react";
import { useCountryService } from "../services/CountryService"
import { Country } from "../model/Country";
import _ from "lodash";
import { CountryDetails } from "./CountryDetails";
import { Loader } from "../common/Loader";

export const Countries = () => {
    const countryService = useCountryService();
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country>({
        name: { common: '', official: '' }, subregion: '', area: 0, capital: [], flags: { png: '', svg: '' },
        population: 0, timezones: [], unMember: false, independent: false
    });
    const [showCountryDetail, setShowCountryDetail] = useState<boolean>(false);
    const [showLoader, setShowLoader] = useState<boolean>(true);

    useEffect(() => {
        //setTimeout added to showcase loader
        setTimeout(() => {
            countryService.getEuropeanCountries()
                .then(result => {
                    setCountries(result);
                    setShowLoader(false);
                });
        }, 2000)

    }, []);

    const showDetails = (country: Country) => {
        setSelectedCountry(country);
        setShowCountryDetail(true);
    }

    return (
        <div className="main">
            {!showLoader && <table className="styled-table">
                <caption>{countries.length} countries</caption>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Capital</th>
                        <th>Sub Region</th>
                        <th>UN Member</th>
                        <th>Independent</th>
                        <th>Flag</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        !_.isNil(countries) && countries.length > 0 ? countries.map(country => {
                            return <tr onClick={() => showDetails(country)} key={country.name.official}>
                                <td>{country.name.common}</td>
                                <td>{country.capital.map(c => c).join(', ')}</td>
                                <td>{country.subregion}</td>
                                <td>{country.unMember === true ? 'Yes' : 'No'}</td>
                                <td>{country.independent === true ? 'Yes' : 'No'}</td>
                                <td><img src={country.flags.png} className="flag-icon" /></td>
                            </tr>
                        }) : <tr><td colSpan={4}>No data available</td></tr>
                    }
                </tbody>
            </table>}
            {showLoader && <Loader />}
            {showCountryDetail && <CountryDetails country={selectedCountry} handlePopupClose={() => setShowCountryDetail(false)} />}
        </div>
    )
}