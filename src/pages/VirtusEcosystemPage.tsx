import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Database, BarChart3, Server, Zap, Shield } from 'lucide-react';

const VirtusEcosystemPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Virtus Ecosystem
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Connecting Brokers, Liquidity, and Technology in One Unified Framework.
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            The Virtus Ecosystem is our complete brokerage technology environment — uniting hosting, platform management, liquidity bridges, CRM, APIs, and analytics into one integrated network. From infrastructure to liquidity, Virtus powers every layer of your brokerage.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1"
          >
            Join the Virtus Ecosystem
          </Link>
        </div>
      </section>

      {/* Ecosystem Components Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Ecosystem Components</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Every component working together to power your brokerage success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                <Network className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Liquidity & Bridge Systems</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Seamless liquidity connectivity across MT4, MT5, and cTrader with aggregation, smart routing, and risk tools.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-success-100 dark:bg-success-900/30 rounded-xl flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-success-600 dark:text-success-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Broker CRM & Client Portal</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Fully integrated CRM with KYC, client onboarding, deposits/withdrawals, and account insights.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Risk & Analytics Hub</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Monitor exposure, P&L, toxic flow, and broker metrics in real time with customizable dashboards.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900/30 rounded-xl flex items-center justify-center mb-6">
                <Server className="h-6 w-6 text-warning-600 dark:text-warning-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Hosting & Infrastructure</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Low-latency dedicated hosting, backups, and DDoS protection optimized for trading platforms.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">API & Integration Layer</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Unified APIs for trading, account management, and data feeds for internal and third-party systems.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-soft card-hover border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-error-100 dark:bg-error-900/30 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-error-600 dark:text-error-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Enterprise-grade security protocols, regulatory compliance tools, and audit trail management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose the Virtus Ecosystem?</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              A unified approach to brokerage technology that scales with your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Unified Integration</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                All components work seamlessly together, eliminating integration headaches and reducing complexity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-success-600 dark:text-success-400">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalable Architecture</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Built to grow with your business from startup to enterprise-level operations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-600 dark:text-accent-400">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Bundled ecosystem pricing provides better value than individual component licensing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 dark:bg-warning-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-warning-600 dark:text-warning-400">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Single point of contact for all ecosystem components with 24/5 expert support.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">05</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Deployment</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Pre-integrated components mean faster time-to-market for your brokerage operations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-error-100 dark:bg-error-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-error-600 dark:text-error-400">06</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Future-Proof</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Regular updates and new features ensure your technology stays ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-accent-600 via-primary-600 to-secondary-600 rounded-3xl p-12 text-white shadow-large">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join the Virtus Ecosystem?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your brokerage with our complete technology ecosystem. Let's discuss how we can power your success.
            </p>
            <Link
              to="/contact"
              className="bg-white text-accent-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-neutral-100 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1"
            >
              Join the Ecosystem
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtusEcosystemPage;