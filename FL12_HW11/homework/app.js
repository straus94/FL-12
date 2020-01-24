const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function createNode(node) {
  const list = document.createElement('ul');
  list.setAttribute('class', 'list');
  node.appendChild(list);
  return list;
}

class Catalog {
  constructor(catalog) {
    this.title = catalog.title;
    this.folder = catalog.folder;
    this.children = catalog.children;
  }

  print(parrent) {

      const item = document.createElement('li');
      item.setAttribute('class', 'list__item--close');

      const itemIcon = document.createElement('i');

      if (this.folder) {
        itemIcon.setAttribute('class', 'material-icons icon--close');      
      } else {
        itemIcon.setAttribute('class', 'material-icons file');
      }

      const itemBlock = document.createElement('div');
      itemBlock.setAttribute('class', 'list__block');

      let itemIconText
      if (this.folder) {
        itemIconText = document.createTextNode('folder');
      } else {
        itemIconText = document.createTextNode('insert_drive_file');
      }

      itemIcon.appendChild(itemIconText);
      item.appendChild(itemIcon);
      item.appendChild(itemBlock);
      let newArr = this.children;

      const itemText = document.createTextNode(this.title);
      itemBlock.appendChild(itemText);
      if(this.folder) {
        itemIcon.addEventListener('click', this.changeIcon);
        itemIcon.addEventListener('click', function() {
          if (item.classList.contains('list__item--close')) {
            createClass(newArr, item);
        }

        if (item.classList.contains('list__item--open')) {
          item.setAttribute('class', 'list__item--close');
          closeFolder(item);
        } else {
          item.setAttribute('class', 'list__item--open');
        }
        });
        itemBlock.addEventListener('click', this.changeIcon);
        itemBlock.addEventListener('click', function() {

          if (item.classList.contains('list__item--close')) {
              createClass(newArr, item);
          }

          if (item.classList.contains('list__item--open')) {
            item.setAttribute('class', 'list__item--close');
            closeFolder(item);
          } else {
            item.setAttribute('class', 'list__item--open');
          }
        });
      }
      parrent.appendChild(item);
  }

  changeIcon(event) {
    let e = event.target.parentNode;
    console.log(e.firstChild.textContent);
    if (e.firstChild.textContent === 'folder') {
      e.firstChild.textContent = 'folder_open';
    } else {
      e.firstChild.textContent = 'folder';
    }
    
    console.log(e.firstChild.textContent);
  }
}

function closeFolder(parrent) {
  let arr = parrent.childNodes;
  for (let i of arr) {
    if (i.classList.contains('list')) {
      i.remove();
    }
  }
}


function createClass(arr, parrent) {
  const list = createNode(parrent);

  if (arr) {
    for (let i of arr) {
      let folder = new Catalog(i);
      folder.print(list);
    }
  } else {
    let folder = new Catalog({
      title: 'empty',
      folder: false,
      children: false
      });
  folder.print(list);
  }

}

createClass(structure, rootNode);
