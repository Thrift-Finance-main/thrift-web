import axios from "axios";

export const submitAPI = async (url:string, data?:any, token?: string) => {

    const config = {
        method: 'post',
        url,
        headers: {
            'Content-Type': 'application/json'
        },
        data : JSON.stringify(data)
    };

    if (data && data.length){
        config.data = JSON.stringify(data);
    }
    if (token && token.length){
        // @ts-ignore
        config.headers["Authorization"] = 'Bearer ' + token;
    }
    try {
        console.log("Hey api request");
        console.log(config);
        return axios(config);
    } catch (e) {
        return {
            error: e
        }
    }
}
