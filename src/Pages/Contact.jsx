import React from 'react';
import { Mail, MapPin, Linkedin, Twitter, Github, User, FileText, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white text-text-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm  bg-purple-500/10 text-purple-500 font-medium text-purple-accent border border-purple-accent px-4 py-1 rounded-full inline-block mb-4">
            Get In Touch
          </span>
          <h1 className="text-5xl font-bold text-text-light mb-4  text-purple-600 dark:text-purple-400">Let's Connect</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Got a project in mind? Drop me a message and let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information Card */}
          <div className="dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-text-light mb-6 text-purple-600 dark:text-purple-400">Contact Information</h3>

            <div className="flex items-center mb-4">
              <Mail className="w-5 h-5 text-purple-accent mr-3" />
              <div>
                <p className="text-sm text-text-muted">Email</p>
                <p className="text-md text-text-light">adhikarisarthak33@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <MapPin className="w-5 h-5 text-purple-accent mr-3" />
              <div>
                <p className="text-sm text-text-muted">Location</p>
                <p className="text-md text-text-light">Bharatpur-6, Chitwan, Nepal</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-text-light mb-4 text-purple-600 dark:text-purple-400">Social Media</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="p-2 rounded-full bg-dark-background hover:bg-purple-accent transition-colors duration-300">
                <Github className="w-6 h-6 text-text-light" />
              </a>
              <a href="#" className="p-2 rounded-full bg-dark-background hover:bg-purple-accent transition-colors duration-300">
                <Linkedin className="w-6 h-6 text-text-light" />
              </a>
              <a href="#" className="p-2 rounded-full bg-dark-background hover:bg-purple-accent transition-colors duration-300">
                <Twitter className="w-6 h-6 text-text-light" />
              </a>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-xl font-semibold text-text-light mb-2 text-purple-600 dark:text-purple-400">Response Time</h3>
              <p className="text-sm text-text-muted">
                I typically reply within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-muted sr-only">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 rounded-md bg-dark-background border border-gray-700 text-text-light placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-purple-accent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-muted sr-only">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-md bg-dark-background border border-gray-700 text-text-light placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-purple-accent"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-text-muted sr-only">Subject</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Job opportunity / Collaboration..."
                    className="w-full pl-10 pr-4 py-3 rounded-md bg-dark-background border border-gray-700 text-text-light placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-purple-accent"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-text-muted sr-only">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-text-muted" />
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me more about your project, your timeline, and what you're looking to achieve..."
                    className="w-full pl-10 pr-4 py-3 rounded-md bg-dark-background border border-gray-700 text-text-light placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-purple-accent resize-y"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white cursor-pointer py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
            <p className="text-center text-xs text-text-muted mt-4">
              I value your privacy. Your information will never be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;