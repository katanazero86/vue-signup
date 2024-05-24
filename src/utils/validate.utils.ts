export const validEmail = (targetEmail: string) => {
  const emailRegExp = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');
  return emailRegExp.test(targetEmail);
};

export const validPassword = (targetPassword: string) => {
  const passwordRegExp = new RegExp(
    '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
  );
  return passwordRegExp.test(targetPassword);
};
