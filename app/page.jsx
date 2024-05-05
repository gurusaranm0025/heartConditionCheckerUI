"use client"
import { useState, useRef } from "react"
import InputField from "@/components/UI/InputField"
import { Toaster, toast } from "react-hot-toast"

const daysInNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const race = ['American Indian/Alaskan Native', 'Asian', 'Black', 'Hispanic', 'White', 'Other']
const Gender = ['Female', 'Male']
const ageCategory = ['18-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80 or older']
const yesNo = ['No', 'Yes']

const inputFields = [
    { 'name': 'PhysicalHealth', 'question': 'For how many days during the past 30 days was your physical health not good?', 'options': daysInNums },
    { 'name': 'MentalHealth', 'question': 'For how many days during the past 30 days was your mental health not good?', 'options': daysInNums },
    { 'name': 'Race', 'question': 'Race', 'options': race },
    { 'name': 'Sex', 'question': 'Sex', 'options': Gender },
    { 'name': 'AgeCategory', 'question': 'Age category', 'options': ageCategory },
    { 'name': 'SleepTime', 'question': 'How many hours on average you sleep?', 'options': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] },
    { 'name': 'GeneralHealth', 'question': 'How can you define your general health?', 'options': ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'] },
    { 'name': 'PhysicalActivity', 'question': 'Have you played any games or have you done any other physical activities', 'options': yesNo },
    { 'name': 'Smoking', 'question': 'Do you or did you smkoke atleast 100 cigarattes in you entire life time?', 'options': yesNo },
    { 'name': 'AlcoholDrinking', 'question': 'Do you have more than 14 drinks of alcohol (men) or more than 7 (women) in a week?', 'options': yesNo },
    { 'name': 'Stroke', 'question': 'Did you have a stroke', 'options': yesNo },
    { 'name': 'DiffWalking', 'question': 'Do you have serious difficulty walking or climbing stairs?', 'options': yesNo },
    { 'name': 'Diabetic', 'question': 'Have you had diabetes', 'options': yesNo },
    { 'name': 'KidneyDisease', 'question': 'Do you have kidney disease?', 'options': yesNo },
    { 'name': 'Asthma', 'question': 'Do you have asthma?', 'options': yesNo },
    { 'name': 'SkinCancer', 'question': 'Do you have skin cancer?', 'options': yesNo },
]

function page() {
    const form = useRef()
    const [bmi, setBMI] = useState(0)
    const [prediction, setPrediction] = useState("")
    const [predictionProba, setPredictionProba] = useState(0)

    function getFormData() {
        const target = form.current
        const formData = new FormData(target)
        const jsonObject = Object.fromEntries(formData.entries())
        return jsonObject
    }

    const predict = async () => {
        const loadingToast = toast.loading("Predicting your risk...")
        let jsonObject = getFormData()
        jsonObject = { ...jsonObject, 'BMI': bmi.toFixed(2) }
        console.log(jsonObject)
        for (let key in jsonObject) {
            if (jsonObject[key].length < 1) {
                toast.dismiss(loadingToast)
                toast.error("Fill all the necessary fields!")
                return 0
            }
        }

        await fetch("http://localhost:5000/predict", {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(jsonObject)
        }).then((response) => {
            if (response.ok) {
                return response.json()
            }
        }).then((JSONResponse) => {
            toast.dismiss(loadingToast)
            toast.success("Results arrived")
            setPrediction(JSONResponse.final_prediction)
            setPredictionProba(JSONResponse.prediction_proba)
        }).catch((error) => {
            toast.dismiss(loadingToast)
            toast.error("Sorry an error occurred.")
            console.log(error.message)
        })
    }

    function calculateBMI() {
        const jsonObject = getFormData()
        const height = jsonObject['Height'] != undefined ? (jsonObject['Height'] / 100) : 0
        const weight = jsonObject['Weight'] != undefined ? jsonObject['Weight'] : 0
        if (weight.length < 0 || height.length < 0 || weight < 0 || height < 0) {
            setBMI(0)
        }
        setBMI(weight / (height * height))
    }

    return (
        <>
            <Toaster />
            <nav className="m-0 py-2 h-[calc(30px+2rem)] pl-5 text-5xl inter-bold text-chestnut-red border-b border-b-chestnut-red">
                PT PROJECT
            </nav>

            <main className="h-[calc(100vh-30px-2rem)] flex flex-row">
                <div id="questions-form-div" className="w-[46%] ml-[3%] mt-[45px] h-[95%]">
                    <div className="w-full min-h-[50%] max-h-[calc(100%-100px)] pl-[3%] overflow-y-scroll">
                        <form ref={form} action="" onSubmit={(e) => e.preventDefault()}>
                            {
                                inputFields.map((field, index) => {
                                    return <InputField key={index} name={field.name} options={field.options} question={field.question} />
                                })
                            }
                            <>
                                <p className="mb-4 inter-regular text-xl min-h-[45px] align-text-bottom">{'Weight in KiloGrams (Kg)'}</p>
                                <input type="number" className="w-[calc(100%-0.75rem)] h-[55px] bg-transparent duration-300 pl-4 pr-3 rounded-md outline-none outline-2 outline-galaxy-blue/90 focus:bg-chestnut-red/35 focus:outline-chestnut-red mb-5 placeholder:text-gray-700" defaultValue={0} min={0} max={150} step={0.1} name="Weight" placeholder="Enter you Weight in KG here." onChange={calculateBMI} />

                            </>
                            <>
                                <p className="mb-4 inter-regular text-xl min-h-[45px] align-text-bottom">{'Height in centimeters (cm)'}</p>
                                <input type="number" className="w-[calc(100%-0.75rem)] h-[55px] bg-transparent duration-300 pl-4 pr-3 rounded-md outline-none outline-2 outline-galaxy-blue/90 focus:bg-chestnut-red/35 focus:outline-chestnut-red mb-5 placeholder:text-gray-700" defaultValue={0} min={0} max={150} step={0.1} name="Height" placeholder="Enter your height in centimeters here." onChange={calculateBMI} />

                            </>
                            <p>{`Your BMI is ${bmi.toFixed(2)}`}</p>
                        </form>
                    </div>
                    <div className="w-full flex flex-row justify-end">

                        <button className="px-5 py-2 border-2 border-galaxy-blue/90 bg-transparent hover:bg-chestnut-red/70 hover:border-chestnut-red duration-300 my-5 mr-5 hover:text-meteor-white raleway-medium rounded-md" onClick={predict}>PREDICT</button>
                    </div>
                </div>

                <div id="results-div" className="w-[45%] mt-[45px] h-[95%]">
                    <div className="ml-20 mt-20">
                        {
                            prediction != undefined && prediction != "" ?
                                <>
                                    <p className="text-[46px] mb-3 inter-medium leading-loose">{prediction == 'No' ? 'You are healthy.' : 'It seems you are not healthy.'}</p>
                                    <p className="text-2xl inter-regular leading-loose">{`The probability that you will have a heart disease is ${predictionProba}`}</p>
                                </>
                                : <p className="text-3xl inter-medium leading-loose">Predict the probability that you will have a heart disease.</p>
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default page