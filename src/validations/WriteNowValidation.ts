import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const WriteNowValidationSchema = yup.object({
  destinationName: yup.string().required('Preenche o nome completo'),
  destinationAddress: yup
    .string()
    .email('Preenche um e-mail válido')
    .required('Preenche o e-mail'),
  dueDate: yup.string().required('Preenche uma data'),
  subject: yup.string().required('Preenche o assunto'),
  body: yup.string().required('Preenche o conteúdo'),
});

export const WriteNowResolver = yupResolver(WriteNowValidationSchema);
