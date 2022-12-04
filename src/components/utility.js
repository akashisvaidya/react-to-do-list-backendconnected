const length = 6;
const str = "wqertyiupasdkljfghzxncmvbALKSDJFHIEORUZMXCBV";
export const randomStr = () => {
  let _id = "";
  for (let i = 0; i < length; i++) {
    _id += str[Math.floor(Math.random() * str.length)];
  }
  return _id;
};
