const bookshelf = require('./bookshelf');

class Category extends bookshelf.Model {
  get tableName() { return 'categories' }
  get hasTimestamps() { return true }

  item() {
    return this.hasMany('Item')
  }
}

module.exports = bookshelf.Model('Category', Category);