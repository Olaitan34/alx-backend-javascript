import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Call the two functions and capture their promises
  const photoPromise = uploadPhoto(fileName);
  const userPromise = signUpUser(firstName, lastName);

  // Use Promise.allSettled to wait for all promises to settle
  return Promise.allSettled([photoPromise, userPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })))
    .catch((error) => {
      // Handle any errors during the process
      console.error('Error during signup process:', error);
      throw error; // Propagate the error further if needed
    });
}
