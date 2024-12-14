//1-2-3
const person = {
  age: 19,
  fname: `Murodjon`,
  location: `Fergana`,
  info: {
    adress: `Toshlok district`,
    zipCode: 26802,
  },
};
console.log(person);

//3
const meal = {
  uzbek: `palov`,
  turkey: `kebab`,
  germany: `hamburger`,
};
//create
meal.japan = `sushi`;
//update
meal[`uzbek`] = `somsa`;
//delete
delete meal.japan;

//4
const user = {
  name: `Toshpulatova`,
  age: 30,
  adress: {
    city: `TAshkent`,
    street: `Amir temur str`,
    zip: `1000000`,
  },
  contact: {
    email: `someone@gmail.com`,
    phone: {
      home: 911,
      work: 103,
    },
  },
};

const { contact: home } = user;
const { contact: work } = user;

//5
//1.undefined yoki null qiymatlariga murojaat qilishda xatoliklardan saqlanish
//agar mavjud bo'lmagan propertyga murojat qiliinsa xatoliklar yuzaga kelishii olladinin oladi ya'ni null yoki undefinde qiymat qaytaradi
//2.Code readability (kodni o'qish va tushunishni osonlashtiradi)
//optinal chaing bilan kodni toza va aniq yozish mumkin va albatta o'shib tushinishni qulaylashtiradi
//3.O'zgaruvchilarga xavfsiz tarzda murojaat qilish
//ba'zan o'zgaruvchi obyekt orqali ko'plab propertylarga murojat qilish kerka bo'ladi, optional chaining bilan esa bu havsiz va oson bo'ladi
