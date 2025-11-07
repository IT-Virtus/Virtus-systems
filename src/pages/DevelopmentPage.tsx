import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Link as LinkIcon, Wrench, Users, Settings } from 'lucide-react';

const DevelopmentPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Software Development Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            From APIs to complete trading systems, we build solutions that perfectly fit your business needs
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">API Development</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Custom APIs for trading platforms, data feeds, and third-party integrations with robust documentation.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-success-100 dark:bg-success-900/30 rounded-xl flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-success-600 dark:text-success-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">CRM Systems</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Tailored customer relationship management systems designed specifically for brokers and trading firms.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-xl flex items-center justify-center mb-6">
                <LinkIcon className="h-6 w-6 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Liquidity Bridges</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Custom liquidity bridge solutions connecting your platform to multiple liquidity providers.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900/30 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="h-6 w-6 text-warning-600 dark:text-warning-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Trading Tools</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Specialized trading tools, indicators, and automated trading systems for your platform.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Client Portals</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Custom client portals with account management, reporting, and communication features.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-error-100 dark:bg-error-900/30 rounded-xl flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-error-600 dark:text-error-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">System Integration</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Seamless integration between different systems, platforms, and third-party services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Requirements Analysis</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                We analyze your specific needs and create detailed technical specifications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-success-600 dark:text-success-400">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design & Planning</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Our team designs the solution architecture and creates a detailed project plan.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-600 dark:text-accent-400">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Agile development process with regular updates and milestone reviews.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 dark:bg-warning-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-warning-600 dark:text-warning-400">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Testing & QA</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Comprehensive testing including security, performance, and user acceptance testing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">05</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deployment</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Smooth deployment with minimal downtime and comprehensive documentation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-error-100 dark:bg-error-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-error-600 dark:text-error-400">06</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Ongoing support, maintenance, and updates to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-accent-600 via-primary-600 to-secondary-600 rounded-3xl p-12 text-white shadow-large">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project requirements and create a solution that perfectly fits your business needs.
            </p>
            <Link
              to="/contact"
              className="bg-white text-accent-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-neutral-100 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentPage;