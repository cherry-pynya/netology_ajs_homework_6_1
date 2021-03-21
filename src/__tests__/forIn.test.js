import orderByProps from '../forIn.js';


test('проверка на наличие объектов 1', ()=>{
    const array = orderByProps({name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}, ["name", "level"]);
    expect(array).toContainEqual({key: "name", value: "мечник"});
});

test('проверка на наличие объектов 2', ()=>{
    const array = orderByProps({name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}, ["name", "level"]);
    expect(array).toContainEqual({key: "level", value: 2});
});

test('проверка на наличие объектов 3', ()=>{
    const array = orderByProps({name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}, ["name", "level"]);
    expect(array).toContainEqual({key: "attack", value: 80});
});

test('проверка пустой массив', ()=>{
    const array = orderByProps({name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}, []);
    expect(array).toContainEqual({key: "attack", value: 80});
});

test('проверка порядок элементов 1', ()=>{
    const array = orderByProps({name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}, ["name", "level"]);
    const example = {key: 'name', value: 'мечник'};
    expect(array[0]).toEqual(example);
});

test('проверка порядок элементов 2', ()=>{
    const array = orderByProps({name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}, ["name", "level"]);
    const example = {key: 'level', value: 2};
    expect(array[1]).toEqual(example);
});




