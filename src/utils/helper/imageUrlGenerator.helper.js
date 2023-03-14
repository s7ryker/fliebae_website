import { HOST } from "../constants/APIFacade.constants";

export const generateImageUrl = (url) => {
    console.log(url)
    if (url && url !== null && url !== undefined) {
        const host = url.split('/')[0];
        return url.replace(host, HOST);
    }
    else {
        return url;
    }
}