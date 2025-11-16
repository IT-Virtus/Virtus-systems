import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import SEOHead from '../components/SEOHead';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email';
    if (!formData.company.trim()) return 'Company is required';
    if (!formData.service) return 'Please select a service';
    if (!formData.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setFormStatus('error');
      setFormMessage(validationError);
      return;
    }

    setFormStatus('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/xeornegq', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormMessage('Thank you! We\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        const data = await response.json();
        if (data.errors) {
          setFormStatus('error');
          setFormMessage(data.errors.map((error: any) => error.message).join(', '));
        } else {
          throw new Error('Failed to send message');
        }
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Sorry, there was an error sending your message. Please try again or email us directly.');
    }
  };

  // Alternative: Direct form submission without JavaScript validation
  const handleDirectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xeornegq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormMessage('Thank you! We\'ll get back to you within 24 hours.');
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Sorry, there was an error sending your message. Please try again or email us directly.');
    }
  };

  return (
    <div className="pt-16">
      <SEOHead 
        title="Contact Virtus Systems | Get Expert FinTech Support"
        description="Contact our team for hosting, platform administration, or custom development services. We respond within 24 hours."
        keywords="contact virtus systems, fintech support, broker hosting support, trading platform help"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get in Touch
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={200}>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Tell us what you need — hosting, admin, or software.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection animation="slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden fields for Formspree */}
            <input type="hidden" name="_to" value="it@virtus-systems.net" />
            <input type="hidden" name="_subject" value="New Contact Form Submission from Virtus Systems" />
            <input type="hidden" name="_next" value="https://virtus-systems-finte-hpet.bolt.host/contact" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-400"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-400"
                placeholder="Your company"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">
                Service Needed *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-400"
              >
                <option value="">Select a service</option>
                <option value="hosting">Hosting</option>
                <option value="platform-admin">Platform Admin Services</option>
                <option value="development">Custom Development</option>
                <option value="consultation">General Consultation</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-primary-400 resize-vertical"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>

            {formStatus !== 'idle' && (
              <div className={`p-4 rounded-xl flex items-center ${
                formStatus === 'success' 
                  ? 'bg-success-50/20 text-success-800' 
                  : 'bg-error-50/20 text-error-800'
              }`}>
                {formStatus === 'success' ? (
                  <CheckCircle className="h-5 w-5 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2" />
                )}
                {formMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 disabled:from-primary-400 disabled:to-secondary-400 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed shadow-medium hover:shadow-large transform hover:-translate-y-1 hover:scale-105 disabled:transform-none disabled:hover:scale-100"
            >
              {formStatus === 'submitting' ? (
                <div className="flex items-center justify-center">
                  <LoadingSpinner size="sm" className="mr-2" />
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="slide-up">
            <h2 className="text-3xl font-bold mb-8">Other Ways to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <p className="text-neutral-600">
                  <a href="mailto:giorgos.v@virtus-systems.net" className="hover:text-primary-600 transition-colors">
                    giorgos.v@virtus-systems.net
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Response Time</h3>
                <p className="text-neutral-600">
                  We typically respond within 24 hours (24/5 support)
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;