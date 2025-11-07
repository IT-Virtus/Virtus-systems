import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, Settings, Code, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SEOHead from '../components/SEOHead';

const HomePage = () => {
  return (
    <div className="pt-16">
      <SEOHead 
        title="Virtus Systems | Simple, Reliable FinTech Infrastructure"
        description="We provide hosting, platform administration, and software for brokers and fintech teams. 50+ active clients, 99.99% uptime SLA, 24/7 expert support."
        keywords="fintech infrastructure, broker hosting, MetaTrader hosting, trading platform, cTrader, platform administration"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Simple, reliable fintech infrastructure.
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              We provide hosting, platform administration, and software for brokers and fintech teams.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale-up" delay={400}>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-2 hover:scale-105"
            >
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <AnimatedSection animation="scale-up" delay={100}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-lg opacity-90">Active Clients</div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="scale-up" delay={200}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 hover:scale-110 transition-transform duration-300">99.99%</div>
                  <div className="text-lg opacity-90">Uptime SLA</div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="scale-up" delay={300}>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-lg opacity-90">Expert Support</div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="slide-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">Our Services</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Specialized FinTech solutions tailored for your success
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Hosting */}
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="glass-effect rounded-2xl p-8 shadow-large card-hover group h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Server className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Hosting</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  High-availability hosting for MT4/MT5 and cTrader. 24/7 monitored, scalable, secure.
                </p>
                <Link
                  to="/hosting"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-all duration-300 inline-flex items-center group hover:underline"
                >
                  Learn More
                  <span className="ml-1 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </AnimatedSection>

            {/* Platform Admin Service */}
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="glass-effect rounded-2xl p-8 shadow-large card-hover group h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-success-500 to-primary-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Settings className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Virtus Services</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Complete platform management, monitoring, and technical support for your trading infrastructure.
                </p>
                <Link
                  to="/platform-admin"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-all duration-300 inline-flex items-center group hover:underline"
                >
                  Learn More
                  <span className="ml-1 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </AnimatedSection>

            {/* Software */}
            <AnimatedSection animation="slide-up" delay={300}>
              <div className="glass-effect rounded-2xl p-8 shadow-large card-hover group h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Code className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Software</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  APIs, CRM, and risk dashboards built for brokers.
                </p>
                <Link
                  to="/development"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-all duration-300 inline-flex items-center group hover:underline"
                >
                  Learn More
                  <span className="ml-1 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* CTA Section */}
          <AnimatedSection animation="scale-up">
            <div className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white shadow-large">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Elevate Your Trading Infrastructure?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Let's discuss how our specialized solutions can enhance your trading platform's performance and reliability.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-neutral-100 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-2 hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;