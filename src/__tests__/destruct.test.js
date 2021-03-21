import getData from '../destruct.js';

const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
      }
    ]	
};

test('первый массив', ()=>{
    const array = getData(character);
    expect(array).toContainEqual([8, "Двойной выстрел", "http://...", "Двойной выстрел наносит двойной урон"]);
});

test('второй массив', ()=>{
    const array = getData(character);
    expect(array).toContainEqual([9, "Нокаутирующий удар", "http://...", "Описание недоступно"]);
});