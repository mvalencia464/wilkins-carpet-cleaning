import React from 'react';
import { Sparkles, Building, Sofa, Shield, Droplets, Paintbrush, Briefcase, Layers, Grid3X3, Armchair } from 'lucide-react';
import { servicesContent } from '../utils/content';
import { useTinaServices } from '../hooks/useTina';

const services = [
  {
    icon: Sparkles,
    title: 'Carpet Steam Cleaning',
    description: 'Deep steam cleaning that removes tough stains, dirt, and odors. Our superior process brings carpets back to life.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a3409fa3e9db0b40e4d.jpeg'
  },
  {
    icon: Building,
    title: 'Commercial Carpet Cleaning',
    description: 'Professional cleaning for offices, restaurants, and businesses. Flexible scheduling to minimize disruption.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34f782ba7833b4bfdb.jpeg'
  },
  {
    icon: Sofa,
    title: 'Upholstery Cleaning',
    description: 'Restore your furniture to like-new condition. Safe for all fabric types including delicate materials.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34b800037b792a3a4a.jpeg'
  },
  {
    icon: Shield,
    title: 'Carpet & Upholstery Protection',
    description: 'Protective treatments that extend the life of your carpets and furniture while making future cleaning easier.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a344fae2c19abdd1210.jpeg'
  },
  {
    icon: Droplets,
    title: 'Tile & Grout Cleaning',
    description: 'Professional tile and grout cleaning with sealers to restore and protect your hard surfaces.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34eaa0586d7ca94628.jpeg'
  },
  {
    icon: Paintbrush,
    title: 'Grout Line Re-coloring',
    description: 'Transform old, discolored grout lines with professional re-coloring services for a fresh, new look.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc658e05b7196396a4fb93.png'
  },
  {
    icon: Briefcase,
    title: 'Janitorial Services',
    description: 'Complete janitorial services for businesses including regular maintenance and deep cleaning.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc69b2d74f6b630b62e249.jpeg'
  },
  {
    icon: Layers,
    title: 'Floor Stripping & Waxing',
    description: 'Professional floor care including stripping old wax and applying new protective coatings.',
    image: 'https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc687c09fa3e8201b93108.jpeg'
  }
];

const Services = () => {
  const { data: tinaServices, loading } = useTinaServices();

  // Icon mapping for TinaCMS services
  const iconMap: { [key: string]: any } = {
    'Sparkles': Sparkles,
    'Building': Building,
    'Sofa': Sofa,
    'Armchair': Armchair,
    'Shield': Shield,
    'Droplets': Droplets,
    'Grid3X3': Grid3X3,
    'Paintbrush': Paintbrush,
    'Briefcase': Briefcase,
    'Layers': Layers,
  };

  // Use TinaCMS data if available, otherwise fallback to static content
  const displayServices = tinaServices.length > 0 ? tinaServices : servicesContent;
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Cleaning Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential carpets to commercial facilities, we provide comprehensive cleaning services 
            that exceed expectations. <span className="text-blue-600 font-semibold">Don't be fooled by low prices - you get what you pay for!</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id || index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white p-3 rounded-lg mr-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-2">
                      {service.features.map((feature: any, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {feature.feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-blue-800 text-white p-8 rounded-2xl max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to See the Difference Professional Cleaning Makes?
            </h3>
            <p className="text-blue-200 mb-6 text-lg">
              Don't waste time with DIY methods that don't work. Get professional results the first time.
            </p>
            <a 
              href="tel:252-937-3276" 
              className="inline-flex items-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-xl"
            >
              Get Your FREE Estimate: 252-937-3276
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;