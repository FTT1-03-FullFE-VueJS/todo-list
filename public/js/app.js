import Tasks from '../../data/tasks.js';
import { convertLevel } from '../../utils/helpers.js';

const sortTypeData = [
  {
    sortBy: 'title',
    orderBy: 'asc',
  },
  {
    sortBy: 'title',
    orderBy: 'desc',
  },
  {
    sortBy: 'level',
    orderBy: 'asc',
  },
  {
    sortBy: 'level',
    orderBy: 'desc',
  },
];

init();

function init() {
  const $searchInput = document.getElementById('search-task-input');
  const $sortSelect  = document.getElementById('sort-select');
  const $mainContent = document.getElementById('main-content');
  const $imageNotFound = document.getElementById('not-found');
  const $table = document.getElementById('tasks-content');
  const $sortValue = document.getElementById('sort-value');

  renderTasks(Tasks);
  renderSortList(sortTypeData);

  let searchString = '';

  $searchInput.addEventListener('input', search);
  $sortSelect.addEventListener('change', sort);

  function search(e) {
    // Lấy giá trị trong input
    searchString = e.target.value;
    // Copy ds task list của mình qua một ds mới
    // Tại sao phải copy
    // Để ko bị thay đổi giá trị của task gốc => Tasks
    let taskListCopy = [...Tasks];
    const result = taskListCopy.filter((task) => {
      if ( (task.title.toLowerCase()).includes(searchString.toLowerCase()) ) {
        return true;
      } else {
        return false;
      }
    });

    // if (result.length === 0) {
    //   toggleNotFound(false);
    // } else {
    //   toggleNotFound(true);
    // }

    renderTasks(result);
  }

  function sort(e) {
    // e.target => DOM;
    // e.target.value => giá trị của input

    // Cắt chuỗi thành 2 phần
    const value = (e.target.value).split('-');

    const sortBy = value[0];
    const orderBy = value[1];

    $sortValue.innerHTML = `${sortBy.toUpperCase()} - ${orderBy.toUpperCase()}`;
  }


  function toggleNotFound(state) {
    if (state) {
      // Có giá trị
      $mainContent.style.display = 'block';
      $imageNotFound.style.display = 'none';
    } else {
      // Không có giá trị
      $mainContent.style.display = 'none';
      $imageNotFound.style.display = 'block';
    }
  }

  /**
   * Handle render list task into HTML DOM
   * @param {array} tasks
   * @returns void
   */
  function renderTasks(tasks) {
    toggleNotFound(tasks.length);

    let tasksHTMLArray = tasks.map(function(item, index) {
      return `<tr data-id="${item.id}">
                <td>${index + 1}</td>
                <td>${item.title}</td>
                <td>
                  <span class="tag ${convertLevel(item.level).toLowerCase()}">${convertLevel(item.level)}</span>
                </td>
                <td>
                  <button class="btn-edit" type="button">Edit</button>
                  <button class="btn-delete" type="button">Delete</button>
                </td>
              </tr>`;
    });

    const tasksHTMLString = tasksHTMLArray.join('');
    $table.innerHTML = tasksHTMLString;
  }

  function renderSortList(list) {
    let sortHTMLArray = list.map(function(item) {
      return `<option value="${item.sortBy}-${item.orderBy}">${(item.sortBy).toUpperCase()} - ${(item.orderBy).toUpperCase()}</option>`;
    });

    const sortHTMLString  = sortHTMLArray.join('');
    $sortSelect.innerHTML = sortHTMLString;
    $sortValue.innerHTML  = `${list[0].sortBy.toUpperCase()} - ${list[0].orderBy.toUpperCase()}`;
  }
}
