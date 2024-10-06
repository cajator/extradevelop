import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      setFormStatus('error');
      setErrorMessage('reCAPTCHA není dostupná');
      return;
    }

    try {
      const token = await executeRecaptcha('submit');
      console.log('Recaptcha token:', token);

      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        console.error('Server error:', data);
        setFormStatus('error');
        setErrorMessage(data.error || 'Neznámá chyba na straně serveru');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
      setErrorMessage('Chyba připojení k serveru');
    }

    setTimeout(() => {
      setFormStatus(null);
      setErrorMessage('');
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Jméno</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Předmět</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Zpráva</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        ></textarea>
      </div>
      
      {formStatus === 'sending' && (
        <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg" role="alert">
          Odesílání zprávy...
        </div>
      )}
      {formStatus === 'success' && (
        <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
          Zpráva byla úspěšně odeslána!
        </div>
      )}
      {formStatus === 'error' && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
          Při odesílání zprávy došlo k chybě: {errorMessage}
        </div>
      )}
      
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        disabled={formStatus === 'sending'}
      >
        {formStatus === 'sending' ? 'Odesílání...' : 'Odeslat zprávu'}
      </button>
    </form>
  );
};

const Contact = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}>
      <div className="container mx-auto px-4 py-8 pt-24">
        <h1 className="text-4xl font-bold mb-8 text-center">Kontaktujte nás</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Levý sloupec s kontaktními informacemi */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Kontaktní informace</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-4" />
                <p>Oplealova 1417/25, 110 00 Praha 1</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-4" />
                <p>+420 776 412 910</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-4" />
                <p>info@extradevelop.cz</p>
              </div>
              <div className="flex items-start">
                <Clock className="text-blue-600 mr-4 mt-1" />
                <div>
                  <p className="font-semibold">Otevírací doba:</p>
                  <p>Pondělí - Pátek: 9:00 - 17:00</p>
                  <p>Sobota - Neděle: Zavřeno</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Kde nás najdete</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.8905260553607!2d14.438333015738461!3d50.07226857942572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94a082cf9b6d%3A0x5a2a946c2a9c3e49!2sOplealova%201417%2F25%2C%20110%2000%20Nov%C3%A9%20M%C4%9Bsto!5e0!3m2!1scs!2scz!4v1635960448765!5m2!1scs!2scz"
                  width="100%"
                  height="100%"
                  style={{border:0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa s umístěním naší kanceláře"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Pravý sloupec s kontaktním formulářem */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Napište nám</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default Contact;