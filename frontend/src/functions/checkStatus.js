import user from '../redux/user';

const axios = require('axios');

export const backendStatus = async () => {
    let result = false;
    await axios.get('https://tomcat.johnnyip.com/fyp-backend/')
        .then((response) => {
            if (response.status == 200) {
                result = true
            } else {
                result = false
            }
        })
        .catch((err) => {
            console.log(err);
            result = false
        })

    return result
}

export const blockchainStatus = async () => {
    let result = false;
    await axios.get('https://tomcat.johnnyip.com/fyp-hyperledger/')
        .then((response) => {
            if (response.status == 200) {
                result = true
            } else {
                result = false
            }
        })
        .catch((err) => {
            console.log(err);
            result = false
        })

    return result
}


export const usernameStatus = async (username) => {
    let result = false;

    if (username != "") {
        await axios.get(`https://tomcat.johnnyip.com/fyp-backend/api/user/exist/${username}`)
            .then((response) => {
                if (response.status === 200) {
                    result = response.data
                } else {
                    result = false
                }
            })
            .catch((err) => {
                console.log(err);
                result = false
            })
    }
    return result

}