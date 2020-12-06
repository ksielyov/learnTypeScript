// const getUser = (user: number) : void => {
//     console.log(user)
// }
//
// getUser(2);

let throwErr = (err: string): never => {
    throw new Error(err)
}

// throwErr('Any error')

type numArr = number[];

let userIds: numArr = [2, 4, 5];

console.log(userIds)
