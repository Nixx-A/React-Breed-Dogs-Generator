import './App.css'
import { Header } from './Components/Header'
import { ShowData } from './Components/ShowData'

function App() {
  return (
    <main className='flex justify-center items-center flex-col h-screen w-screen gradient '>
      <div className=' bg-slate-200 h-2/3 w-11/12 md:w-8/12 rounded-sm shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] overflow-hidden font-Ysabeau'>
        <Header />
        <ShowData />
      </div>
    </main>
  )
}

export default App
