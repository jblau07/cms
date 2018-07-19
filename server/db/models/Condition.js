const bookshelf = require('./bookshelf');

class Condition extends bookshelf.Model {
  get tableName() { return 'condition'}
  get hasTimestamps () { return true }

  item() {
    return this.hasMany('Item')
  }
}

module.exports = bookshelf.Model('Item', Item);