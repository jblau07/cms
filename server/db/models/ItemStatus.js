const bookshelf = require('./bookshelf');

class ItemStatus extends bookshelf.Model {
  get tableName() { return 'item_status'}
  get hasTimestamps() { return true }

  item() {
    return this.hasMany('Item')
  }
}

module.exports = bookshelf.Model('ItemStatus', ItemStatus);