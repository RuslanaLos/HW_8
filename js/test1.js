let arrByUser = [];
let numLength = parseInt(prompt("Введіть довжину масива."));

/*в числа не нужно*/

for (let i = 0; i < numLength; i++){
    let usersElement = parseInt(prompt("Введіть елемент №" + (i + 1) + ":"));
    arrByUser.push(usersElement);
}
console.log("Зараз масив виглядає так: " + arrByUser);

arrByUser.sort(function (a, b) {
    return a - b;
})
console.log("Зараз масив виглядає так: " + arrByUser);

arrByUser.splice(1,3);
console.log("Зараз масив виглядає так: " + arrByUser);
