let price_tovar = prompt("Введите стоимость товара");
let money = prompt('Введите количество денег клиента');


price_tovar = Number(price_tovar)
money = Number(money)
let text

if (price_tovar == money){
    text = 'Покупка совершена.'
} else{
    if(price_tovar > money){
        let x = price_tovar - money 
        text = ('Недостаточно ' + x + ' рублей')
    }else{
            let y = money - price_tovar
            text = ('Покупка совершена. Ваша сдача ' + ' рублей')
    }
}
let box = '<div class = box>' + text + '</div>'


let btn = document.querySelector('.btn')
console.log(btn)

btn.style.background = 'blue';
btn.style.color = 'white';
btn.style.padding = '10px';
btn.style.borderRadius = '4px';
btn.style.border = 'none';


btn.innerHTML = box

