// TASK

export const user = {
    name: 'Magda',
    email: 'magda@gmail.com',
    password: 'admin',
}

user['rights'] = ['write', 'read']

console.log('User data:', user)
console.log("User's name: ", user['name'])

user['name'] = 'admin'
console.log("User's name: ", user['name'])