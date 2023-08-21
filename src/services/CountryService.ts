import { HttpUtil } from "../common/HttpUtil";
import { Country } from "../model/Country";

let rootUrl = "https://restcountries.com/v3.1/region/europe";

export const getEuropeanCountries = () => {
    return HttpUtil.get<Country[]>(rootUrl);
}