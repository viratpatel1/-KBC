import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import SelectTheAnswer from './Componends/SelectTheAnswer';
import Timer from './Componends/Timer';
import Start from './Componends/Start';

function App()
{
  const [username, setUserName] = useState(null)
  const [questionNo, setQuestionNo] = useState(1);
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What actor was killed in a car crash on the way to participate in a sports car race?",
      answers: [
        {
          text: "James Dean",
          correct: true,
        },
        {
          text: "Tchaikovsky",
          correct: false,
        },
        {
          text: "Janet Leigh",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who Was The First To Sing On The 1984 Band Aid Single",
      answers: [
        {
          text: "Joe Pesci",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Janet Leigh",
          correct: false,
        },
        {
          text: "Paul Young",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "When Did Napoleon Bonaparte Begin His Reign As Emperor Of France ",
      answers: [
        {
          text: "1860",
          correct: false,
        },
        {
          text: "1980",
          correct: false,
        },
        {
          text: "1804",
          correct: true,
        },
        {
          text: "1847",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who got slimmed first in Ghostbusters? ",
      answers: [
        {
          text: "Peter Venkman",
          correct: true,
        },
        {
          text: "Anne Boleyn",
          correct: false,
        },
        {
          text: "Kane",
          correct: false,
        },
        {
          text: "Oxforshire",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who Released The 70's Album Entitled Hunky Dory ",
      answers: [
        {
          text: "Carol Lee Scott",
          correct: false,
        },
        {
          text: "Anne Boleyn",
          correct: false,
        },
        {
          text: "Miler",
          correct: false,
        },
        {
          text: "David Bowie",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "What country started the tradition of exchanging gifts? ",
      answers: [
        {
          text: "Russia",
          correct: false,
        },
        {
          text: "Italy (romans)",
          correct: true,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "USA",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which 60s film was the true story of Helen Keller ",
      answers: [
        {
          text: "Russian",
          correct: false,
        },
        {
          text: "1960",
          correct: false,
        },
        {
          text: "The Miracle Worker",
          correct: true,
        },
        {
          text: "None of this",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What's the oldest college in the u.s.?",
      answers: [
        {
          text: "Harvard",
          correct: true,
        },
        {
          text: "Yale University",
          correct: false,
        },
        {
          text: "The College of William and Mary",
          correct: false,
        },
        {
          text: "Moravian College",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which English King issued the Magna Carta in 1215?",
      answers: [
        {
          text: "Edward ",
          correct: false,
        },
        {
          text: "King John",
          correct: true,
        },
        {
          text: "Elizabeth",
          correct: false,
        },
        {
          text: "Charles",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who Released The 70's Album Entitled Sticky Fingers",
      answers: [
        {
          text: "Carl Bridgewate",
          correct: false,
        },
        {
          text: "Rolling Stones",
          correct: true,
        },
        {
          text: "Constantinople",
          correct: false,
        },
        {
          text: "Theodore Roosevelt",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which British coin ceased to be legal tender in 1960?",
      answers: [
        {
          text: "Farthing",
          correct: true,
        },
        {
          text: "Pound",
          correct: false,
        },
        {
          text: "Groat",
          correct: false,
        },
        {
          text: "Halfpenny",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyraymid = useMemo(() =>

    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 500000" },
      { id: 14, amount: "$ 1000000" },
    ].reverse(),
    []);

  useEffect(() =>
  {
    questionNo > 1 && setEarned(moneyPyraymid.find(m => m.id === questionNo - 1).amount)
  }, [moneyPyraymid, questionNo])

  return (
    <div className="app">
      {username ? (<> <div className="main">
        {stop ? <h1 className="earnedText">{username} You Earned: {earned}</h1> : (<><div className="top">
          <div className="timer"><Timer setStop={setStop} questionNo={questionNo} /></div>
        </div>
          <div className="bottom"><SelectTheAnswer data={data} questionNo={questionNo} setQuestionNo={setQuestionNo} setStop={setStop} /></div></>)}

      </div>
        <div className="pyramid">
          <ul className="money">
            {moneyPyraymid.map((data, i) => (
              <li className={questionNo === data.id ? "moneyList active" : "moneyList"}>
                <span className="moneyListNo">{data.id}</span>
                <span className="moneyListAmount">{data.amount}</span>
              </li>
            ))}
          </ul>
        </div></>) : (<Start setUserName={setUserName} />)}

    </div>
  );
}

export default App;
