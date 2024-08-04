const express = require('express');
const router = express.Router();

// router.use(function(req, res, next){
//   console.log('Something is happening');
//   next();
// })

router.get('/', function(req, res) {
  res.json({message: 'Hooray! Welcome to out rest video api'})
})

router.post('/Optimization', function(req, res){
  let JSONData = req.body;
  let OptID = JSONData.OptionID;
  console.log(JSONData);
  let Width = JSONData.Data[0].Width.substring(0,3);

  // Bladesize from pass parameter
  let BladeSize = JSONData.BladeSize;

  // Sort raw matls in ascending order
  // let Sizes = JSONData.Sizes;
  // Sizes = Sizes.map(rec => {
  //   let myData = rec.split('x');
  //   let myReturn = {
  //     Length: parseFloat(myData[0])
  //   };
  //   return myReturn;
  // }).sort((a,b) => a.Length - b.Length);

  // Sort required cuts in descending order
  // let Data = JSONData.Data;
  // Data = Data.map(rec => {
  //   rec.Length = parseFloat(rec.Length)
  //   rec.x = 0
  // }).sort((a, b) => b.Length - a.Length);

  // console.log(Sizes);

  
}) //end of router

module.exports = router;