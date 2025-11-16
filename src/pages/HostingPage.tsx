import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, CheckCircle, AlertCircle, Settings, Zap, Globe, Clock, Database, Network, Monitor, Lock } from 'lucide-react';

const HostingPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Enterprise Trading Platform Hosting
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed">
            Ultra-Low Latency Infrastructure Built for Financial Markets
          </p>
          <p className="text-lg text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Purpose-built hosting infrastructure optimized for MetaTrader 4/5, cTrader, and custom trading platforms. 
            With sub-millisecond execution times, 99.99% uptime SLA, and global data center presence.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1"
          >
            Get Enterprise Hosting
          </Link>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Trading Platform Hosting?</h2>
            <p className="text-lg text-neutral-600">
              Purpose-built infrastructure designed specifically for the demanding requirements of financial trading
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-soft card-hover border border-neutral-200">
              <div className="w-12 h-12 bg-primary-100/30 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ultra-Low Latency</h3>
              <p className="text-neutral-600">
                Sub-millisecond execution times with direct market connectivity and optimized network routing for competitive trading.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft card-hover border border-neutral-200">
              <div className="w-12 h-12 bg-success-100/30 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
              <p className="text-neutral-600">
                Multi-layered security with DDoS protection, SSL encryption, firewall management, and compliance with financial regulations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft card-hover border border-neutral-200">
              <div className="w-12 h-12 bg-accent-100/30 rounded-xl flex items-center justify-center mb-6">
                <Server className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Dedicated Resources</h3>
              <p className="text-neutral-600">
                High-performance dedicated servers with guaranteed resources, SSD storage, and scalable configurations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft card-hover border border-neutral-200">
              <div className="w-12 h-12 bg-warning-100/30 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-warning-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Data Centers</h3>
              <p className="text-neutral-600">
                Strategic locations in London, New York, Tokyo, and Frankfurt for optimal performance and regulatory compliance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft card-hover border border-neutral-200">
              <div className="w-12 h-12 bg-secondary-100/30 rounded-xl flex items-center justify-center mb-6">
                <Monitor className="h-6 w-6 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">24/5 Monitoring</h3>
              <p className="text-neutral-600">
                Proactive monitoring with automated alerts, performance tracking, and immediate incident response.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft card-hover border border-neutral-200">
              <div className="w-12 h-12 bg-error-100/30 rounded-xl flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-error-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Automated Backups</h3>
              <p className="text-neutral-600">
                Daily automated backups with point-in-time recovery, disaster recovery planning, and data redundancy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Optimization Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Optimized for Trading Platforms</h2>
            <p className="text-lg text-neutral-600">
              Specialized configurations for maximum performance across all major trading platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">MetaTrader 4 & 5</h3>
              <p className="text-neutral-600">
                Optimized Windows Server environments with pre-configured MT4/MT5 installations and performance tuning.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="h-8 w-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trading APIs & Bridges</h3>
              <p className="text-neutral-600">
                Optimized hosting for trading APIs, liquidity bridges, and custom trading applications with high-performance configurations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Platforms</h3>
              <p className="text-neutral-600">
                Flexible hosting solutions for proprietary trading platforms with custom requirements and integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantees Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Guarantees</h2>
            <p className="text-lg text-neutral-600">
              Backed by industry-leading SLAs and performance commitments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">99.99% Uptime SLA</h3>
                <p className="text-neutral-600">
                  Guaranteed uptime with redundant systems, failover protection, and service level credits for any downtime.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sub-5ms Latency</h3>
                <p className="text-neutral-600">
                  Ultra-low latency connections to major liquidity providers and exchanges with guaranteed response times.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">24/5 Expert Support</h3>
                <p className="text-neutral-600">
                  Dedicated support team with trading platform expertise available during business days.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Scalable Resources</h3>
                <p className="text-neutral-600">
                  Instantly scalable CPU, RAM, and storage resources to handle peak trading volumes and growth.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
                <p className="text-neutral-600">
                  Hosting infrastructure compliant with FCA, CySEC, ASIC, and other major financial regulatory requirements.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-success-100/30 rounded-full flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-success-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Migration Assistance</h3>
                <p className="text-neutral-600">
                  Free migration services from your current hosting provider with zero downtime and data integrity guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Plans Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-3xl p-12 text-white shadow-large">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Upgrade Your Trading Infrastructure?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get enterprise-grade hosting with guaranteed performance, security, and support. Contact us for a custom quote tailored to your specific requirements.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-neutral-100 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-1"
            >
              Get Custom Hosting Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HostingPage;