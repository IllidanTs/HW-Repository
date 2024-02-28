var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var emailRegExr = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;

var trustedEmails = arr.filter(function(obj) {
    return emailRegExr.test(obj.email);
}).map(function(obj) {
    return obj.email;
});
