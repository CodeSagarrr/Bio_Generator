import React, { useState } from 'react';
import { Sparkles, Copy, RefreshCw } from 'lucide-react';
import { toast } from "react-hot-toast";
import axios from 'axios';

const BioGenerate = () => {
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [interests, setInterests] = useState('');
  const [generatedBio, setGeneratedBio] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  
  const prompt = `Generate a personalized social media bio for a user based on the following information: Name: ${name}, Profession: ${profession}, Interests & Skills: ${interests}. The bio should be concise, engaging, and reflect the user's personality and expertise in their field. The bio should be under 300 characters, with short sentences suitable for a social media bio, and it should not include any hashtags and only return one line intro of his name like myself and name and social media bio information add | this symbol.`;

  const generateBio = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name && !profession && !interests) {
      toast.error("Please fill in all the fields.")
      return;
    }
    setGeneratedBio("")
    setIsGenerating(true);

    const result: any = await axios.post("/api/generate", { prompt: prompt})
    if(result.status !== 200){
      toast.error("An error occurred while generating the bio.")
      return;
    }else{
      setGeneratedBio(result.data.data);
      toast.success(' Bio successfully generated')
    }
    setIsGenerating(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedBio);
    toast.success("Text Copied !")
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-['Signika'] text-4xl md:text-5xl font-bold mb-4">
            Generate Your <span className="text-sky-300">Bio</span>
          </h1>
          <p className=" text-gray-300 max-w-2xl mx-auto">
            Create a stunning social media bio in seconds. Fill in your details below and let our AI do the magic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Input Form */}
          <form onSubmit={generateBio} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-['Signika'] text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-colors text-white"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="profession" className="block font-['Signika']  text-sm font-medium mb-2">
                Profession
              </label>
              <input
                type="text"
                id="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-colors text-white"
                placeholder="Digital Creator"
              />
            </div>

            <div>
              <label htmlFor="interests" className="block font-['Signika']  text-sm font-medium mb-2">
                Interests & Skills
              </label>
              <textarea
                id="interests"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-colors text-white"
                placeholder="Photography, Travel, Tech"
              />
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full bg-sky-300 text-black  font-semibold px-8 py-4 rounded-full hover:bg-sky-400 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="animate-spin" size={20} />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  <span>Generate Bio</span>
                </>
              )}
            </button>
          </form>

          {/* Generated Bio Display */}
          <div className="space-y-6">
            <div className="bg-gray-900/50 p-6 rounded-xl min-h-[200px] flex flex-col" >
              <h3 className="font-['Signika'] text-xl font-bold mb-2">Your Generated <span className="text-sky-300">Bio</span></h3>
              <p className=" text-gray-300 flex-grow" >
                {generatedBio || "Your generated bio will appear here..."}
              </p>
              {generatedBio && (
                <button
                  onClick={copyToClipboard}
                  className="mt-4 inline-flex items-center space-x-2 text-sky-300 hover:text-sky-400 transition-colors"
                >
                  <Copy size={16} />
                  <span>Copy to clipboard</span>
                </button>
              )}
            </div>

            <div className="bg-gradient-to-r from-sky-900/50 to-sky-800/50 p-6 rounded-xl">
              <h3 className="font-['Signika'] text-xl font-bold mb-2">Pro Tips</h3>
              <ul className=" text-gray-300 space-y-2 list-disc list-inside">
                <li>Keep it concise and engaging</li>
                <li>Use relevant emojis to add personality</li>
                <li>Highlight your unique value proposition</li>
                <li>Include a call-to-action</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioGenerate;
