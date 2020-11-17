// Heath Lester
// Allows the getting of information from the /users endpoint.

let users = []


export const useUsers = () => users.slice()

// Gets all users
export const getUsers = () => {
    return fetch("http://localhost:8088/users")
        .then(taco => taco.json())
        .then(taco => users = taco)

}