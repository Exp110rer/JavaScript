var a = 1, b = 1, c, d;
c = ++a; alert(c);
// Результат 2 потому что при префиксной форме записи значение переменной сначала увеличивается а потом возвращается.
// То есть значени а сначала увеличится на 1 и будет равно 2, затем значение это вернется и будет присвоено переменной с.
d = b++; alert(d);
// Результат 1 потому что при постфиксной форме записи значение сначала возвращается а потом присваивается.
// То есть значение b сначала возвратиться и будет присвоено d.
c = (2+ ++a); alert(c);
// Результат 5 пототму что значение а величивается на 1 и становится равным 3, потом возвращается и происходит сложение с 2.
d = (2+ b++); alert(d);
// Результат 4 что значение b (равное 2) сначала возвращается а потом увеличивается, происходит сложение 2 с 2 и результат 4 присваивается переменной d.
alert(a);
alert(b);
// В обоих случаях будет выведено 3 так как переменные a и b каждый раз увеличивались на единицу.