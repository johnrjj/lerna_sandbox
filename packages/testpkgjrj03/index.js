import { x } from 'testpkgjrj01';

const y = () => console.log('1hello from pkg 2');

console.log('inside testpkgjrj02', x());

export {
  y,
};
