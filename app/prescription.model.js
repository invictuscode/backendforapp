const prompt = require("./prompt")
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
require('dotenv').config()
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);


async function run(filename="") {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([prompt, {
        inlineData: {
            data: Buffer.from(fs.readFileSync('https://www.amberpharmacy.com/wp-content/uploads/2022/02/Prescription-Label.jpg')).toString("base64"),
            mimeType: 'image/png'
        }
    }]
    );
    try {
        var response = result.response.text().slice(result.response.text().indexOf('{'), result.response.text().lastIndexOf('}') + 1);
        return response;
    } catch (err) {
        return {
            "read": false,
            "error" : err.message,
            "patientname":"",
            "medicine": "",
            "dose": "",
            "form": "",
            "manufacturer": "",
            "quantity":"",
            "taken":false,
            "dangerousorcontrolledsubstance":"",
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
                "12:00": { "number_of_tablets": 0 },
                "01:00": { "number_of_tablets": 0 },
                "02:00": { "number_of_tablets": 0 },
                "03:00": { "number_of_tablets": 0 },
                "04:00": { "number_of_tablets": 0 },
                "05:00": { "number_of_tablets": 0 },
                "06:00": { "number_of_tablets": 0 },
            },
            "special_instructions": ""
        }

    }
}

module.exports = run;