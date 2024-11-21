const fs = require('fs');
const path = require('path');

const imagesFolder = './images'; 

function imageToJson(imagesFolder) {
    const imageFiles = fs.readdirSync(imagesFolder);

    const imageData = imageFiles.map(file => {
        const extname = path.extname(file).toLowerCase();

        if (['.jpg', '.jpeg', '.png'].includes(extname)) {
            return {
                filename: file,
                filepath: `/images/${file}` 
            };
        }
    }).filter(Boolean);

    const jsonData = JSON.stringify(imageData, null, 2);

    fs.writeFileSync(path.join('_data', 'image_metadata.json'), jsonData);
    console.log('Generated _src/_data/image_metadata.json');
}

imageToJson(imagesFolder);
