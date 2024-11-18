import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 
            focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 
            focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 
            focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;