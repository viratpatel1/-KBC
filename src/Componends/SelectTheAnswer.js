import React, { useState, useEffect } from 'react';
import axios from "axios";

const SelectTheAnswer = ({ data, setStop, setQuestionNo, questionNo }) =>
{
    const [question, setQuestion] = useState([null])
    const [selectAns, setSelectAns] = useState(null)
    const [className, setClassName] = useState("answer")
    // const [datas, setDatas] = useState()
    // const options = {
    //     method: 'GET',
    //     url: 'https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia',
    //     params: { category: 'historyholidays', limit: 10 },
    //     headers: {
    //         'x-rapidapi-host': 'trivia-by-api-ninjas.p.rapidapi.com',
    //         'x-rapidapi-key': 'your-key'
    //     }
    // };

    // axios.request(options)
    //     .then((res) =>
    //     {
    //         // console.log(res.data);
    //         setDatas(res.data);
    //     })
    //     .catch((error) => { console.error(error); });


    useEffect(() =>
    {
        setQuestion(data[questionNo - 1]);
    }, [data, questionNo])
    // console.log("30 ", question)

    const delay = (dur, callback) =>
    {
        setTimeout(() =>
        {
            callback();
        }, dur);
    }

    const handleClick = (res) =>
    {
        setSelectAns(res)
        setClassName("answer active")
        delay(2000, () => setClassName(res.correct ? "answer correct" : "answer wrong"))
        delay(4000, () =>
        {
            if (res.correct)
            {
                setQuestionNo((pre) => pre + 1)
                setSelectAns(null)
            } else
            {
                setStop(true)
            }
        })

        // setTimeout(() =>
        // {
        //     setClassName(res.correct ? "answer correct" : "answer wrong")

        // }, 2000);
    }

    return (
        <div className="SelectTheAnswer">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question.answers && question.answers.map((res, i) => (
                    <div className={selectAns === res ? className : "answer"} onClick={() => handleClick(res)} >{res.text}</div>
                ))}
            </div>
        </div>
    )
}

export default SelectTheAnswer
