import { useState } from 'react'
import './App.scss'
import Cols from './components/Cols'

import NewCol from './components/newCol/NewCol'

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
  }

  const filterCols = (event: any) => {
    if (event.target.value) {
      const colsFiltred = dummyCols.filter(col => col.amount == event.target.value)
      setdummyCols(colsFiltred)
    }
    if (!event.target.value) {
      setdummyCols(cols)
    }
  }

  return (
    <div className="grid flex flex-column text-400 font-semibold md:flex-row">
      <div className="col md:col-4">
        <NewCol onAddCol={addColHandler}/>
      </div>
      <div className="col md:col-8">
        <div className="grid">
          <div className="col-12 w-full flex justify-content-end"><label htmlFor="filter">Filter:</label><input type="number" onChange={filterCols}/></div>
          {dummyCols.map(col => <Cols key={col.id} title={col.title} amount={col.amount} />)}
        </div>
      </div>
    </div>
  )
}

export default App
