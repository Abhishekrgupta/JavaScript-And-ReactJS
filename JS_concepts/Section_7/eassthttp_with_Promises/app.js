const http = new EssayHTTP;

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

//create user
const data = {
  name : 'abhishek',
  username: 'HSPL',
  email: 'abc@mail.com'
}

//Post data
// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


//Update User
// http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


///Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));