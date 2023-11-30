import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const resultArray = [];
      values.forEach((val) => {
        if (val.status === 'fulfilled') {
          resultArray.push({
            status: val.status,
            value: val.value,
          });
        } else {
          resultArray.push({
            status: val.status,
            value: `Error: ${val.reason.message}`,
          });
        }
      });
      return resultArray;
    });
}
