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
            'https://firebasestorage.googleapis.com/v0/b/prescriptionmed.appspot.com/o/Screen%20Shot%202024-11-26%20at%204.49.40%20PM.png?alt=media&token=70da8316-1949-461e-9890-d38d53c3e67b',
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
        "read": false,
        "error": errorMessage,
        "patientname": "",
        "medicine": "",
        "dose": "",
        "form": "",
        "manufacturer": "",
        "quantity": "",
        "taken": false,
        "dangerousorcontrolledsubstance": "",
        "frequency": initializeFrequency(),
        "special_instructions": ""
    };
}


module.exports = run;
