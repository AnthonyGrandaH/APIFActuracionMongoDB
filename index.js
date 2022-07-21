import app from './app.js'

import {connectToDB} from './utils/mongoose.js'


async function main(params) {
await connectToDB()
app.listen(3001)
console.log('Server is running in port', 3001)  
}

main()
