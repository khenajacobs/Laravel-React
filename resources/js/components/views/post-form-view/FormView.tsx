// resources/js/components/forms/FormView.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormComponent from './components/FormComponent';
import { FormSchema } from './post-form.schema';

const FormView: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (data: FormSchema) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {isSubmitted ? (
        <div role="alert" aria-live="assertive" className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
          <h2 className="text-lg font-bold mb-2">{t('postForm.thankYou')}</h2>
          <p>{t('form.successMessage')}</p>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">{t('postForm.title')}</h1>
          <FormComponent onSubmit={handleSubmit} />
        </>
      )}
    </div>
  );
};

export default FormView;