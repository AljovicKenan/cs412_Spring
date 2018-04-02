let bookshelf = require('./db')
class Department extends bookshelf.model.Model {
  get tableName () {
    return '140302199'
  }
  static all () {
    return this.forge().fetchAll()
  }
  static byDepartment(dName) {
    return this.forge().query({where:{ 'department': dName }}).fetchAll()
  }

}
module.exports = Department
