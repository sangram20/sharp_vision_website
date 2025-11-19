import React from 'react';
import { Award, Users, Target, Eye, Heart, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Pravin Ghadage',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '20+ years in medical AV solutions'
    },
    {
      name: 'Pramod Ghadage',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in Technical Support'
    },
    {
      name: 'Nagnath Patil',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specializes in conference management'
    },
    {
      name: 'Amar Madiwal',
      role: 'Technical Operator',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dedicated to client satisfaction'
    },
    {
      name: 'Sangram Ghadage',
      role: 'AV Support',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Generalist in optimized AV solutions'
    },
    {
      name: 'Siddhiraj Ghadage',
      role: 'AV Support',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in resource optimization'
    }
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Sharp Vision established with a focus on medical AV solutions'
    },
    {
      year: '2016',
      title: 'First Major Hospital Partnership',
      description: 'Partnered with Metropolitan Medical Center for live surgery broadcasts'
    },
    {
      year: '2018',
      title: 'Expanded Services',
      description: 'Added conference management and CME program support'
    },
    {
      year: '2020',
      title: 'Virtual Event Expertise',
      description: 'Developed hybrid and virtual event capabilities during pandemic'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Received Healthcare Technology Excellence Award'
    },
    {
      year: '2024',
      title: 'Nationwide Expansion',
      description: 'Serving clients across all 50 states with 24/7 support'
    },
    {
      year: '2024',
      title: 'Nationwide Expansion',
      description: 'Serving clients across all 50 states with 24/7 support'
    }
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'HIPAA Compliance Certified',
    'InfoComm CTS Certification',
    'Healthcare Technology Award 2022',
    'Better Business Bureau A+ Rating'
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring flawless execution of your events.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with our clients as trusted partners, not just service providers.'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Every medical event we support contributes to better patient care and education.'
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Our clients count on us for mission-critical events. We never let them down.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-[#6B0012] to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Sharp Vision</h1>
            <p className="text-xl max-w-3xl mx-auto">
              A decade of excellence in audio-visual management, specializing in medical events and professional conferences
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2014, Sharp Vision emerged from a simple observation: medical professionals needed 
                reliable, high-quality audio-visual support for their educational and surgical events. What started 
                as a small team of AV specialists has grown into a nationwide leader in medical event management.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our expertise spans live surgery relays, medical conferences, continuing education programs, and 
                professional seminars. We understand the critical nature of medical events and the importance of 
                flawless execution.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to serve over 50 healthcare institutions nationwide, with a track record of 
                500+ successful events and a 99% client satisfaction rate.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Medical conference"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Professional meeting"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="bg-[#6B0012] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-700">
                To provide exceptional audio-visual solutions that enhance medical education, 
                improve patient care, and advance healthcare knowledge through seamless technology integration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#6B0012] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-700">
                To be the leading provider of medical audio-visual solutions, setting the standard 
                for excellence in healthcare event management and surgical broadcasting.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#6B0012] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
              <p className="text-gray-700">
                Excellence, reliability, innovation, and compassionate service drive everything we do. 
                We believe in supporting the medical community with unwavering dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our work and relationships</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#6B0012] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Meet the experts behind Sharp Vision</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#6B0012] font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our company's growth</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#6B0012] hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 md:pr-8">
                    <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <div className="text-3xl font-bold text-[#6B0012] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 bg-[#6B0012] w-4 h-4 rounded-full my-4 md:my-0"></div>
                  
                  <div className="flex-1 md:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications & Awards</h2>
            <p className="text-xl text-gray-300">Recognition of our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
                <Award className="w-12 h-12 text-[#6B0012] mx-auto mb-4" />
                <h3 className="text-lg font-semibold">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;