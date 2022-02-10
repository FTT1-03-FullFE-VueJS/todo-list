import Tasks from '../../data/tasks.js';
import { convertLevel } from '../../utils/helpers.js';

init();

function init() {

  renderTasks(Tasks);

  /**
   * Handle render list task into HTML DOM
   * @param {array} tasks
   * @returns void
   */
  function renderTasks(tasks) {
    const $table = document.getElementById('tasks-content');

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
}
