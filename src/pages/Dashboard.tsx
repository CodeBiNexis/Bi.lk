import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BarChart, 
  Brain, 
  LineChart, 
  PieChart, 
  ArrowLeft,
  Layout,
  Settings,
  Bell,
  User,
  TrendingUp,
  DollarSign,
  Users,
  Activity,
  Home,
  FileText,
  MessageSquare,
  HelpCircle,
  Menu
} from 'lucide-react';
import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';



// Mock data for charts
const lineChartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 900 }
];

const barChartData = [
  { name: 'Product A', value: 2400 },
  { name: 'Product B', value: 1398 },
  { name: 'Product C', value: 9800 },
  { name: 'Product D', value: 3908 }
];

const pieChartData = [
  { name: 'Category A', value: 400 },
  { name: 'Category B', value: 300 },
  { name: 'Category C', value: 300 },
  { name: 'Category D', value: 200 }
];

const COLORS = ['#A330E5', '#8B5CF6', '#6366F1', '#3B82F6'];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(3);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState<string>('');
  const navigate = useNavigate();

  const sidebarItems = [
    { icon: Home, label: 'Overview', id: 'overview' },
    { icon: BarChart, label: 'Analytics', id: 'analytics' },
    { icon: FileText, label: 'Reports', id: 'reports' },
    { icon: MessageSquare, label: 'Messages', id: 'messages' },
    { icon: Settings, label: 'Settings', id: 'settings' },
    { icon: HelpCircle, label: 'Help', id: 'help' },
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0'); // Get hours and pad with zero
      const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with zero
      const seconds = now.getSeconds().toString().padStart(2, '0'); // Get seconds and pad with zero
      setCurrentTime(`${hours}:${minutes}:${seconds}`); // Format the current time with seconds
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="min-h-screen bg-[#11001C] text-white flex">
      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-full bg-[#1A0029]/50 backdrop-blur-xl border-r border-[#A330E5]/20 transition-all duration-300 z-50
          ${isSidebarOpen ? 'w-64' : 'w-20'}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Area */}
          <div className="p-6 border-b border-[#A330E5]/20">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-12 h-12 mx-auto"
            />
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-4 py-6">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 mb-2 rounded-lg transition-all
                  ${activeTab === item.id 
                    ? 'bg-[#A330E5]/20 text-white border border-[#A330E5]' 
                    : 'text-gray-400 hover:bg-white/5'
                  }`}
              >
                <item.icon className="w-5 h-5" />
                {isSidebarOpen && (
                  <span className="ml-3">{item.label}</span>
                )}
              </button>
            ))}
          </nav>

          {/* Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-4 border-t border-[#A330E5]/20 flex justify-center"
          >
            <Menu className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Current Time Section */}
        <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-lg border border-[#A330E5]/30 rounded-lg flex items-center justify-between p-4">
            <h3 className="text-xl font-semibold">Time To Launch</h3>
            <span className="text-lg">{currentTime}</span>
          </div>
        </div>

        {/* Top Navigation */}
        <nav className="fixed w-[calc(100%-${isSidebarOpen ? '256px' : '80px'})] z-40 backdrop-blur-lg bg-[#11001C]/10 border-b border-white/20 right-0">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link 
                  to="/" 
                  className="flex items-center text-white hover:text-[#A330E5] transition-colors"
                >
                  <ArrowLeft className="w-6 h-6 mr-2" />
                  Back to Home
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-white/10 relative">
                  <Bell className="w-6 h-6" />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 bg-[#A330E5] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </button>
                <button className="p-2 rounded-full hover:bg-white/10">
                  <Settings className="w-6 h-6" />
                </button>
                <button className="p-2 rounded-full hover:bg-white/10">
                  <User className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Content based on active tab */}
        <div className="pt-20 px-4 sm:px-6 lg:px-8">
          {activeTab === 'overview' && (
            // Your existing dashboard content
            <div className="max-w-7xl mx-auto">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: TrendingUp, label: 'Revenue Growth', value: '+28%', color: 'from-[#A330E5]' },
                  { icon: DollarSign, label: 'Total Sales', value: '$86,420', color: 'from-[#8B5CF6]' },
                  { icon: Users, label: 'Active Users', value: '2,345', color: 'from-[#6366F1]' },
                  { icon: Activity, label: 'Conversion Rate', value: '3.24%', color: 'from-[#3B82F6]' }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="backdrop-blur-lg bg-white/10 rounded-[20px_0px_20px_0px] p-6 border border-[#A330E5] hover:shadow-lg hover:shadow-[#A330E5]/20 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                      </div>
                      <div className={`bg-gradient-to-br ${stat.color} to-purple-600/20 p-3 rounded-full`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Revenue Trends */}
                <div className="backdrop-blur-lg bg-white/10 rounded-[20px_0px_20px_0px] p-6 border border-[#A330E5]">
                  <h3 className="text-xl font-semibold mb-4">Revenue Trends</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={lineChartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                        <XAxis dataKey="name" stroke="#ffffff80" />
                        <YAxis stroke="#ffffff80" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#11001C', 
                            border: '1px solid #A330E5',
                            borderRadius: '10px'
                          }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#A330E5" 
                          strokeWidth={2}
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Sales Distribution */}
                <div className="backdrop-blur-lg bg-white/10 rounded-[20px_0px_20px_0px] p-6 border border-[#A330E5]">
                  <h3 className="text-xl font-semibold mb-4">Sales Distribution</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart data={barChartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                        <XAxis dataKey="name" stroke="#ffffff80" />
                        <YAxis stroke="#ffffff80" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#11001C', 
                            border: '1px solid #A330E5',
                            borderRadius: '10px'
                          }} 
                        />
                        <Bar dataKey="value" fill="#A330E5" />
                      </RechartsBarChart> 
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Market Share */}
                <div className="backdrop-blur-lg bg-white/10 rounded-[20px_0px_20px_0px] p-6 border border-[#A330E5]">
                  <h3 className="text-xl font-semibold mb-4">Market Share</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={pieChartData}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#11001C', 
                            border: '1px solid #A330E5',
                            borderRadius: '10px'
                          }} 
                        />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* AI Insights */}
                <div className="backdrop-blur-lg bg-white/10 rounded-[20px_0px_20px_0px] p-6 border border-[#A330E5]">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Brain className="w-6 h-6 mr-2 text-[#A330E5]" />
                    AI Insights
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Revenue expected to increase by 15% next quarter based on current trends',
                      'Customer engagement patterns suggest optimal posting time at 2 PM',
                      'Inventory optimization could reduce costs by 8%',
                      'New market opportunity detected in Region B'
                    ].map((insight, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-white/5 rounded-lg border border-[#A330E5]/30"
                      >
                        <p className="text-sm text-gray-300">{insight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Analytics</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* User Activity Chart */}
                <div className="backdrop-blur-lg bg-white/10 rounded-[20px_0px_20px_0px] p-6 border border-[#A330E5]">
                  <h3 className="text-xl font-semibold mb-4">User Activity</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={lineChartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                        <XAxis dataKey="name" stroke="#ffffff80" />
                        <YAxis stroke="#ffffff80" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#11001C', 
                            border: '1px solid #A330E5',
                            borderRadius: '10px'
                          }} 
                        />
                        <Line type="monotone" dataKey="value" stroke="#A330E5" strokeWidth={2} />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Conversion Funnel */}
                <div className="backdrop-blur-lg bg-white/10 rounded-[20px_0px_20px_0px] p-6 border border-[#A330E5]">
                  <h3 className="text-xl font-semibold mb-4">Conversion Funnel</h3>
                  <div className="space-y-4">
                    {[
                      { stage: 'Visitors', value: '10,000', percentage: '100%' },
                      { stage: 'Sign-ups', value: '5,000', percentage: '50%' },
                      { stage: 'Active Users', value: '2,500', percentage: '25%' },
                      { stage: 'Paying Customers', value: '1,000', percentage: '10%' }
                    ].map((item, index) => (
                      <div key={index} className="relative">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-300">{item.stage}</span>
                          <span className="text-sm text-gray-300">{item.value}</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full">
                          <div 
                            className="h-full bg-[#A330E5] rounded-full"
                            style={{ width: item.percentage }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Reports</h2>
              <div className="grid gap-6">
                {[
                  { title: 'Monthly Performance Report', date: '2024-03-01', status: 'Generated' },
                  { title: 'User Engagement Analysis', date: '2024-02-28', status: 'Pending' },
                  { title: 'Revenue Breakdown Q1', date: '2024-02-25', status: 'Generated' },
                  { title: 'Customer Satisfaction Survey', date: '2024-02-20', status: 'Generated' }
                ].map((report, index) => (
                  <div 
                    key={index}
                    className="backdrop-blur-lg bg-white/10 rounded-[20px_0px_20px_0px] p-6 border border-[#A330E5] flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-semibold">{report.title}</h3>
                      <p className="text-sm text-gray-400">Generated on {report.date}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        report.status === 'Generated' 
                          ? 'bg-[#A330E5]/20 text-[#A330E5]' 
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {report.status}
                      </span>
                      <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                        <FileText className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Messages</h2>
              <div className="grid gap-4">
                {[
                  { sender: 'John Doe', content: 'New project proposal ready for review', time: '2 hours ago', unread: true },
                  { sender: 'Jane Smith', content: 'Updated the client presentation', time: '4 hours ago', unread: false },
                  { sender: 'Mike Johnson', content: 'Team meeting scheduled for tomorrow', time: '1 day ago', unread: false },
                  { sender: 'Sarah Wilson', content: 'Quarterly report feedback', time: '2 days ago', unread: false }
                ].map((message, index) => (
                  <div 
                    key={index}
                    className={`backdrop-blur-lg bg-white/10 rounded-[20px_0px_20px_0px] p-6 border ${
                      message.unread ? 'border-[#A330E5]' : 'border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{message.sender}</h3>
                      <span className="text-sm text-gray-400">{message.time}</span>
                    </div>
                    <p className="text-gray-300">{message.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Settings</h2>
              <div className="grid gap-6">
                <div className="backdrop-blur-lg bg-white/10 rounded-[20px_0px_20px_0px] p-6 border border-[#A330E5]">
                  <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Display Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/5 border border-[#A330E5]/30 rounded-lg px-4 py-2 text-white"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full bg-white/5 border border-[#A330E5]/30 rounded-lg px-4 py-2 text-white"
                        placeholder="Enter your email"
                      />
                    </div>
                    <button className="px-6 py-2 bg-[#A330E5] rounded-lg hover:bg-[#A330E5]/80 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>

                <div className="backdrop-blur-lg bg-white/10 rounded-[20px_0px_20px_0px] p-6 border border-[#A330E5]">
                  <h3 className="text-xl font-semibold mb-4">Notifications</h3>
                  <div className="space-y-4">
                    {[
                      'Email Notifications',
                      'Push Notifications',
                      'SMS Alerts',
                      'Weekly Reports'
                    ].map((setting, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span>{setting}</span>
                        <button className="w-12 h-6 bg-[#A330E5]/20 rounded-full p-1 cursor-pointer">
                          <div className="w-4 h-4 bg-[#A330E5] rounded-full"></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'help' && (
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Help & Support</h2>
              <div className="grid gap-6">
                <div className="backdrop-blur-lg bg-white/10 rounded-[20px_0px_20px_0px] p-6 border border-[#A330E5]">
                  <h3 className="text-xl font-semibold mb-4">FAQs</h3>
                  <div className="space-y-4">
                    {[
                      { q: 'How do I get started?', a: 'Begin by setting up your profile and exploring the dashboard features.' },
                      { q: 'How to read the analytics?', a: 'Our analytics show key metrics and trends. Hover over charts for detailed information.' },
                      { q: 'Can I export reports?', a: 'Yes, you can export reports in various formats from the Reports section.' },
                      { q: 'How to contact support?', a: 'Use the contact form below or email us at support@example.com' }
                    ].map((faq, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded-lg">
                        <h4 className="font-semibold mb-2">{faq.q}</h4>
                        <p className="text-sm text-gray-300">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="backdrop-blur-lg bg-white/10 rounded-[20px_0px_20px_0px] p-6 border border-[#A330E5]">
                  <h3 className="text-xl font-semibold mb-4">Contact Support</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Subject</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/5 border border-[#A330E5]/30 rounded-lg px-4 py-2 text-white"
                        placeholder="Enter subject"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Message</label>
                      <textarea 
                        className="w-full bg-white/5 border border-[#A330E5]/30 rounded-lg px-4 py-2 text-white h-32"
                        placeholder="Describe your issue"
                      ></textarea>
                    </div>
                    <button className="px-6 py-2 bg-[#A330E5] rounded-lg hover:bg-[#A330E5]/80 transition-colors">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 