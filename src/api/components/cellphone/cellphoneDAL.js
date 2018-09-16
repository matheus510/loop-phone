import cellphoneModel from './cellphoneModel'

let cellphoneDAL = {}

cellphoneDAL.get = (payload) => {
  if (!payload) {
    return cellphoneModel.find({},(err, result) => {
      if (err) console.log(err)

      let response = result || 'No cellphone found'

      return response
    })
  } else if (payload.q) {
    return cellphoneModel.find(payload.q,(err, result) => {
      if (err) throw new Error(err)

      return result
    })
  }
  if (payload.id) {
    return cellphoneModel.findById(payload.id,(err, result) => {
      if (err) console.log(err)

      return result
    }).catch(() => {
      let errorMessage = 'No cellphone found with provided ID'

      return errorMessage
    })
  }
}

cellphoneDAL.post = (payload) => {
  return cellphoneModel.create(payload, (err, createdDocument) => {
    if (err) return console.log(err)

    return createdDocument
  })
}

cellphoneDAL.patch = (cellphoneId, cellphoneUpdate) => {
  return cellphoneModel.findById(cellphoneId, (err, document) => {
    if (err) return console.log(err)

    Object.keys(cellphoneUpdate).map((attribute) => {
      document[attribute] = cellphoneUpdate[attribute]
    })
    document.save((updatedDocument) => {
      return updatedDocument
    })
  })
}

cellphoneDAL.put = (payload) => {
  return cellphoneModel.replace(payload, (err, replacedDocument) => {
    if (err) return console.log(err)

    return replacedDocument
  })
}

cellphoneDAL.delete = (payload) => {
  return cellphoneModel.delete(payload, (err, deletedSuccessfully) => {
    if (err) return console.log(err)

    return deletedSuccessfully
  })
}

export default cellphoneDAL
