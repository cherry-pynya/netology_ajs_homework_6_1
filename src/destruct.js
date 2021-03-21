export default function getData(character) {
	const result = [];
  character.special.forEach((i)=>{
  	if ('description' in i) {
    	let array = [];
    	const {id, name, icon, description} = i;
      array.push(id, name, icon, description);
      result.push(array);
    } else {
    	i.description = 'Описание недоступно';
      let array = [];
    	const {id, name, icon, description} = i;
      array.push(id, name, icon, description);
      result.push(array);
    };
  });
  console.log(result)
  return result
};


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
      // <- обратите внимание, описание "засекречено"
    }
  ]	
};

getData(character);