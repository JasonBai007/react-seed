/**
*** Mock data
*** http://mockjs.com/examples.html
*** https://segmentfault.com/a/1190000003087224
*/
Mock.mock(/getData/, {
    'name'     : '@name',
    'age|1-100': 100,
    'color'    : '@color'
});