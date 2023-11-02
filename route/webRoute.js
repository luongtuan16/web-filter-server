const router = require('express').Router();
const { parse } = require('node-html-parser');
const axios = require('axios');
const tf = require('@tensorflow/tfjs-node');

//get stats number of accounts which was grouped by month
// router.get('/validate', async (req, res) => {
//     const url = req.params.url;

//     try {
//         // Fetch webpage content
//         const response = await axios.get(url);
        
//         const webData = response.data;
//         const root = parse(webData);
        
//         // Extract image URLs using cheerio
//         const imageTags = root.querySelectorAll('img');
//         const imgUrls = [];

//         imageTags.forEach((img, index) => {
//             let imgUrl = img.getAttribute('src');
//             if (imgUrl.startsWith('//')) {
//                 imgUrl = 'http:' + imgUrl;
//             }
//             imgUrls.push(imgUrl);
//         });

//         console.log(imgUrls)

//         const predictions = [];
//         for (let imgUrl of imgUrls) {
//             const imageBuffer = await axios.get(imgUrl, { responseType: 'arraybuffer' });
//             const tensor = tf.node.decodeImage(new Uint8Array(imageBuffer.data), 3)
//                 .resizeNearestNeighbor([desiredHeight, desiredWidth])
//                 .toFloat()
//                 .div(tf.scalar(255))
//                 .expandDims();

//             const prediction = model.predict(tensor);
//             predictions.push(prediction.arraySync());
//         }
//         console.log(predictions)
//         res.json(predictions);

//     } catch (error) {
//         console.log(error.message)
//         res.status(500).send(`Error: ${error.message}`);
//     } 

//     res.status(200).json('hehh');
// });

module.exports = router;