const request = require('request');

const userInput = process.argv.slice(2);
if (userInput.length === 0) {
  console.log("Attention: Insert breed to know more about it! For a list of breeds, insert breeds");
  process.exit();
}

request('https://api.thecatapi.com/v1/breeds', function(error, response, body) {

  if (error) {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    return;
  }

  const data = JSON.parse(body);

  let catNames = [];
  for (const cat of data) {
    catNames.push(cat.name);
  }

  if (userInput[0].toLowerCase() === "breeds") {
    console.log(catNames);
    return;
  }

  if (catNames.includes(userInput[0])) {
    const catPos = catNames.indexOf(userInput[0]);
    console.log(data[catPos].description);
  } else {
    console.log("Cat unavailable. To get a list of available cats, insert the option breeds.");
  }

});
