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

export const validPhone = (targetPhone: string) => {
  const phoneRegExp = new RegExp('^0\\d{2}[ -]?\\d{3,4}[ -]?\\d{4}$');
  return phoneRegExp.test(targetPhone);
};

export const validCardNumber = (targetCardNumber: string) => {
  if (targetCardNumber.length !== 16) {
    return false;
  }

  let sum = 0;
  const lastNum = parseInt(targetCardNumber[targetCardNumber.length - 1]);

  // 마지막 숫자를 제거하고, 뒤집으면 1번째가 가장 오른쪽 짝수번째 시작이 된다.
  const reverseCardNumber = targetCardNumber
    .split('')
    .slice(0, targetCardNumber.length - 1)
    .reverse()
    .join('');

  for (let i = 0; i < reverseCardNumber.length; i++) {
    let digit = parseInt(reverseCardNumber[i]);
    if (i % 2 === 0) {
      digit *= 2; // 짝수번째 숫자에 2를 곱한다.
      if (digit > 9) {
        // 곱한 값이 9 이상이면 각 자리수의 값을 더함
        // 숫자가 9인 경우, 9*2를 하면 최대 나오는 숫자는 18임 1 + 8 = 9 이므로, 그냥 9를 빼주면 됨
        // digit = Math.floor(digit / 10) + (digit % 10);
        digit -= 9;
      }
    }

    sum += digit;
  }
  sum += lastNum;

  return sum % 10 === 0;
};
