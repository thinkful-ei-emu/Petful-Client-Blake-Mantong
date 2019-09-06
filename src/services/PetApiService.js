import config from '../config';

const PetApiService = {
    getCat() {
        return fetch(`${config.API_ENDPOINT}/cat`, {
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getDog() {
        return fetch(`${config.API_ENDPOINT}/dog`, {
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    removeDog() {

        return fetch(`${config.API_ENDPOINT}/dog`, {
            method: "DELETE"
        }
        )
    },
    removeCat() {
        return fetch(`${config.API_ENDPOINT}/cat`,
            {
                method: "DELETE"
            }
        )
    }
}
export default PetApiService;