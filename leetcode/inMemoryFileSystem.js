/**
 * Design a data structure that simulates an in-memory file system.
 *
 * Implement the FileSystem class:
 * FileSystem() Initializes the object of the system.
 * List<String> ls(String path)
 *   If path is a file path, returns a list that only contains this file's name.
 *   If path is a directory path, returns the list of file and directory names in this directory.
 * The answer should in lexicographic order.
 * void mkdir(String path) Makes a new directory according to the given path. The given directory path does not exist.
 * If the middle directories in the path do not exist, you should create them as well.\
 * void addContentToFile(String filePath, String content)
 *   If filePath does not exist, creates that file containing given content.
 *   If filePath already exists, appends the given content to original content.
 * String readContentFromFile(String filePath) Returns the content in the file at filePath.
 */

var FileSystem = function () {
  this.fs = {};
};

/**
 * @param {string} path
 * @return {string[]}
 * Steps:
 * Split path into directories
 * loop through dirs until dir found
 * return either dir or string
 */
FileSystem.prototype.ls = function (path) {
  var arr = path.split("/").filter((d) => d !== "");
  var dir = this.fs;

  while (arr.length > 0) {
    let next = arr.shift();
    if (typeof dir[next] === "string") return [next];
    dir = dir[next];
  }

  return Object.keys(dir).sort();
};

/**
 * @param {string} path
 * @return {void}
 * Steps:
 * split path into directories
 * loop through dirs
 *   if dir not present, initialize
 *   keep repeating until covering all directories
 */
FileSystem.prototype.mkdir = function (path) {
  const dirs = path.split("/").filter((d) => d !== "");
  var dir = this.fs;

  while (dirs.length > 0) {
    let next = dirs.shift();
    if (!dir[next]) dir[next] = {};
    dir = dir[next];
  }
};

/**
 * @param {string} filePath
 * @param {string} content
 * @return {void}
 * Steps:
 * split filepath into directories
 * loop through dirs
 *   if dir empty, initialize
 *
 * var filename to store first dir
 * add fileName + content
 */
FileSystem.prototype.addContentToFile = function (filePath, content) {
  var dirs = filePath.split("/").filter((d) => d !== "");
  var dir = this.fs;

  while (dirs.length > 1) {
    let next = dirs.shift();
    if (!dir[next]) dir[next] = {};
    dir = dir[next];
  }

  var fileName = dirs.shift();
  dir[fileName] = (dir[fileName] || "") + content;
};

/**
 * @param {string} filePath
 * @return {string}
 * Steps:
 * split filePath into directories
 *
 */
FileSystem.prototype.readContentFromFile = function (filePath) {
  var dirs = filePath.split("/").filter((d) => d !== "");
  var dir = this.fs;

  while (dirs.length > 0) {
    dir = dir[dirs.shift()];
  }

  return dir;
};

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */
