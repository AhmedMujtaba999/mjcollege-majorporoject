import Menu from './components/Menu.jsx'

import './App.css'




function App() {




  return (
    <div className="min-h-screen bg-black " >

      <Menu />



      <div className="relative inline-block">
        <img src="src/assets/background.png" alt="Description of image" className="block" />
        <button className="absolute bottom-10 right-2 bg-white text-black font-bold py-2 px-4 w-40 h-12 rounded-r-3xl rounded-l-3xl">
          Click Me1
        </button>
      </div>



    </div>


  )
}

export default App
