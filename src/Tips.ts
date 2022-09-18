/*
* 1. Đối với những con Số hay biến thì nên khai báo rõ ràng để người sau đọc còn biết.
* 2. Đối với sử dụng câu điều kiện quá nhiều thì chúng ta có thể sử dụng Switch hoặc sửa dụng Object hoặc new Map để sử lý nó.
* 3. Chúng ta nên sử lý những câu điều kiện ở ngoài rồi mới đưa vào IF/ELSE là đẹp.
*/



// Vấn đề xảy ra là 30 không có ý nghĩa có thể làm ngta khác không hiểu code của mình
// const isOldEnough = (user: any) => {
//     return user.age ?? 0 > 30;
// }

const AGE_REQUIREMENT = 30;
const isOldEnough = (user: any) =>  {
    return user.age > AGE_REQUIREMENT ? true : false
}

console.log(isOldEnough(40));

//SOLID: Phận vào nguyên tắc 1 function chỉ nên thực hiện 1 nhiệm vụ duy nhất
// const validateCreate = (create: any, isRobo: any) =>  {
//     if (isRobo) {
         // todo..
//     }else {
         // todo..
//     }
// }

const validateCreate = (create: any) => {
        // todo..
}

const validateHuman = (user: any) => {
        // todo..
}

// Lv1:
if (user.age > 22 && username === 'kiet' && user.blog ==='') {
    // todo...
}

// Lv2: 
const isUser = user.age > 22 && username === 'kiet' && user.blog ==='';
if(isUser) {
    // todo...
}

// Lv3: 
const isOk = (user:any) => {
    return (
        user.age > 22,
        user.name === 'kiet',
        user.blog === ''
    )
}
if (isOk(user)) {
// todo...
}

// Todo: Khác nhau giữa IF/ELSE and Swich
/* 
  '100': 'Continue',
  '101': 'Switching Protocols',
  '102': 'Processing',
  '103': 'Early Hints',
  '200': 'OK',
  '201': 'Created',
  '202': 'Accepted',
  '203': 'Non-Authoritative Information',
  '204': 'No Content',
*/

// Use IF/ELSE
// const reasonPhraseCode = (code: number) => {
//     if (code === 100) {
//         console.log('Continue');
//     }else if (code === 101) {
//         console.log('Switching Protocols');
//     }else if (code === 102) {
//         console.log('Processing');
//     }else if (code === 103) {
//         console.log('Early Hints');
//     }else if ( code === 200) {
//         console.log('OK');
//     }else if (code === 201){
//         console.log('Created');
//     }else if (code === 202){
//         console.log('Accepted');
//     }else if (code === 203) {
//         console.log('Non-Authoritative Information');
//     }else if (code === 204) {
//         console.log('No Content');
//     }else{
//         console.log('No Code');
//     }
// }

//Use Switch
// const reasonPhraseCode = (code: number) => {
//     switch (code) {
//         case 100: 
//             console.log('Continue');
//             break;
//         case 101:
//             console.log('Switching Protocols');
//             break;
//         case 102:
//             console.log('Processing');
//             break;
//         case 103:    
//             console.log('Early Hints');
//             break;
//         case 200:    
//             console.log('OK');
//             break;
//         case 201:
//             console.log('Created');
//             break;
//         case 202:    
//             console.log('Accepted');
//             break;
//         case 203:    
//             console.log('Non-Authoritative Information');
//             break;
//         case 204: 
//             console.log('No Content');
//             break;
//         default:     
//             console.log('No Code');
//     }
// }

// reasonPhraseCode(200)//OK

const reasonPhraseCode = {
  '100': 'Continue',
  '101': 'Switching Protocols',
  '102': 'Processing',
  '103': 'Early Hints',
  '200': 'OK',
  '201': 'Created',
  '202': 'Accepted',
  '203': 'Non-Authoritative Information',
  '204': 'No Content',
  'default': 'No Code',
}

function getProperties<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const result = getProperties(reasonPhraseCode, 'default');
console.log(result);

const reasonPhraseCode1 = new Map<string, string>([
    ['100', 'Continue'],
    ['101', 'Switching Protocols'],
    ['102', 'Processing'],
    ['103', 'Early Hints'],
    ['200', 'OK'],
    ['201', 'Created'],
    ['202', 'Accepted'],
    ['203', 'Non-Authoritative Information'],
    ['204', 'No Content'],
    ['default', 'No Code'],
])
const result1 = reasonPhraseCode1.get('100');
console.log(result1);

