const div = dom.find('#test>.red')[0];
console.log('div', div);
dom.style(div, 'color', 'red');
const divList = dom.find('.red');
dom.each(divList, (n)=> console.log(n));
