import { FC, ReactNode, createContext, useContext, useState } from "react";
import { HttpUtil } from "../common/HttpUtil";
import { Country } from "../model/Country";

export class CountryService {
    rootUrl = "https://restcountries.com/v3.1/region/europe";

    getEuropeanCountries = () => {
        return HttpUtil.get<Country[]>(this.rootUrl);
    }
}

interface Props{
    children : ReactNode;
}

const CountryServiceContext = createContext<CountryService | undefined>(undefined);

export const CountryServiceProvider : FC<Props> = ({children}) => {
    const [service] = useState<CountryService>(new CountryService());
    return(
        <CountryServiceContext.Provider value={service}>
            {children}
        </CountryServiceContext.Provider>
    )
}

export function useCountryService() : CountryService{
    const ctx = useContext(CountryServiceContext);
    if(ctx === undefined)
        throw new Error("country service context not defined");
    return ctx;
}