import './App.scss'
import Cols from './components/Cols'

import NewCol from './components/newCol/NewCol'

function App() {

  const addColHandler = (col: any) => {
    console.log(col)
  }

  return (
    <div className="grid flex flex-column text-400 font-semibold md:flex-row">
      <div className="col-8">
        <div className="grid">
          <Cols title='teste' amount={1}/>
          <Cols title='sub teste' amount={1}/>
          <Cols title='teste teste' amount={1}/>
          <Cols title='teste 4' amount={1}/>
          <Cols title='teste 4' amount={1}/>
          <Cols title='teste 4'/>
          <Cols title='teste 4'/>
          <Cols title='teste 4'/>
          <Cols title='teste 4'/>
          <Cols title='teste 4'/>
        </div>
      </div>
      <div className="col-4">
        <NewCol onAddCol={addColHandler}/>
      </div>
    </div>
  )
}

export default App
