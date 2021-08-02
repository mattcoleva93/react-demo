import axios from 'axios';

const hostname: string = "https://api.github.com";

export const getUserList = function (req, res) {
    let path: string = '/users';

    axios.get(hostname + path)
        .then((result) => {
            res.json(result.data);
        });
}