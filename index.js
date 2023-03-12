const express = require("express") ;
const axios = require("axios") ;
const { response } = require("express");
const app = express() ;

const port = process.env.PORT || 3000;

app.set("view engine", "ejs") ;
app.get('/', async (req, res) => {
    try{
//     const options = {
//   method: 'GET',
//   url: 'https://dad-jokes.p.rapidapi.com/random/joke',
//   headers: {
//     'X-RapidAPI-Key': '108d301970msh68dbe6d39fbf202p1139ddjsn6eb50b9aa735',
//     'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
//   }
// };

        const data = await axios.get('https://dad-jokes.p.rapidapi.com/random/joke', {headers: {
    'X-RapidAPI-Key': '108d301970msh68dbe6d39fbf202p1139ddjsn6eb50b9aa735',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }})
  const joke = data.data.body[0].setup ;
  const punchline = data.data.body[0].punchline ;

//   console.log(data) ;


  return res.render('index', {joke, punchline})
// axios.request(options).then(function (response) {
// 	// console.log(response.data);
//     const joke = response.data.body[0].setup ;
//     const punchline = response.data.body[0].punchline ;
//     console.log(joke)
//     res.render('index', {joke, punchline})
// }).catch(function (error) {
// 	console.error(error);
//     res.render('index', {error: "something went wrong"})
// });
    // let text = "";

    // giveMeAJoke.getRandomDadJoke (function(joke) {
    //     // console.log(joke);
    //     text = joke ;
    //     return res.render('index', {text: text})
    // });

    // var fn = "Jackie";
    // var ln = "Chan";
    // const text = await giveMeAJoke.getCustomJoke (fn, ln )
    // console.log(text)
}
catch(
    error
){
    console.log(error.message)
    return res.json({error: error.message, 
    message : "server error"
    })
}
})

app.listen(port, () =>   {
    console.log(`Server running on port ${port}`) ;
})