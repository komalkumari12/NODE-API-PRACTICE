const express = require("express") ;
const axios = require("axios") ;
const app = express() ;

const port = process.env.PORT || 3000;

app.set("view engine", "ejs") ;
app.get('/', async (req, res) => {
    const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'X-RapidAPI-Key': '38629c038cmsh196699fde78452ep1a94f6jsn098a6d621316',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	// console.log(response.data);
    const joke = response.data.body[0].setup ;
    const punchline = response.data.body[0].punchline ;
    console.log(joke)
    res.render('index', {joke, punchline})
}).catch(function (error) {
	console.error(error);
    res.render('index', {error: "something went wrong"})
});
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
})

app.listen(port, () =>   {
    console.log(`Server running on port ${port}`) ;
})