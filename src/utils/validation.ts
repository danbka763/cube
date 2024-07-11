export const validateLogin = (login: string): boolean => {
  // Буквы, цифры, точки и подчёркивания
  const loginRegex = /^[a-zA-Z0-9._]{4,20}$/;
  return loginRegex.test(login);
};

export const validatePassword = (password: string): boolean => {
  // Буквы, цифры, спец-символы
  const passwordRegex = /^[A-Za-z0-9\d@$!%*#?&_]{4,20}$/;
  return passwordRegex.test(password);
};
