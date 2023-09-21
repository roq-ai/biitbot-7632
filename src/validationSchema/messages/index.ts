import * as yup from 'yup';

export const messageValidationSchema = yup.object().shape({
  content: yup.string().required(),
  timestamp: yup.date().required(),
  platform: yup.string().nullable(),
  status: yup.string().nullable(),
  sender_id: yup.string().nullable().required(),
  receiver_id: yup.string().nullable().required(),
});
