import React, { useState } from 'react';
import { Calendar, MapPin, Users, Star, Filter, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'International Cardiology Conference 2024',
      category: 'conference',
      year: '2024',
      date: 'March 15-17, 2024',
      location: 'New York Medical Center',
      attendees: '500+',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete AV management for a three-day international cardiology conference featuring live surgery broadcasts, keynote presentations, and multi-room coordination.',
      services: ['Live Surgery Relay', 'Conference Management', 'Multi-room Coordination'],
      testimonial: {
        quote: 'Exceptional service and flawless execution. The live surgery broadcast was incredible.',
        author: 'Dr. Sarah Johnson',
        role: 'Conference Director'
      }
    },
    {
      id: 2,
      title: 'Robotic Surgery Training Program',
      category: 'surgery',
      year: '2024',
      date: 'January 20-22, 2024',
      location: 'Boston Medical Institute',
      attendees: '150',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Advanced robotic surgery training program with multi-camera setup and real-time streaming to remote locations.',
      services: ['Live Surgery Relay', 'Remote Streaming', 'Training Support'],
      testimonial: {
        quote: 'The technical expertise was outstanding. Every detail was perfect.',
        author: 'Dr. Michael Chen',
        role: 'Chief of Surgery'
      }
    },
    {
      id: 3,
      title: 'Medical Education Symposium',
      category: 'cme',
      year: '2023',
      date: 'November 8-10, 2023',
      location: 'Chicago Convention Center',
      attendees: '800+',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Large-scale medical education symposium with CME accreditation, featuring multiple concurrent sessions and live streaming.',
      services: ['CME Management', 'Multi-session Coordination', 'Live Streaming'],
      testimonial: {
        quote: 'Professional, reliable, and innovative. They exceeded all expectations.',
        author: 'Dr. Emily Rodriguez',
        role: 'Education Director'
      }
    },
    {
      id: 4,
      title: 'Orthopedic Surgery Workshop',
      category: 'seminars',
      year: '2023',
      date: 'September 12, 2023',
      location: 'Miami Medical Center',
      attendees: '75',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Intimate workshop setting with specialized camera angles for orthopedic procedures and interactive Q&A sessions.',
      services: ['Specialized Camera Setup', 'Interactive Systems', 'Workshop Support'],
      testimonial: {
        quote: 'The attention to detail and technical quality was remarkable.',
        author: 'Dr. James Wilson',
        role: 'Workshop Leader'
      }
    },
    {
      id: 5,
      title: 'Global Neurosurgery Conference',
      category: 'conference',
      year: '2023',
      date: 'June 5-7, 2023',
      location: 'San Francisco Medical Complex',
      attendees: '1200+',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'International neurosurgery conference with simultaneous interpretation, live surgery demonstrations, and global streaming.',
      services: ['International Streaming', 'Translation Services', 'Live Surgery Relay'],
      testimonial: {
        quote: 'World-class service for our world-class event. Simply the best.',
        author: 'Dr. Anna Thompson',
        role: 'Conference Chair'
      }
    },
    {
      id: 6,
      title: 'Pediatric Surgery Training',
      category: 'surgery',
      year: '2023',
      date: 'April 18, 2023',
      location: 'Children\'s Hospital LA',
      attendees: '100',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Specialized pediatric surgery training with sensitive handling and advanced broadcast quality.',
      services: ['Pediatric Specialized Setup', 'Training Support', 'Sensitive Content Management'],
      testimonial: {
        quote: 'Their sensitivity and professionalism with pediatric cases is unmatched.',
        author: 'Dr. Lisa Park',
        role: 'Pediatric Surgeon'
      }
    },
    {
      id: 7,
      title: 'Emergency Medicine Seminar Series',
      category: 'seminars',
      year: '2022',
      date: 'October 2022',
      location: 'Dallas Medical University',
      attendees: '200',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Monthly seminar series covering emergency medicine topics with consistent AV support throughout the year.',
      services: ['Series Management', 'Consistent Setup', 'Monthly Coordination'],
      testimonial: {
        quote: 'Consistent excellence month after month. Truly dependable partners.',
        author: 'Dr. Robert Martinez',
        role: 'Emergency Medicine Director'
      }
    },
    {
      id: 8,
      title: 'Telemedicine Conference 2022',
      category: 'conference',
      year: '2022',
      date: 'August 15-16, 2022',
      location: 'Seattle Tech Center',
      attendees: '400',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Hybrid conference focusing on telemedicine advancement with remote participation and interactive demonstrations.',
      services: ['Hybrid Event Management', 'Remote Participation', 'Interactive Demos'],
      testimonial: {
        quote: 'They made our hybrid event seamless and engaging for all participants.',
        author: 'Dr. Kevin Chang',
        role: 'Telemedicine Lead'
      }
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'surgery', label: 'Surgery Relay' },
    { key: 'conference', label: 'Conferences' },
    { key: 'seminars', label: 'Seminars' },
    { key: 'cme', label: 'CME Programs' }
  ];

  const years = ['all', '2024', '2023', '2022'];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedFilter === 'all' || project.category === selectedFilter;
    const yearMatch = selectedYear === 'all' || project.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-[#6B0012] to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Showcasing our portfolio of successful medical events and professional conferences
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-lg font-semibold text-gray-900">Filter Projects:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {categories.map(category => (
                <button
                  key={category.key}
                  onClick={() => setSelectedFilter(category.key)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedFilter === category.key
                      ? 'bg-[#6B0012] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B0012] focus:border-transparent"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#6B0012] text-white">
                      {project.year}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {project.attendees}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {project.testimonial && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 italic mb-2">
                        "{project.testimonial.quote}"
                      </p>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{project.testimonial.author}</div>
                        <div className="text-gray-600">{project.testimonial.role}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and let us make your next event extraordinary
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#6B0012] text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>View Our Services</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;