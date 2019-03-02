export const AUTH_TOKEN = window.location.host + '/AUTH_TOKEN';

export const getUserSnippet = username => {
  debugger
  let initials = '';
  if (!username) {
    return initials;
  }

  const fullname = username.split(' ');
  const initialLetters = fullname.map(name => name.substring(0, 1));
  [initials] = initialLetters;
  if (initialLetters[1]) {
    initials  += initialLetters[1];
  }

  return initials.toUpperCase();
}