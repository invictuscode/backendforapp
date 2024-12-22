
const prompt = require("./prompt");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const { v4: uuidv4 } = require('uuid');

async function run(filename = "") {
    const medid = uuidv4();
    const filePath = `prescription_photos/${medid}.jpg`;

    const download = (uri, filePath) => {
        return new Promise((resolve, reject) => {
            const request = require('request');
            request.head(uri, (err, res) => {
                if (err) return reject(err);
                request(uri)
                    .pipe(fs.createWriteStream(filePath))
                    .on('close', resolve)
                    .on('error', reject);
            });
        });
    };

    try {
        // Download the image
        await download(
            'https://hpr.com/wp-content/uploads/2023/11/PH_RX_RXlabel_3a.jpg',
            filePath
        );

        console.log('Image downloaded successfully.');

        // Read the image after download
        const imageBuffer = Buffer.from(fs.readFileSync(filePath)).toString("base64");

        // Initialize the model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Generate content
        const result = await model.generateContent([prompt, {
            inlineData: {
                data: imageBuffer,
                mimeType: 'image/png'
            }
        }]);

        try {
            const response = result.response.text().slice(result.response.text().indexOf('{'), result.response.text().lastIndexOf('}') + 1);
            return response;
        } catch (err) {
            console.error("Error processing response:", err.message);
            return defaultErrorResponse(err.message);
        }

    } catch (error) {
        console.error("Error:", error.message);
        return defaultErrorResponse(error.message);
    }
}

function defaultErrorResponse(errorMessage) {
    return {
        "patientname":"",
        "medicine": "",
        "dose": "",
        "form": "",
        "manufacturer": "",
        "quantity":"",
        "taken":false,
        "dangerousorcontrolledsubstance":"yes or no",
         "frequency": {
            "07:00": { "number_of_tablets": 0 },
            "08:00": { "number_of_tablets": 0 },
            "09:00": { "number_of_tablets": 0 },
            "10:00": { "number_of_tablets": 0 },
            "11:00": { "number_of_tablets": 0 },
            "12:00": { "number_of_tablets": 0 },
            "13:00": { "number_of_tablets": 0 },
            "14:00": { "number_of_tablets": 0 },
            "15:00": { "number_of_tablets": 0 },
            "16:00": { "number_of_tablets": 0 },
            "17:00": { "number_of_tablets": 0 },
            "18:00": { "number_of_tablets": 0 },
            "19:00": { "number_of_tablets": 0 },
            "20:00": { "number_of_tablets": 0 },
            "21:00": { "number_of_tablets": 0 },
            "22:00": { "number_of_tablets": 0 },
            "23:00": { "number_of_tablets": 0 },
            "00:00": { "number_of_tablets": 0 },
            "01:00": { "number_of_tablets": 0 },
            "02:00": { "number_of_tablets": 0 },
            "03:00": { "number_of_tablets": 0 },
            "04:00": { "number_of_tablets": 0 },
            "05:00": { "number_of_tablets": 0 },
            "06:00": { "number_of_tablets": 0 },
        },
        "special_instructions": ""
};
}


module.exports = run;
