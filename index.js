import client from './client.js'

// await client.set('user:1', 'Tom');
// await client.set('user:2', 'Joy');
// await client.set('user:3', 'Tony');
// console.log("data send successfully");

await client.get('user:1')
    .then(res => console.log(res))
    .catch(err => console.log(err))
