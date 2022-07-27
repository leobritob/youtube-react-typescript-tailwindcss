import { ISendEmail, ISendEmailResponse } from 'interfaces';
import { Api } from 'providers';

const sendEmail = (data: ISendEmail) =>
  Api.post<ISendEmailResponse>('/api/v1/mails', data);

export const MailServices = {
  sendEmail,
};
