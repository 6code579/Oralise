import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🎉 Tailwind CSS + DaisyUI
          </h1>
          <p className="text-lg text-gray-600">
            Votre projet est maintenant configuré avec Tailwind CSS et DaisyUI !
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Counter */}
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-primary">Compteur</h2>
              <p className="text-gray-600">Compteur actuel: {count}</p>
              <div className="card-actions justify-end">
                <button 
                  className="btn btn-primary"
                  onClick={() => setCount(count + 1)}
                >
                  Incrémenter
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => setCount(0)}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Buttons */}
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-secondary">Boutons DaisyUI</h2>
              <div className="space-y-2">
                <button className="btn btn-success w-full">Succès</button>
                <button className="btn btn-warning w-full">Attention</button>
                <button className="btn btn-error w-full">Erreur</button>
                <button className="btn btn-info w-full">Info</button>
              </div>
            </div>
          </div>

          {/* Card 3 - Alert */}
          <div className="card bg-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-accent">Alertes</h2>
              <div className="space-y-2">
                <div className="alert alert-info">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Info: Tailwind CSS est installé !</span>
                </div>
                <div className="alert alert-success">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Succès: DaisyUI est configuré !</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <div className="badge badge-primary badge-lg">Tailwind CSS</div>
          <div className="badge badge-secondary badge-lg ml-2">DaisyUI</div>
          <div className="badge badge-accent badge-lg ml-2">React</div>
          <div className="badge badge-neutral badge-lg ml-2">Vite</div>
        </div>
      </div>
    </div>
  )
}

export default App
