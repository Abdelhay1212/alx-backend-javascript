import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const userName = createUser();
  const userPhoto = uploadPhoto();

  let str = '';

  Promise.all([userPhoto, userName])
    .then(([photo, user]) => {
      str += `${photo.body} ${user.firstName} ${user.lastName}`;
      console.log(str);
    })
    .catch(() => console.error('Signup system offline'));
}
