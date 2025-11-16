import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Settings, 
  Database, 
  Network, 
  BarChart3, 
  Key, 
  Monitor, 
  Zap,
  CheckCircle,
  Users,
  Code,
  Activity,
  Lock,
  Globe,
  Wrench
} from 'lucide-react';

const VirtusToolboxPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Virtus Toolbox
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Your Unified Trading Technology Command Center
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            The Virtus Toolbox is a comprehensive suite of integrated tools and applications designed specifically for brokers and trading firms. From platform management to risk monitoring, API integrations to client portals - everything you need in one unified environment.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1"
          >
            Request Access to Toolbox
          </Link>
        </div>
      </section>

      {/* Core Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Toolbox Applications</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Essential tools for MetaTrader platform management and integration
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-12 shadow-soft border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-6">REST API</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                An application that allows integrating the MetaTrader platform with any third-party systems: website, CRM, back-office, etc.
              </p>
              
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                It gives access to the MetaTrader server from any device, anywhere, and anytime with options to:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Create accounts and perform balance operations via the website
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Retrieve real-time account information, trading history, and positions
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Generate detailed reports and analytics for trading performance
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Integrate with CRM systems, payment gateways, and third-party services
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Platforms:</h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  MetaTrader 4 and MetaTrader 5
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-12 shadow-soft border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-success-100 dark:bg-success-900/30 rounded-xl flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-success-600 dark:text-success-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-6">Admin Tool</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                A comprehensive tool for managing MetaTrader server configurations, groups, and symbols with an intuitive interface.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Create, modify, and manage trading groups with custom settings
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Configure symbols, spreads, and trading conditions
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Bulk configuration updates and template management
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Platforms:</h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  MetaTrader 4 and MetaTrader 5
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-12 shadow-soft border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-6">Pricing Monitoring Tool</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Advanced tool for monitoring symbols pricing, detecting when symbols stop updating or experience delays in price feeds.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Monitor symbols pricing and detect when price feeds stop or freeze
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Automated alerts for pricing delays and feed interruptions
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Real-time status monitoring of all trading symbols and their price feeds
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Platforms:</h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  MetaTrader 4 and MetaTrader 5
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-12 shadow-soft border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900/30 rounded-xl flex items-center justify-center mb-6">
                <Activity className="h-6 w-6 text-warning-600 dark:text-warning-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-6">Hyperactivity Tool</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Advanced trading activity monitoring system to detect and manage hyperactive trading patterns and behaviors.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Real-time detection of excessive trading activity and scalping
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Automated risk management actions and account restrictions
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Customizable thresholds and behavioral pattern analysis
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Platforms:</h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  MetaTrader 4 and MetaTrader 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unified Management Features</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Centralized control and monitoring for all your trading technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Dashboard</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Unified dashboard showing status, performance metrics, and alerts from all connected systems and applications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Key className="h-8 w-8 text-success-600 dark:text-success-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">API Key Management</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Centralized API key and token management for MetaTrader 4, MetaTrader 5, FIX, and REST integrations with security controls.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="h-8 w-8 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">System Status Monitor</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Real-time monitoring of all platform connectors including MetaTrader 4, MetaTrader 5, cTrader, and FIX gateways.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 dark:bg-warning-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-warning-600 dark:text-warning-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">One-Click Management</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Install, enable, disable, and configure applications and plugins with simple one-click operations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SSO Authentication</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Single Sign-On (SSO) with JWT/OAuth2 support for secure, seamless access across all Virtus applications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-error-100 dark:bg-error-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-error-600 dark:text-error-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Tenant Support</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Support for multiple trading environments, white-label configurations, and client segregation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Virtus Toolbox?</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Streamline your trading operations with our integrated toolbox approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Unified Experience</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Access all your trading tools from one central location with consistent UI/UX across all applications.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  All tools are pre-integrated and work together seamlessly, eliminating compatibility issues and data silos.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rapid Deployment</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Quick setup and deployment with pre-configured integrations and automated installation processes.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Built to scale with your business from startup to enterprise-level operations with modular components.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cost Efficiency</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Bundled toolbox pricing provides better value than individual tool licensing with volume discounts.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Single point of contact for all toolbox components with 24/5 expert support and comprehensive training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Process</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              From consultation to full deployment in structured phases
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Requirements Analysis</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Detailed assessment of your current setup and specific toolbox requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-success-600 dark:text-success-400">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Configuration</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Tailored configuration of toolbox components to match your business processes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-600 dark:text-accent-400">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deployment & Integration</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Seamless deployment with integration to your existing trading infrastructure.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 dark:bg-warning-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-warning-600 dark:text-warning-400">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Training & Support</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Comprehensive training and ongoing support to maximize toolbox utilization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-3xl p-12 text-white shadow-large">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Streamline Your Trading Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how the Virtus Toolbox can transform your trading technology management. Contact us for a personalized demonstration and implementation plan.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-neutral-100 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1"
            >
              Request Toolbox Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtusToolboxPage;