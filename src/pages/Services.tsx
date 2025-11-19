import React, { useState } from 'react';
import { Play, Users, Calendar, Award, Camera, Mic, Monitor, Headphones, ChevronRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('surgery');

  const services = {
    surgery: {
      title: 'Live Surgery Relay',
      description: 'Professional broadcasting of surgical procedures for medical education and training',
      features: [
        'High-definition multi-camera setup',
        'Real-time streaming capabilities',
        'Sterile environment compliance',
        'Interactive Q&A functionality',
        'Recording and archival services',
        'HIPAA-compliant solutions'
      ],
      equipment: [
        'Surgical cameras with 4K resolution',
        'Wireless transmission systems',
        'Audio enhancement equipment',
        'Lighting systems for optimal visibility',
        'Remote camera control systems'
      ],
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    conference: {
      title: 'Conference Management',
      description: 'Complete audio-visual solutions for medical conferences and professional meetings',
      features: [
        'Multi-room conference coordination',
        'Simultaneous interpretation services',
        'Live streaming and recording',
        'Presentation management',
        'Network integration',
        'Technical support staff'
      ],
      equipment: [
        'Professional sound systems',
        'Large format displays and projectors',
        'Conference microphones',
        'Lighting control systems',
        'Video switching equipment'
      ],
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    seminars: {
      title: 'Professional Seminars',
      description: 'Technical support for educational seminars and workshops',
      features: [
        'Customized AV setup',
        'Interactive presentation tools',
        'Audience response systems',
        'Recording capabilities',
        'Technical troubleshooting',
        'Equipment rental packages'
      ],
      equipment: [
        'Portable sound systems',
        'Interactive displays',
        'Wireless microphones',
        'Presentation clickers',
        'Recording equipment'
      ],
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    cme: {
      title: 'CME Programs',
      description: 'Continuing Medical Education event management and accreditation support',
      features: [
        'CME accreditation assistance',
        'Attendance tracking systems',
        'Certificate generation',
        'Evaluation management',
        'Compliance reporting',
        'Multi-platform delivery'
      ],
      equipment: [
        'Audience tracking systems',
        'Digital certification tools',
        'Evaluation tablets',
        'Network infrastructure',
        'Data management systems'
      ],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  };

  const equipmentRental = [
    {
      category: 'Audio Equipment',
      items: [
        { name: 'Wireless Microphone Systems', specs: 'UHF/Digital, 100+ channels' },
        { name: 'Professional Speakers', specs: 'Line array, 2000W+ output' },
        { name: 'Audio Mixing Consoles', specs: '32-channel digital mixing' },
        { name: 'Interpretation Equipment', specs: 'Multi-language support' }
      ]
    },
    {
      category: 'Video Equipment',
      items: [
        { name: '4K Cameras', specs: 'Professional broadcast quality' },
        { name: 'LED Video Walls', specs: 'Modular, high-resolution displays' },
        { name: 'Video Switchers', specs: 'Multi-input, live switching' },
        { name: 'Projection Systems', specs: 'High-lumen, large venue' }
      ]
    },
    {
      category: 'Lighting Equipment',
      items: [
        { name: 'LED Stage Lighting', specs: 'Full spectrum, DMX control' },
        { name: 'Surgical Lighting', specs: 'Shadow-free, adjustable' },
        { name: 'Ambient Lighting', specs: 'Dimming, color temperature' },
        { name: 'Emergency Lighting', specs: 'Battery backup systems' }
      ]
    },
    {
      category: 'Support Equipment',
      items: [
        { name: 'Power Distribution', specs: 'Clean power, surge protection' },
        { name: 'Network Infrastructure', specs: 'Fiber optic, high-speed' },
        { name: 'Cable Management', specs: 'Professional, safety compliant' },
        { name: 'Equipment Racks', specs: 'Portable, secure storage' }
      ]
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    eventDate: '',
    location: '',
    attendees: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-[#6B0012] to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional audio-visual solutions tailored for the medical and educational sectors
            </p>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mb-12 border-b">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 font-semibold text-lg border-b-2 transition-colors ${
                  activeTab === key
                    ? 'border-[#6B0012] text-[#6B0012]'
                    : 'border-transparent text-gray-600 hover:text-[#6B0012]'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {services[activeTab as keyof typeof services].title}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {services[activeTab as keyof typeof services].description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {services[activeTab as keyof typeof services].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#6B0012] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Equipment Included</h3>
                <ul className="space-y-3">
                  {services[activeTab as keyof typeof services].equipment.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <ChevronRight className="w-4 h-4 text-[#6B0012] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <img
                src={services[activeTab as keyof typeof services].image}
                alt={services[activeTab as keyof typeof services].title}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Rental */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Equipment Rental</h2>
            <p className="text-xl text-gray-600">Professional-grade equipment available for rent</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipmentRental.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-200 pb-4">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="text-gray-600">{item.specs}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Request Form
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Request a Service</h2>
            <p className="text-xl text-gray-600">Get a customized quote for your event</p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B0012] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B0012] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B0012] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B0012] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B0012] focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="surgery">Live Surgery Relay</option>
                  <option value="conference">Conference Management</option>
                  <option value="seminars">Professional Seminars</option>
                  <option value="cme">CME Programs</option>
                  <option value="equipment">Equipment Rental</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B0012] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B0012] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Attendees
                </label>
                <input
                  type="number"
                  name="attendees"
                  value={formData.attendees}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B0012] focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Requirements
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B0012] focus:border-transparent"
                placeholder="Please describe your specific requirements..."
              />
            </div>
            
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-[#6B0012] text-white py-4 px-8 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Submit Request</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </section> */}
    </div>
  );
};

export default Services;