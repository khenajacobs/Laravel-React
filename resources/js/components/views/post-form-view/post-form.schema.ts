// resources/js/components/forms/formSchema.ts
import { z } from 'zod';
import i18n from 'i18next';

export const formSchema = z.object({
  name: z.string().min(1, i18n.t('form.nameRequired')),
  email: z.string().email(i18n.t('form.emailInvalid')),
  message: z.string().min(1, i18n.t('form.messageRequired')),
});

export type FormSchema = z.infer<typeof formSchema>;