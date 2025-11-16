import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Monitor, Shield, Zap, Users, Wrench, CheckCircle, Server, Database, Code } from 'lucide-react';

const PlatformAdminPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Virtus Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Complete Trading Platform Management & Technical Excellence
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            Fully managed setup, optimization, and maintenance with secure, high-performance server configurations. Compliance with industry security and operational standards, backed by 24/5 monitoring, support, and troubleshooting.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-success-600 to-primary-600 hover:from-success-700 hover:to-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1"
          >
            Get Expert Support
          </Link>
        </div>
      </section>

      {/* What is Included Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Included</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Complete platform management services covering every aspect of your trading infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Platform Setup & Administration</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Complete MetaTrader 4 and MetaTrader 5, cTrader, DevExperts, MatchTrader, OneZero, PrimeXM, YourBourse, and FXCubic installation and server setup. Integration of trading servers, data feeds, and liquidity providers. Ongoing security updates and system maintenance.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Optimization & Customization</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Performance tuning for faster execution speeds. Custom group and symbol setups tailored to your needs. Deployment of risk management and monitoring tools.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Third-Party Integrations</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Support for PAMM, MAM, social trading, and copy trading tools. Seamless CRM and liquidity provider integrations. API development for custom reporting and third-party systems.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-success-100 dark:bg-success-900/30 rounded-xl flex items-center justify-center mb-6">
                <Monitor className="h-6 w-6 text-success-600 dark:text-success-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Infrastructure Monitoring & Support</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                24/5 uptime monitoring with instant incident alerts. Rapid troubleshooting and issue resolution. Ongoing technical advisory and optimization services.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900/30 rounded-xl flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-warning-600 dark:text-warning-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Trading Platform Migration & Upgrades</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Secure migrations with minimal downtime. Smooth transfer of accounts, historical data, and settings. Hassle-free platform upgrades and transition planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Technical Services</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Specialized services for complex trading environments and enterprise requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Database Management</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                MySQL and SQL Server optimization, backup strategies, and data integrity management for trading platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-success-600 dark:text-success-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Plugin Development</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Bespoke MetaTrader 4 and MetaTrader 5 plugins, expert advisors, and custom indicators tailored to your specific requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">System Integration</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Seamless integration between trading platforms, CRM systems, payment processors, and third-party services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Virtus Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Virtus Services?</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Proven expertise and reliable support for your trading infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Certified Platform Experts</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Our team holds official certifications from MetaQuotes and Spotware, ensuring expert-level platform knowledge.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proactive Monitoring & Alerts</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Advanced monitoring systems with automated alerts and proactive issue resolution before problems impact your business.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cost-Effective Solution</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  More affordable than hiring full-time technical staff, with access to a complete team of specialists.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Scalable & Flexible</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Services that adapt and scale with your business growth, from startup brokers to enterprise operations.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rapid Response Times</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Critical issues resolved within minutes, not hours, ensuring minimal downtime for your trading operations.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Documentation</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Detailed documentation and knowledge transfer to ensure your team understands all system configurations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Levels Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-success-600 via-primary-600 to-secondary-600 rounded-3xl p-12 text-white shadow-large">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your Trading Platform?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our certified experts handle your platform management while you focus on growing your brokerage business.
            </p>
            <Link
              to="/contact"
              className="bg-white text-success-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-neutral-100 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1"
            >
              Get Expert Support Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformAdminPage;