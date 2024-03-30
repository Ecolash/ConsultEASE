import React, { useState,useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { BACKEND_URL } from '../config';
import axios from "axios";


type feedbacktype={
  punctuality:string,
  clarity:string,
  Comfort:string,
  Communication:string,
  Comments:string
  feedback:number
}
export const FeedbackPreview = ({appointmentid}:{appointmentid:string}) => {
  const [feedback, setFeedback] = useState<feedbacktype>({
    punctuality: '',
    clarity: '',
    Comfort: '',
    Communication: '',
    Comments: '',
    feedback:0
  });
  //const [rating,setRating]=useState(3);
  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/doctor/feedback/${appointmentid}`).then((res)=>{
      setFeedback(res.data);
    })
  },[]);

  return (
    <div className="mx-auto my-1.5 w-[700px] bg-violet-50 rounded-2xl py-3 align-middle mt-14 h-[700px] px-4">
      <h2 className="text-[26px] font-semibold font-sans text-violet-950 mb-2 text-center">Feedback Review</h2>
      <form >
        <div className="mb-4">
          <label className="block text-[14px] mb-1.5 font-sans font-semibold text-violet-900">How would you rate the punctuality of your appointment?</label>
          <div className = "bg-white w-[400px] px-2 py-0.5 font-sans font-bold text-violet-800 rounded-full h-8">{feedback.punctuality}</div>
        </div>

        <div className="mb-4">
          <label className="block text-[14px] mb-1.5 font-sans font-semibold text-violet-900">How satisfied are you with the clarity of information provided by the doctor?</label>
          <div className = "bg-white w-[400px] px-2 py-0.5 font-sans font-bold text-violet-800 rounded-full h-8">{feedback.clarity}</div>
        </div>

        <div className="mb-4">
          <label className="block text-[14px] mb-1.5 font-sans font-semibold text-violet-900">How comfortable did you feel discussing your concerns with the doctor during the appointment?</label>
          <div className = "bg-white w-[400px] px-2 py-0.5 font-sans font-bold text-violet-800 rounded-full h-8">{feedback.Comfort}</div>
        </div>

        <div className="mb-4">
          <label className="block text-[14px] mb-1.5 font-sans font-semibold text-violet-900">How effective was the doctor's communication in addressing your questions and concerns?</label>
          <div className = "bg-white w-[400px] px-2 py-0.5 font-sans font-bold text-violet-800 rounded-full h-8">{feedback.Communication}</div>
        </div>

        <div className="mb-4 flex flex-row">
          <label className='text-[15px] mr-2 font-sans font-semibold text-violet-900'>Overall Rating: </label>
          <Stack spacing={1}>
            <Rating name="overallSatisfaction" value={feedback.feedback} disabled precision={1} />
          </Stack>
        </div>

        <div className="mb-4">
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={feedback.Comments}
            className="mt-1 block w-full px-2 border-gray-300 rounded-md shadow-sm focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
            rows={3}
          ></textarea>
        </div>

      </form>
    </div>
  );
};

