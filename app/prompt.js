module.exports = `We are developing an app to help elderly patients manage their medications by reading them using the camera. The app should read the image and return details about the medicine, dose, and frequency in a JS object. Please create the JS object. for the times, look at the number of pills/tablets per day. divide it by the total hours in a day. the start of the day is 7:00. here is an example: Instructions say take 1 tablet by mouth 3 times daily. Then the timing should be one at 7:00, the next 8 hours later because 24 divided by 3 is eight, so at 15:00, and the last at 23:00. THIS IS JUST AN EXAMPLE. calculate it yourself based on the data. no, 12 hours after 7 is not 15:00. here is the format {
   "patientname":"",
            "medicine": "",
            "dose": "",
            "form": "",
            "manufacturer": "",
            "quantity":"",
            "taken":false,
            "dangerousorcontrolledsubstance":"yes or no"
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
    `