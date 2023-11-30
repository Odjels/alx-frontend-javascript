export default function returnHowManyArguments(...args) {
  let num = 0;

  // eslint-disable-next-line no-unused-vars
  for (const _ of args) {
    num += 1;
  }
  return num;
}
