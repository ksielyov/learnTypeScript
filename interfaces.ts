interface User {
    readonly id: number
    ava: string | null
    name: string
    position: {
        lat: number
        long: number
    }
}

const me: User = {
    id: 1,
    ava: '',
    name: 'Mikhail',
    position: {
        lat: 2.545465465465445,
        long: 54.654565454645
    }
}

console.log(me)

me.ava = null

console.log(me)


// let another = {} as User
