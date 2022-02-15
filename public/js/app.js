import Tasks from '../../data/tasks.js';
import { convertLevel } from '../../utils/helpers.js';
import TaskModel from '../../models/task.js';

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
  const $btnToggle = document.getElementById('btn-toggle');
  const $mainForm = document.getElementById('form-main');

  renderTasks(Tasks);
  renderSortList(sortTypeData);

  let isShowForm = false;

  let searchString = '';
  let sortData = {
    sortBy: 'title',
    orderBy: 'asc'
  };

  $searchInput.addEventListener('input', search);
  $sortSelect.addEventListener('change', sort);
  $btnToggle.addEventListener('click', toggleForm);
  $mainForm.addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();
    const $taskName = document.getElementById('task-name-value');
    const $taskLevel = document.getElementById('task-level-value');

    const taskNameValue = $taskName.value;
    const taskLevelValue = parseInt($taskLevel.value);

    // Validate title
    if (taskNameValue.length <= 0) {
      alert('Bạn vui lòng nhập task title');
    } else {
      const taskModel = new TaskModel(uuidv4(), taskNameValue, taskLevelValue);
      Tasks.push(taskModel);
      console.log(taskModel)
      renderTasks(Tasks);
    }
  }

  function toggleForm() {
    if (isShowForm === true) {// nếu bằng true => form đang bậc
      // Tắc form đi
      $mainForm.classList.add('hidden');
      $btnToggle.innerText = 'Hiển thị form';
      $btnToggle.classList.remove('show');
      $btnToggle.classList.add('hidden');
      isShowForm = false;
    } else {// nếu bằng false => form đang tắc
      // Bặc form lên
      $mainForm.classList.remove('hidden');
      $btnToggle.innerText = 'Bậc form lên';
      $btnToggle.classList.remove('hidden');
      $btnToggle.classList.add('show');
      isShowForm = true;
    }
  }

  function search(e) {
    // Lấy giá trị trong input
    searchString = e.target.value;
    // Copy ds task list của mình qua một ds mới
    // Tại sao phải copy
    // Để ko bị thay đổi giá trị của task gốc => Tasks
    // let taskListCopy = [...Tasks];
    // const result = taskListCopy.filter((task) => {
    //   if ( (task.title.toLowerCase()).includes(searchString.toLowerCase()) ) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });

    // if (result.length === 0) {
    //   toggleNotFound(false);
    // } else {
    //   toggleNotFound(true);
    // }

    // renderTasks(result);
    filterData();
  }

  function sort(e) {
    // e.target => DOM;
    // e.target.value => giá trị của input

    // Cắt chuỗi thành 2 phần
    const value = (e.target.value).split('-');

    const sortBy = value[0];
    const orderBy = value[1];

    sortData.sortBy = sortBy;
    sortData.orderBy = orderBy;

    // $sortValue.innerHTML = `${sortBy.toUpperCase()} - ${orderBy.toUpperCase()}`;
    filterData();
  }

  function filterData() {
    // Vừa sử lý search và sort trong cùng một function
    // Sort trước hay search trước
    let taskListCopy = [...Tasks];
    const result = taskListCopy.filter((task) => {
      if ( (task.title.toLowerCase()).includes(searchString.toLowerCase()) ) {
        return true;
      } else {
        return false;
      }
    });

    // giá trị sắp sếp: 2 => title, level

    /**
     * result = [
     *   0: { id: 1, title: 'task item 1' },
     *   1: { id: 1, title: 'task item 1' },
     *   2: { id: 1, title: 'task item 1' },
     *   3: { id: 1, title: 'task item 1' },
     * ];
     * length: 4
     * 1,2,3,4
     */

    if (sortData.sortBy === 'title') {

      let tmp = {};

      /**
       * vong lap 1
       * result.length - 1 = 3
       */
      for (let i = 0; i < result.length - 1; i++) {
        // kiểm tra order by
        if (sortData.orderBy === 'asc') {
          // Sắp xếp tăng dần
          if ( result[i].title > result[i+1].title ) {
            tmp = result[i];
            result[i] = result[i+1];
            result[i+1] = tmp;
          }
        } else {
          // Sắp xếp giảm dần
          // 4,3,2,1
          if ( result[i].title < result[i+1].title ) {
            tmp = result[i];
            result[i] = result[i+1];
            result[i+1] = tmp;
          }
        }
      }
    } else {
      // Sắp sếp theo level
      // Bai tap...
    }

    renderTasks(result);
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
