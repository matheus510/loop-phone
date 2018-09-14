import cellphoneModel from './cellphoneModel'

let cellphoneDAL = {}

cellphoneDAL.get = (param) => {
  if (param === undefined) {
    return Promise.resolve(cellphoneModel.find({})).then((err, result) => {
      if (err) console.log(err)

      return result ? result : 'No cellphone found'
    })
  } else if (param.q) {
    return Promise.resolve(cellphoneModel.find(param.q)).then((err, result) => {
      if (err) throw new Error(err)

      return result
    })
  }
  if (param.id) {
    return Promise.resolve(cellphoneModel.findById(param.id)).then((err, result) => {
      if (err) console.log(err)

      return result
    }).catch(() => {
      let errorMessage = 'No user found with provided ID'

      return errorMessage
    })
  }
}

export default cellphoneDAL
