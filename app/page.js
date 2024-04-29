"use client"

import { useState } from "react";
import SelectInput from "@/components/UI/SelectInput";
import InputField from "@/components/UI/InputField";

const InputFormat = {
  "PhysicalHealth": 0,
  "MentalHealth": 0,
  "SleepTime": 6,
  "BMI": 26,
  "Smoking": 'No',
  "AlcoholDrinking": 'No',
  "Stroke": 'No',
  "DiffWalking": 'No',
  "Sex": 'Male',
  "AgeCategory": 'No',
  "Race": 'Other',
  "Diabetic": 'No',
  "PhysicalActivity": 'No',
  "GenHealth": 'Good',
  "Asthma": 'No',
  "KidneyDisease": 'No',
  "SkinCancer": 'No'

}

const daysInNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const race = ['American Indian/Alaskan Native', 'Asian', 'Black', 'Hispanic', 'White', 'Other']
const Gender = ['Female', 'Male']
const ageCategory = ['18-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80 or older']
const yesNo = ['No', 'Yes']

const inputFieldsOne = [
  { 'name': 'PhysicalHealth', 'question': 'For how many days during the past 30 days was your physical health not good?', 'options': daysInNums },
  { 'name': 'MentalHealth', 'question': 'For how many days during the past 30 days was your mental health not good?', 'options': daysInNums },
  { 'name': 'Race', 'question': 'Race', 'options': race },
  { 'name': 'Sex', 'question': 'Sex', 'options': Gender },
  { 'name': 'AgeCategory', 'question': 'Age category', 'options': ageCategory },
  { 'name': 'SleepTime', 'question': 'How many hours on average you sleep?', 'options': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] },
  { 'name': 'GeneralHealth', 'question': 'How can you define your general health?', 'options': ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'] },
  { 'name': 'PhysicalActivity', 'question': 'Have you played any games or have you done any other physical activities', 'options': yesNo },
  { 'name': 'Smoking', 'question': 'Do you or did you smkoke atleast 100 cigarattes in you entire life time?', 'options': yesNo },

]

const inputFieldsTwo = [
  { 'name': 'AlcoholDrinking', 'question': 'Do you have more than 14 drinks of alcohol (men) or more than 7 (women) in a week?', 'options': yesNo },
  { 'name': 'Stroke', 'question': 'Did you have a stroke', 'options': yesNo },
  { 'name': 'DiffWalking', 'question': 'Do you have serious difficulty walking or climbing stairs?', 'options': yesNo },
  { 'name': 'Diabetic', 'question': 'Have you had diabetes', 'options': yesNo },
  { 'name': 'KidneyDisease', 'question': 'Do you have kidney disease?', 'options': yesNo },
  { 'name': 'Asthma', 'question': 'Do you have asthma?', 'options': yesNo },
  { 'name': 'SkinCancer', 'question': 'Do you have skin cancer?', 'options': yesNo },
]

export default function Home() {
  const handleFormChanges = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(formData)
  }

  return (
    <main className="h-full backdrop-brightness-75 flex pl-5 bg-sky-blue/50 flex-row justify-start items-start">
      <form className="h-full flex min-w-[60%] flex-row overflow-y-scroll" onSubmit={handleFormChanges}>
        <div className="h-[110.5vh] min-w-[50%] bg-meteor-white/20 p-3 pr-5 pt-10 my-5 rounded-tl-lg rounded-bl-lg">
          {
            inputFieldsOne.map((field, index) => {
              return <InputField key={index} name={field.name} options={field.options} question={field.question} />
            })
          }
        </div >
        <div className="h-[110.5vh] min-w-[50%] p-3 pr-5 pt-10 my-5 rounded-tr-lg rounded-br-lg bg-meteor-white/20">
          {inputFieldsTwo.map((field, index) => {
            return <InputField key={index} name={field.name} options={field.options} question={field.question} />
          })
          }
          <p className="my-2 mb-3 inter-regular text-lg min-h-[50px] align-text-bottom">BMI</p>
          <input className="mb-7 w-full h-[53px] rounded-sm border-none bg-transparent outline-none outline-1 outline-planetary-blue/50 focus:outline-galaxy-blue/100 focus:bg-universe-blue/15 placeholder:text-black duration-300 px-4" type="number" min={0} max={150} step={0.1} name="BMI" id="BMI" placeholder="Enter you BMI value" />

          <button type="submit" className="raleway-medium px-5 py-2 border-none outline-none outline-black outline-1 hover:border-galaxy-blue hover:outline-galaxy-blue/100 hover:bg-galaxy-blue/90 hover:text-meteor-white duration-300 mt-10 focus:bg-galaxy-blue/90 focus:outline-galaxy-blue/100 focus:text-meteor-white"> PREDICT </button>
        </div>
      </form>

      <div className="min-w-[28%] h-full text-center flex flex-col justify-center">
        <div>
          {/* OUTPUT */}
          <p className="poppins-regular text-1.5xl w-full">The probability that You will have a heart disease is 2.03%. You are healthy</p>
        </div>
      </div>
    </main >
  );
}