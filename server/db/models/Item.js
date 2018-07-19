const bookshelf = require('./bookshelf');

class Item extends bookshelf.Model {
  get tableName() { return 'items' }
  get hasTimestamps() { return true }

  user() {
    return this.belongsTo('User', 'user_id')
  }

  category() {
    return this.belongsTo('Category', 'category_id')
  }

  condition() {
    return this.belongsTo('Condition', 'condition_id')
  }

  itemStatus() {
    return this.belongsTo('ItemStatus', 'item_status_id')
  }
}

module.exports = bookshelf.Model('Item', Item);