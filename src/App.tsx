import { useState } from 'react'
import './App.scss'

import Cols from './components/Cols'
import NewCol from './components/newCol/NewCol'

import Chart from './components/chart/Chart'

const cols = [
  {title: 'teste', amount: 1, id: '1'},
  {title: 'teste', amount: 2, id: '2'},
  {title: 'teste', amount: 3, id: '3'},
]

function App() {

  const [dummyCols, setdummyCols] = useState(cols)


  const addColHandler = (col: any) => {
    setdummyCols(prevState => {
      return [...prevState, col]
    })
    setChart(extractNumbers([...dummyCols, col]))
  }
  
  const extractNumbers = (cols: any) => {
    console.log(cols)
    const keyValues: any[] = []
    for (let col of cols) {
        let index = keyValues.findIndex(item => item.amount == col.amount)
        if(index === -1) keyValues.push({...col, times: 1})
        else keyValues[index].times ++;
    }
    console.log(keyValues)
    return keyValues
}

const [chart, setChart] = useState(extractNumbers(cols))

  return (
    <div className="grid flex flex-column text-400 font-semibold md:flex-row">
      <div className="col md:col-4">
        <NewCol onAddCol={addColHandler}/>
      </div>
      <div className="col md:col-8">
        <Cols cols={dummyCols}/>
      </div>
      <div className="col-12">
        <Chart cols={chart} />
      </div>
    </div>
  )
}

export default App
