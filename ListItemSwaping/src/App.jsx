import { useState } from 'react'
import './App.css'

function App() {
  const [list1, setList1] = useState([
    {title: 'Item 1', checked: false},
    {title: 'Item 2', checked: false},
    {title: 'Item 3', checked: false},
  ]);

  const [list2, setList2] = useState([
    {title: 'ItemA'},
    {title: 'ItemB'},
    {title: 'ItemC'},
  ]);
 const handleCheckboxChange = (idx) => {
    const updatedList1 = [...list1];
    updatedList1[idx].checked = !updatedList1[idx].checked
    setList1(updatedList1);
  }
  const handleItemSwap = () => {
    const updatedList1 = [...list1];
    const updatedList2 = [...list2];
    updatedList1.forEach((item,idx) => {
      if(item.checked){
        const temp = updatedList1[idx].title;
        updatedList1[idx].title=updatedList2[idx].title
        updatedList2[idx].title=temp;
      }
    });
    setList1(updatedList1);
    setList2(updatedList2);

  }

  return (
    <>
    <div>
      <div>
        <h3>List1</h3>
        <ul>
          {list1.map((item, idx) => (
            <li key={idx}>
              <input type="checkbox"
              checked={item.checked} 
              onChange={() => handleCheckboxChange(idx)} />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>List2</h3>
        <ul>
          {list2.map((item,idx) => (
            <li key={idx}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
    <div><button onClick={handleItemSwap}>Swap Selected Item</button></div>
    </>
  )
}

export default App
