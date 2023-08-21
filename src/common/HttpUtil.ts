import _ from 'lodash';

export class HttpUtil{
    static get<TOutput>(url: string, input?:string): Promise<TOutput>{
        const strUrl = _.isNil(input) ? url : `${url}/${input}`;
        return fetch(strUrl, {
            method: 'GET'
        })
        .then(result => {
            if(result.ok)
                return result.json().then(r => r as TOutput);
            else
                return result.json().then(r => {
                    if(_.isNil(r))
                        throw result.statusText;
                    else if(_.isNil(r.message))
                        throw r;
                    throw r.message;
                })
        })
    }
}