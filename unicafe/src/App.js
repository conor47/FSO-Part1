import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }

  const names = {good:'good', bad:"bad" , neutral:"neutral", all:"all", average:"average", positive:"postiive"}
  const values ={ goodValues:good, neutralValues:neutral, badValues:bad}

  return (
    <div>
      <h1>Give feedback</h1>
      <Button name={"good"} clickHandler={goodClick} />
      <Button name={"neutral"} clickHandler={neutralClick} />
      <Button name={"bad"} clickHandler={badClick} />
      <h1>Statistics</h1>
      <Statistics names={names} values={values} />
    </div>
  )
}

const Button = (props) => {

  return (
      <button onClick = {props.clickHandler}>
        {props.name}
      </button>

  )
}

const Statistics = ({names, values}) => {

  if (values.goodValues===0 && values.badValues===0 && values.neutralValues===0){
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <table>
        <thead>
          <Statistic text={names.good} value={values.goodValues} />
          <Statistic text={names.neutral} value={values.neutralValues} />
          <Statistic text={names.bad} value={values.badValues} />
          <Statistic text={names.all} value={values.goodValues + values.neutralValues + values.badValues} />
          <Statistic text={names.average} value={(values.goodValues*1 + values.neutralValues*0 + values.badValues*-1) / (values.goodValues + values.neutralValues + values.badValues)} />
          <Statistic text={names.positive} value={(values.goodValues / (values.goodValues + values.neutralValues + values.badValues)) * 100} present={true}/>
        </thead>
      </table>
    </div>
  )
}

const Statistic = ({text, value, present}) => {
  return(
  <tr><td>{text}</td> <td>{value}{present ? "%" : ""}</td> </tr>
  )
}



export default App

