import { BarChart, TrendingUp, Users, Award, Clock } from 'lucide-react';

const Analytics = () => {
  // Mock data for demonstration
  const stats = [
    { icon: <Users className="text-sky-300" size={24} />, label: 'Total Users', value: '10,234' },
    { icon: <BarChart className="text-sky-300" size={24} />, label: 'Bios Generated', value: '45,678' },
    { icon: <Clock className="text-sky-300" size={24} />, label: 'Avg. Generation Time', value: '2.3s' },
    { icon: <Award className="text-sky-300" size={24} />, label: 'User Rating', value: '4.9/5' },
  ];

  const trends = [
    { category: 'Professional', percentage: 85 },
    { category: 'Creative', percentage: 75 },
    { category: 'Personal', percentage: 65 },
    { category: 'Influencer', percentage: 60 },
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-['Signika'] text-4xl md:text-5xl font-bold mb-4">
            Bio Generation <span className="text-sky-300">Analytics</span>
          </h1>
          <p className=" text-gray-300 max-w-2xl mx-auto">
            Track the performance and impact of our bio generation service
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-400  text-sm">{stat.label}</p>
                  <p className="font-signika text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trends Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Popular Categories */}
          <div className="bg-gray-900/50 p-8 rounded-xl">
            <h2 className="font-signika text-2xl font-bold mb-6 flex items-center">
              <TrendingUp className="text-sky-300 mr-2" />
              Popular Categories
            </h2>
            <div className="space-y-6">
              {trends.map((trend, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className=" text-gray-300">{trend.category}</span>
                    <span className=" text-sky-300">{trend.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-sky-300 h-2 rounded-full"
                      style={{ width: `${trend.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-900/50 p-8 rounded-xl">
            <h2 className="font-signika text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="border-b border-gray-800 pb-4 last:border-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className=" text-gray-300">New bio generated</p>
                      <p className="text-sm text-gray-500">{5 - index} minute{index !== 4 ? 's' : ''} ago</p>
                    </div>
                    <span className="bg-sky-300/20 text-sky-300 text-sm py-1 px-3 rounded-full">
                      Professional
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;