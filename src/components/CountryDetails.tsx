import { Country } from "../model/Country"

interface CountryDetailsProps {
    country: Country;
    handlePopupClose: () => void;
}

export const CountryDetails = (props: CountryDetailsProps) => {
    return (
        <div className="popup display-block">
            <section className="popup-main">
                <div className="popup-header">
                    <table>
                        <tbody>
                            <tr>
                                <td style={{width:'600px'}}>
                                    <div className="country">
                                        {props.country.name.common}
                                    </div>
                                    <div className="capital">
                                        {props.country.capital}
                                    </div>
                                </td>
                                <td style={{textAlign:'right'}}>
                                    <img src={props.country.flags.png} className="detail-icon" />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="popup-body">
                    <table className="detail-table">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="detail-key">Sub Region</div>
                                    <div className="detail-value">{props.country.subregion}</div>
                                </td>
                                <td>
                                    <div className="detail-key">UN Member</div>
                                    <div className="detail-value">{props.country.unMember === true ? "Yes" : "No"}</div>
                                </td>
                                <td>
                                    <div className="detail-key">Independent</div>
                                    <div className="detail-value">{props.country.independent === true ? "Yes" : "No"}</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="detail-key">Area</div>
                                    <div className="detail-value">{props.country.area}</div>
                                </td>
                                <td>
                                    <div className="detail-key">Population</div>
                                    <div className="detail-value">{props.country.population}</div>
                                </td>
                                <td>
                                    <div className="detail-key">Time Zones</div>
                                    <div className="detail-value">{props.country.timezones.map(c => c).join(', ')}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='close-button' onClick={props.handlePopupClose}>close</button>
                </div>

            </section>
        </div>
    )
}