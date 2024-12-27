const photoPrompt = `We are developing an app to help elderly patients manage their medications by reading them using the camera. The app should read the image and return details about the medicine, dose, and frequency in a JS object. Find the treatment start and end dates using the label. They are on the label somewhere, find it. Please create the JS object. for the times, look at the number of pills/tablets per day. divide it by the total hours in a day. the start of the day is 7:00. here is an example: Instructions say take 1 tablet by mouth 3 times daily. Then the timing should be one at 7:00, the next 8 hours later because 24 divided by 3 is eight, so at 15:00, and the last at 23:00. THIS IS JUST AN EXAMPLE. calculate it yourself based on the data. no, 12 hours after 7 is not 15:00. here is the format. if there is no drug at the time, keep it zero. if times a day not specified, leave all times at 0. if there is not data to fill that entry, leave it blank. please DO THE CALCULATIONS CORRECTLY!! just give me the json object. i dont want extra information and suggestions. i just want the object, only the json object.  GIVE ME NOTHING ELSE EXCEPT THE JSON OBJECT!
{
            "medicine": "",
            "uses_of_the_medicine": "give us the actual use, the patient might die if they dont know. dont use the label for this, find it yourself",
            "dose_in_mg": "",
            "form": "",
            "manufacturer": "",
            "quantity":"",
            "dangerous_or_controlled_substance":"yes/no",
            "treatment_start_date": "",
            "treatment_end_date": "",
            "prescription_refills": "",
            "side_effects": "write the side effects of the medication, we dont want the patient to die. dont use the label for this, find it yourself. write it in html",
            "frequency": [
            {"time": "07:00", "number_of_tablets": 0},
            {"time": "08:00", "number_of_tablets": 0},
            {"time": "09:00", "number_of_tablets": 0},
            {"time": "10:00", "number_of_tablets": 0},
            {"time": "11:00", "number_of_tablets": 0},
            {"time": "12:00", "number_of_tablets": 0},
            {"time": "13:00", "number_of_tablets": 0},
            {"time": "14:00", "number_of_tablets": 0},
            {"time": "15:00", "number_of_tablets": 0},
            {"time": "16:00", "number_of_tablets": 0},
            {"time": "17:00", "number_of_tablets": 0},
            {"time": "18:00", "number_of_tablets": 0},
            {"time": "19:00", "number_of_tablets": 0},
            {"time": "20:00", "number_of_tablets": 0},
            {"time": "21:00", "number_of_tablets": 0},
            {"time": "22:00", "number_of_tablets": 0},
            {"time": "23:00", "number_of_tablets": 0},
            {"time": "00:00", "number_of_tablets": 0},
            {"time": "01:00", "number_of_tablets": 0},
            {"time": "02:00", "number_of_tablets": 0},
            {"time": "03:00", "number_of_tablets": 0},
            {"time": "04:00", "number_of_tablets": 0},
            {"time": "05:00", "number_of_tablets": 0},
            {"time": "06:00", "number_of_tablets": 0}
            ],
            "special_instructions": ""
  }
`
const TextPrompt = ``

module.exports = {
    photoPrompt,
    TextPrompt
}