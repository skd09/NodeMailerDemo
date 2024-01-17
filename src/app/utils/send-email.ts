import { error } from 'console';
import { FormData } from '../components/contact'

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/contact';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((error) => {
      alert(error);
    });
}