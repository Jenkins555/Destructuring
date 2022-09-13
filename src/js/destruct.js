import { character } from './charackter';

export function destruct(idItem) {
  const { special } = character; /// Деструкторизация объекта
  const distructArr = []; /// Массив выхода
  const arrFilter = special.filter((el) => el.id === idItem); /// Поиск по нужному значению id
  const [{
    id,
    name,
    icon,
    description = 'Описание недоступно',
  }] = arrFilter; /// Деструкторизация отфильтрованного массива
  distructArr.push(id, name, icon, description); /// Добавление переменных в итоговый массив
  return distructArr;
}
