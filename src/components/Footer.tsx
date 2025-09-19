import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
// TEMPORARILY DISABLED - WAITING FOR TINACLOUD INDEXING
// import { useTinaFooter, useTinaSiteSettings } from '../hooks/useTina';
import { footerContent, siteSettingsContent } from '../utils/content';

const Footer = () => {
  // const { data: tinaFooter, loading: footerLoading } = useTinaFooter();
  // const { data: tinaSettings, loading: settingsLoading } = useTinaSiteSettings();

  // Use static content temporarily while TinaCloud indexes new schema
  const footer = footerContent;
  const settings = siteSettingsContent;
  const footerLoading = false;
  const settingsLoading = false;

  if (footerLoading || settingsLoading) {
    return (
      <footer className="bg-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-2/3 mb-8"></div>
          </div>
        </div>
      </footer>
    );
  }
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center">
              <img
                src={settings.logoPath}
                alt={`${footer.companyName} Logo`}
                className="h-10 w-auto mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">{footer.companyName}</h3>
                <p className="text-blue-300">{footer.tagline}</p>
              </div>
            </div>

            <div className="text-blue-200 max-w-md">
              {footer.description && typeof footer.description === 'object' ? (
                <TinaMarkdown content={footer.description} />
              ) : (
                <p>{footer.description}</p>
              )}
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-blue-300">
                {footer.credentials.map((cred, index) => cred.credential).join(' • ')}
              </p>
              <p className="text-blue-200">
                "If we can't help you... We will refer someone who can."
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Our Services</h4>
            <ul className="space-y-2 text-blue-200">
              {footer.services.map((service, index) => (
                <li key={index}>{service.service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <div>
                  <a
                    href={`tel:${footer.phone}`}
                    className="font-semibold text-white hover:text-blue-300"
                  >
                    {footer.phone}
                  </a>
                  <p className="text-sm text-blue-400">Call or text anytime</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <div>
                  <a
                    href={`mailto:${footer.email}`}
                    className="text-white hover:text-blue-300 break-all"
                  >
                    {footer.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5" />
                <div>
                  <p className="text-white">{footer.address}</p>
                  <p className="text-white">{footer.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-bold mb-4">Service Areas</h4>
          <p className="text-blue-200">
            {footer.serviceAreas}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-400 text-sm">
            © {new Date().getFullYear()} {footer.companyName}. All rights reserved.
          </p>
          <p className="text-blue-400 text-sm mt-4 md:mt-0">
            {footer.ownerInfo}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;