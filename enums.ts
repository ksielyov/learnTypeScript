enum userRole {
    admin,
    user,
    moderator,
}

let useRole: number = userRole.user;
let userStr: string = userRole[2];

console.log(useRole)
console.log(userStr)
