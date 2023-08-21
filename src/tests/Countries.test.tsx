import { render, screen } from "@testing-library/react";
import * as countryServiceApi from "../services/CountryService";
import { Countries } from "../components/Countries";
import { countryTestData } from './countryTestData';

jest.mock("../services/CountryService");

describe("Countries Component", () => {
    beforeEach(() => jest.clearAllMocks());

    test("should render countries when api responds", async () => {
        
        let searchMock = jest.spyOn(countryServiceApi,'getEuropeanCountries');
        searchMock.mockResolvedValue(countryTestData);

        render(<Countries />);
        expect(await searchMock).toHaveBeenCalled();
        expect(await screen.findByText('Kyiv')).toBeInTheDocument();
        expect(await screen.findByText('Slovakia')).toBeInTheDocument();
        expect(await screen.findByText('Central Europe')).toBeInTheDocument();
    })

    test("should render no data found when api returns no rows", async () => {
        
        let searchMock = jest.spyOn(countryServiceApi,'getEuropeanCountries');
        searchMock.mockResolvedValue([]);

        render(<Countries />);
        expect(await searchMock).toHaveBeenCalled();
        expect(await screen.findByText('No data available')).toBeInTheDocument();
    })
})