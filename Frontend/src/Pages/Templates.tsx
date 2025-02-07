import { Copy, Star } from 'lucide-react';
import { toast } from 'react-hot-toast'

const Templates = () => {
  const templates = [
    {
      category: "Professional",
      examples: [
        {
          title: "Business Professional",
          text: "🚀 Digital Innovation Consultant | Helping businesses transform through technology | 10+ years experience in tech solutions | Let's connect and innovate together! 💡",
          rating: 4.9
        },
        {
          title: "Creative Professional",
          text: "🎨 Visual Storyteller & Creative Director | Bringing brands to life through design | Featured in @DesignWeek | Available for collaborations ✨",
          rating: 4.8
        }
      ]
    },
    {
      category: "Personal",
      examples: [
        {
          title: "Travel Enthusiast",
          text: "✈️ Explorer of 30+ countries | Photography lover 📸 | Sharing travel tips & adventures | Join my journey around the world 🌎",
          rating: 4.7
        },
        {
          title: "Lifestyle",
          text: "🌟 Living life in full color | Wellness advocate 🧘‍♀️ | Coffee enthusiast ☕ | Sharing daily inspiration & positivity ✨",
          rating: 4.6
        }
      ]
    }
  ];

  const handleCopyText = (template : any) => {
    navigator.clipboard.writeText(template);
    toast.success("Text Copied !")
  }

  return (
    <>
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-['Signika'] text-4xl md:text-5xl font-bold text-center mb-4">
          Bio <span className="text-sky-300">Templates</span>
        </h1>
        <p className="text-center  text-gray-300 mb-12 max-w-2xl mx-auto">
          Choose from our collection of professionally crafted bio templates.
          Each template is customizable to match your unique style and personality.
        </p>

        <div className="space-y-16">
          {templates.map((category, index) => (
            <div key={index} className="space-y-8">
              <h2 className="font-['Signika'] text-3xl font-bold text-sky-300">
                {category.category} <span className="text-white">Templates</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.examples.map((template, idx) => (
                  <div key={idx} className="bg-gray-900/50 rounded-xl p-8 hover:transform hover:scale-105 transition-transform">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-['Signika'] text-xl font-bold">{template.title}</h3>
                      <div className="flex items-center">
                        <Star className="text-sky-300 w-4 h-4 mr-1" />
                        <span className="text-sm text-gray-300">{template.rating}</span>
                      </div>
                    </div>
                    <p className=" text-gray-300 mb-6">{template.text}</p>
                    <button 
                      className="flex items-center space-x-2 bg-sky-300 text-black font-semibold px-6 py-3 rounded-full hover:bg-sky-400 transition-colors"
                      onClick={() =>handleCopyText(template.text)}
                    >
                      <Copy size={16} />
                      <span>Copy Template</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Templates;