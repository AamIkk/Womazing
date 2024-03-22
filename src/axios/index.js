import axios from "axios";

const instance = axios.create({
    baseURL:'https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/Shop',
});

export default instance