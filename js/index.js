let a, b, c, d, x1, x2, x;
a = prompt('Введіть першу змінну');
b = prompt('Введіть другу змінну');
c = prompt('Введіть третю змінну');
document.write('Результати:');
document.write('<br>');
d = b * b - 4 * a * c;
if ( d==0 ) {
    x = -b / ( 2 * a );
    document.write('x1=x2='+ x);
}
if ( d<0 ) {
    document.write('Корені відсутні. Дискримінант від`ємний ;( ');
}
if ( d>0 ) {
    x1= ((-b) + Math.sqrt(d)) / ( 2 * a );
    x2= ((-b) - Math.sqrt(d)) / ( 2 * a);
    document.write('Корінь x1 = ' + x1);
    document.write('<br>');
    document.write('Корінь x2 = ' + x2);
}
