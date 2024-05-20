import Card from './components/Card.jsx'

import './App.css'




function App() {

  const features = {
    feature1: {
      highlight: '30%',
      text: 'increase in perfromance'
    },
    feature2: {
      highlight: '20%',
      text: 'increase in accuracy'
    },
    feature3: {
      highlight: '10%',
      text: 'increase in efficiency'
    }
  }


  return (
    <div className="min-h-screen bg-black " >

      <div>
        <img src='src/assets/background.png'></img>
      </div>


      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20">
          <Card feature={features.feature1} className="p-3"></Card>
          <Card feature={features.feature2} className="p-3"></Card>
          <Card feature={features.feature3} className="p-3"></Card>


        </div>
      </div>


    </div>

  )
}

export default App
