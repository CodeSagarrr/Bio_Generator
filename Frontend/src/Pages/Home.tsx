import { Sparkles, Wand2, Users, Zap } from 'lucide-react';
import FeatureCard from "../Components/FeatureComponents";
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="font-['Signika'] text-5xl md:text-7xl font-bold mb-6">
                        Create Your Perfect
                        <span className="text-sky-300"> Bio</span>
                    </h1>
                    <p className=" text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Generate engaging social media bios instantly with our AI-powered tool.
                        Stand out from the crowd with unique and professional descriptions.
                    </p>
                        <Link to="/generate" className="bg-sky-300 cursor-pointer text-black font-['Heebo'] font-semibold px-8 py-4 rounded-full hover:bg-sky-400 transition-colors">Get Started Free</Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 bg-black/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-signika text-4xl font-bold text-center mb-16">
                        Why Choose <span className="text-sky-300">BioGenerator</span>?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-['Signika']">
                        <FeatureCard
                            icon={<Sparkles className="text-sky-300" size={32} />}
                            title="AI-Powered"
                            description="Advanced AI algorithms create unique and engaging bios tailored to your needs"
                        />
                        <FeatureCard
                            icon={<Wand2 className="text-sky-300" size={32} />}
                            title="Customizable"
                            description="Easily customize generated bios to match your personal style"
                        />
                        <FeatureCard
                            icon={<Users className="text-sky-300" size={32} />}
                            title="Platform Ready"
                            description="Optimized for all major social media platforms"
                        />
                        <FeatureCard
                            icon={<Zap className="text-sky-300" size={32} />}
                            title="Instant Results"
                            description="Get your perfect bio in seconds, not hours"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-sky-900/50 to-sky-800/50 p-12 rounded-3xl">
                    <h2 className="font-['Signika'] text-3xl md:text-4xl font-bold mb-4">
                        Ready to Create Your Perfect Bio?
                    </h2>
                    <p className="text-sm font-['Heebo'] text-gray-300 mb-8">
                        Join thousands of users who have already transformed their social media presence
                    </p>
                    <button className="bg-sky-300 cursor-pointer text-black font-heebo font-semibold px-8 py-4 rounded-full hover:bg-sky-400 transition-colors">
                        Start Generating Now
                    </button>
                </div>
            </section>
        </>
    );
};

export default Home
