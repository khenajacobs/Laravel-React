import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "randomView": {
          "title": "Random View",
          "description": "This is a random view component.",
          "currentCount": "Current count: {{count}}",
          "incrementButton": "Increment"
        },
        "reactTestPage": {
          "title": "React Test Page",
          "todoList": "Todo List",
          "id": "ID",
          "completed": "Completed",
          "yes": "Yes",
          "no": "No"
        },
        "postForm": {
          "name": "Name",
          "email": "Email",
          "message": "Message",
          "submit": "Submit",
          "next": "Next",
          "previous": "Previous",
          "thankYou": "Thank you!",
          "successMessage": "Your form has been submitted successfully.",
          "title": "Contact Us",
          "nameRequired": "Name is required",
          "emailInvalid": "Invalid email address",
          "messageRequired": "Message is required",
          "step1": "Step 1: Personal Information",
          "step2": "Step 2: Message"
        }
      }
    },
    nl_BE: {
      translation: {
        "randomView": {
          "title": "Willekeurige Weergave",
          "description": "Dit is een willekeurige weergavecomponent.",
          "currentCount": "Huidige telling: {{count}}",
          "incrementButton": "Verhogen"
        },
        "reactTestPage": {
          "title": "React Test Pagina",
          "todoList": "Todo Lijst",
          "id": "ID",
          "completed": "Voltooid",
          "yes": "Ja",
          "no": "Nee"
        },
        "postForm": {
          "name": "Naam",
          "email": "E-mail",
          "message": "Bericht",
          "submit": "Verzenden",
          "next": "Volgende",
          "previous": "Vorige",
          "thankYou": "Dank je!",
          "successMessage": "Uw formulier is succesvol ingediend.",
          "title": "Contacteer Ons",
          "nameRequired": "Naam is verplicht",
          "emailInvalid": "Ongeldig e-mailadres",
          "messageRequired": "Bericht is verplicht",
          "step1": "Stap 1: Persoonlijke Informatie",
          "step2": "Stap 2: Bericht"
        }
      }
    },
    fr_BE: {
      translation: {
        "randomView": {
          "title": "Vue Aléatoire",
          "description": "Ceci est un composant de vue aléatoire.",
          "currentCount": "Compte actuel: {{count}}",
          "incrementButton": "Incrémenter"
        },
        "reactTestPage": {
          "title": "Page de Test React",
          "todoList": "Liste de Tâches",
          "id": "ID",
          "completed": "Terminé",
          "yes": "Oui",
          "no": "Non"
        },
        "postForm": {
          "name": "Nom",
          "email": "E-mail",
          "message": "Message",
          "submit": "Soumettre",
          "next": "Suivant",
          "previous": "Précédent",
          "thankYou": "Merci!",
          "successMessage": "Votre formulaire a été soumis avec succès.",
          "title": "Contactez Nous",
          "nameRequired": "Le nom est requis",
          "emailInvalid": "Adresse e-mail invalide",
          "messageRequired": "Le message est requis",
          "step1": "Étape 1: Informations Personnelles",
          "step2": "Étape 2: Message"
        }
      }
    }
  },
  lng: selectedLanguage, // Use the selected language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // React already escapes values
  }
});

export default i18n;