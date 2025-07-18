import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  numero?: string;
  subject: string;
  message: string;
}

function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    numero: '',
    subject: '',
    message: '',
  });

  // Tu peux gérer un état simple de statut si tu veux afficher un message après soumission
  // Ici, on laisse la soumission classique donc pas de gestion JS du status

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen transition duration-300">
      {/* Hero */}
      <section className="w-full py-20 px-4 text-center bg-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold main-color mb-6">
            Prêt à échanger avec nous ?
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4">
            Vous avez une question, une idée, ou besoin d’assistance ? Nous sommes là pour vous écouter et vous guider.
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400">
            Contactez-nous via le formulaire ou avec les informations en bas de page. Nous répondrons rapidement.
          </p>
        </div>
      </section>

      {/* Bloc principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-16 max-w-7xl mx-auto">
        {/* Formulaire Netlify Forms */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="bg-white dark:bg-gray-800 shadow-xl p-8 rounded-2xl space-y-6"
        >
          {/* Champs cachés requis par Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Ne pas remplir ce champ: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>

          {[
            { key: 'name', label: 'Nom' },
            { key: 'email', label: 'Email' },
            { key: 'numero', label: 'Numéro WhatsApp' },
            { key: 'subject', label: 'Sujet' },
          ].map(({ key, label }) => (
            <div key={key}>
              <label
                htmlFor={key}
                className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200"
              >
                {label}
              </label>
              <input
                id={key}
                name={key}
                type={key === 'email' ? 'email' : 'text'}
                required={key !== 'numero'}
                value={(form as any)[key]}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-main-color hover:bg-hover-main-color duration-300 text-white font-semibold rounded-xl transition"
          >
            Envoyer
          </button>
        </form>

        {/* Coordonnées & Localisation (inchangés) */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg space-y-8 text-gray-800 dark:text-gray-100">
          <h2 className="text-2xl font-bold mb-4">Nos coordonnées</h2>

          <div className="space-y-4">
            <div className="font-semibold">
              <p>Adresse</p>
              <p className="main-color">123 Rue de l’Avenir, Casablanca, Maroc</p>
            </div>

            <div className="font-semibold">
              <p>Téléphone</p>
              <a href="tel:+212600000000" className="main-color">+212 6 00 00 00 00</a>
            </div>

            <div className="font-semibold">
              <p>Email</p>
              <a href="mailto:contact@oralise.com" className="main-color">contact@oralise.com</a>
            </div>
          </div>

          <div className="flex flex-col h-auto w-full overflow-hidden rounded-xl">
            <img
              src="/images/image.jpg"
              alt="Localisation de notre bureau"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Contact };
