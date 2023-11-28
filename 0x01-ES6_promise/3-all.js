import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const profilePhoto = uploadPhoto();
  const userProfile = createUser();
  Promise.all([profilePhoto, userProfile])
    .then((value) => {
      const { body } = value[0];
      const { firstName, lastName } = value[1];

      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
