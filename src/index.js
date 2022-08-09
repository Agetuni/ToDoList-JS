import './style.css';

const itemsContainer = document.querySelector('.items');
const taskList = [
  {
    index: '1',
    description: 'Read about webpack',
    isCompeleted: false,
  },
  {
    index: '2',
    description: 'Read about java script',
    isCompeleted: false,
  },
  {
    index: '3',
    description: 'Read about Linked list',
    isCompeleted: true,
  },
];
const generateItems = (taskitem) => {
  let result = '';
  if (taskitem.isCompeleted) {
    result = `
        <div class="item">
        <input type="checkbox" name="checkTask" class="checktask" checked>
        <span class="underline">${taskitem.description}</span>
        <i class="fa fa-ellipsis-v move-btn" aria-hidden="true"></i>
    </div> 
        `;
  } else {
    result = `
        <div class="item">
        <input type="checkbox" name="checkTask" class="checktask" >
        <span>${taskitem.description}</span>
        <i class="fa fa-ellipsis-v move-btn" aria-hidden="true"></i>
    </div> 
        `;
  }
  return result;
};
let htmlContent = '';
taskList.forEach((taksitem) => {
  htmlContent += generateItems(taksitem);
});
itemsContainer.innerHTML = htmlContent;
