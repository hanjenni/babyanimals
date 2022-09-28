
import tokenService from './tokenService';

const BASE_URL = '/api/posts';


// export function removePost(PostId) {
//     return fetch(`${BASE_URL}posts/${PostId}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: "Bearer " + tokenService.getToken(), 
//       }
//     }).then((res) => {
//       if (res.ok) return res.json();
//       throw new Error(res.error);
//     });
//   }


export function create(post) {
    return fetch(BASE_URL, {
        method: 'POST',
        body: post,
        headers: {
            Authorization: 'Bearer ' + tokenService.getToken()
        },
    }).then((res) => {
        if (res.ok) return res.json();
        return res.json().then(response => {
            console.log(response)
            throw new Error(response.err)
        })
    });
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
        .then((res) => {
            if (res.ok) return res.json();

            return res.json().then(response => {
                console.log(response)
                throw new Error(response.err)
            })
        });
}