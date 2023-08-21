export interface Country{
    name:Name,
    unMember:boolean,
    capital:string[],
    subregion:string,
    timezones: string[],
    area:number,
    population:number,
    flags:Flag,
    independent: boolean
}

export interface Name{
    common:string,
    official:string
}

export interface Flag{
    png:string,
    svg:string
}