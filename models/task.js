/**
 * Id: id của mỗi task unique,
 * title: Tên của task
 * level:
 * --- 1: hight
 * --- 2: medium
 * --- 3: small
 */

class TaskModel {
  constructor(id, title, level) {
    this.id = id;
    this.title = title;
    this.level = level;
  }
}

export default TaskModel;
