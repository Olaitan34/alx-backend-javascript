import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const resolved = {};
  await uploadPhoto().then((values) => {
    Object.assign(resolved, values);
  }).catch(() => {
    console.log('Signup system offline');
  });
  await createUser().then((values) => {
    Object.assign(resolved, values);
  }).catch(() => {
    console.log('Signup system offline');
  });
  console.log(`${resolved.body} ${resolved.firstName} ${resolved.lastName}`);
}
