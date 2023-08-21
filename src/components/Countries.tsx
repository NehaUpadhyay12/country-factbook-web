import { useEffect, useState } from "react";
import { Country } from "../model/Country";
import _ from "lodash";
import { CountryDetails } from "./CountryDetails";
import { Loader } from "../common/Loader";
import { ErrorPanel } from "../common/ErrorPanel";
import { getEuropeanCountries } from "../services/CountryService";

export const Countries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country>({
        name: { common: '', official: '' }, subregion: '', area: 0, capital: [], flags: { png: '', svg: '' },
        population: 0, timezones: [], unMember: false, independent: false
    });
    const [showCountryDetail, setShowCountryDetail] = useState<boolean>(false);
    const [showLoader, setShowLoader] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);

    useEffect(() => {
        const getCountries = () => {
            setShowError(false);
            setShowLoader(true);
            getEuropeanCountries()
                .then(result => {
                    setCountries(result);
                })
                .catch(error => {
                    setShowError(true);
                    setError(`An error ocurred while getting countries. ${error}`);
                })
                .finally(() => {
                    setShowLoader(false);
                }
                );
        }
        getCountries();
    }, []);



    const showDetails = (country: Country) => {
        setSelectedCountry(country);
        setShowCountryDetail(true);
    }

    const calculateNumberOfCountries = () => {
        return countries.length;
    }

    return (
        <div className="main">
            {!showLoader && !showError && <table className="styled-table">
                <caption>{calculateNumberOfCountries()} countries</caption>
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
            {showError && <ErrorPanel message={error} />}
            {showCountryDetail && <CountryDetails country={selectedCountry} handlePopupClose={() => setShowCountryDetail(false)} />}
        </div>
    )
}
