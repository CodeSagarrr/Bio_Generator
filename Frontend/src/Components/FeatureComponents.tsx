import React from 'react'

function FeatureComponents({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div>
        <div className="bg-gray-900/50 p-8 rounded-xl text-center hover:transform hover:scale-105 transition-transform">
            <div className="flex justify-center mb-4">{icon}</div>
            <h3 className="font-signika text-xl font-bold mb-4">{title}</h3>
            <p className="font-heebo text-gray-400">{description}</p>
        </div>
    </div>
  )
}

export default FeatureComponents
