/**
 * 字符方法
 * 常用方法
 */

var s = 'hello, world';

s.length; //字符串长度
s.charAt(n); //读取字符串第n位;默认读取字符串第一位
s.charAt(s.length - 1); //读取字符串最后一位;
s.subString(n,x); //读取n-x位的字符； （包含起始位，不包含结束位）
s.slice(n,x); //读取n-x位的字符； （包含起始位，不包含结束位）
s.slice(x); //一个参数，表示从X位开始到结束（包含负数）
s.indexOf(x); //x = string 字符x首次出现的位置；（没有则返回 -1）
s.lastIndexOf(x); //x = string 字符x最后一次出现的位置；（没有则返回 -1）
s.slice(x); //以X为分隔为把字符串分割成子串,x将不再存在（也就是数组）
s.replace(x, m);//将字符串里面的x替换成m 如果出现多个x将只会替换出现的第一个
s.toUpperCase();//将字符串转换为大写
