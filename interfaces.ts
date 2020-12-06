interface User {
    readonly id: number
    ava: string | null
    name: string
    position: {
        lat: number
        long: number
    }
    userBackground?: string
}

// const me: User = {
//     id: 1,
//     ava: '',
//     name: 'Mikhail',
//     position: {
//         lat: 2.545465465465445,
//         long: 54.654565454645
//     }
// }
//
// console.log(me)
//
// me.userBackground = null
//
// console.log(me)
// let another = {} as User

interface UserReducer extends User {
    changeAva: () => string
}

const userModel: UserReducer = {
    id: 2,
    ava: null,
    name: '',
    position: {
        lat: 55.4,
        long: 2.2
    },
    changeAva: () : string => {
        console.log(45645)
        return '123'
    }
}

console.log(userModel)
