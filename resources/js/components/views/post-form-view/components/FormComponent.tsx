import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { FormSchema, formSchema } from '../post-form.schema';

interface FormComponentProps {
  onSubmit: (data: FormSchema) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const handleNext = async () => {
    const isValid = await trigger(['name', 'email']);
    if (isValid) {
      setStep(2);
    }
  };

  const handlePrevious = () => {
    setStep(1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {step === 1 && (
        <>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('postForm.name')}</label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('postForm.email')}</label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <button type="button" onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
            {t('postForm.next')}
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('postForm.message')}</label>
            <textarea
              id="message"
              {...register('message')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={handlePrevious} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition duration-300">
              {t('postForm.previous')}
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
              {t('postForm.submit')}
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default FormComponent;