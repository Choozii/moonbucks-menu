import MenuInput from './MenuInput.js';
import MenuList from './MenuList.js';
import Count from './Count.js';

function App() {
  // NOTE:
  // enuInfo라는 이름이 적당한지는 모르겠음
  // 내부에 menu title과 id 값을 가진 object들을 요소로 가짐
  let menuInfo = [];
  let menuId = 0;

  const setState = updatedMenuList => {
    menuInfo = updatedMenuList;
  };

  const onUpdate = (id, updatedMenu) => {
    const updated = menuInfo.map(el => (el.id * 1 === id * 1 ? { ...el, title: updatedMenu } : el));
    setState(updated);
  };

  const onDelete = id => {
    const deletedList = menuInfo.filter(el => el.id * 1 !== id * 1);
    setState(deletedList);
    count.updateCount({ menuCount: menuInfo.length });
  };

  const menuList = new MenuList({ onUpdate, onDelete });
  const count = new Count();

  const onAdd = newMenu => {
    menuList.addMenu(newMenu, menuId);
    setState([...menuInfo, { title: newMenu, id: menuId++ }]);
    count.updateCount({ menuCount: menuInfo.length });
  };

  new MenuInput({ onAdd });
}

export default App;
