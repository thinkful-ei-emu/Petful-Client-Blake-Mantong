import config from '../config';

const UserApiService = {
    postUser(user) {
        return fetch (`${config.API_ENDPOINT}/users`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then(res => 
            (!res.ok)
              ?res.json().then(e => Promise.reject(e))
              : res.json()
              )
    },
      
    getUser() {
    return fetch(`${config.API_ENDPOINT}/users`, {
    })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
};
export default UserApiService;