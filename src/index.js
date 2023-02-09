/**
 * @constructor
 * @param {number} id - 아이디
 * @param {string} content - 내용
 * @param {boolean} isDone - 완료여부
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그들
 */
function Todo() {}

/**
 * @constructor
 * @param {Todo[]} newTodo - Todo 객체 배열
 *
 */
class TodoList {}

/**
 * 주어진 값으로 TodoList에 Todo객체를 추가한다.
 * id는 랜덤생성
 * 내용은 없으면 공백으로 생성
 * 완료여부는 최초 생성 시 false를 기본으로 한다.
 * 카테고리는 받은 값을 사용한다.
 * @param {String} category - 카테고리
 * @param {String} [content] - 내용
 * @param {string[]} [tags] - 태그들
 * @return {void}
 */
TodoList.prototype.create = function (content, category, tags) {};

/**
 * id를 옵션으로 받아서 특정 할일을 조회할 수 있다.
 * @param {number} [id] - 아이디
 * @returns {Todo[]} Todo
 */
TodoList.prototype.read = function () {};

/**
 * id를 기반으로 속성을 수정한다.
 * @param {number} id - 아이디
 * @param {Todo} todo - 수정된 todo
 * @return {void}
 */
TodoList.prototype.update = function () {};

/**
 * optionNumber에 따라 삭제할 대상이 바뀐다.
 * 1번이면 할 일 삭제,
 * 2번이면 전체 삭제,
 * 3번이면 특정 할 일의 특정 태그 삭제,
 * 4번이면 특정 할 일의 모든 태그 삭제이다
 *
 * @param {boolean} optionNumber - 모든 할일을 삭제하는지 여부
 * @param {number} [id] - 아이디
 * @param {string[]} [tags] - 수정할 태그
 * @return {void}
 */
TodoList.prototype.delete = function () {};
