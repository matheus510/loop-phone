import cellphoneModel from './cellphoneModel'

let cellphoneDAL = {}

cellphoneDAL.get = (payload) => {
  if (!payload) {
    return cellphoneModel.find({}, (err, result) => {
      if (err) console.log(err)

      let response = result || 'No cellphone found'

      return response
    })
  } else if (payload.q) {
    return cellphoneModel.find(payload.q, (err, result) => {
      if (err) throw new Error(err)

      return result
    })
  }
  if (payload.id) {
    return cellphoneModel.findById(payload.id, (err, result) => {
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
    document.save((previousDocument, updatedDocument) => {
      return updatedDocument
    })
  })
}

cellphoneDAL.put = (cellphoneId, cellphoneReplace) => {
  return cellphoneModel.findById(cellphoneId, (err, document) => {
    if (err) return console.log(err)

    let attributeList = Object.keys(cellphoneReplace)

    for (let i = 0, iLen = attributeList.length; i < iLen; i++) {
      let currentAttribute = attributeList[i]
      let validAttribute = (currentAttribute && currentAttribute !== '_id' && currentAttribute !== 'created' && currentAttribute !== 'updated' && currentAttribute !== 'sold' && currentAttribute !== '_v')

      if (validAttribute) {
        document[currentAttribute] = cellphoneReplace[currentAttribute]
      } else {
        return {
          err: err,
          updatedDocument: false
        }
      }
    }
    return document.updateOne(cellphoneReplace, {runValidators: true}, (err, updatedDocument) => {
      let responseObj = {
        err: err,
        updatedDocument: updatedDocument
      }
      return responseObj
    })
  })
}

cellphoneDAL.delete = (cellphoneId) => {
  return cellphoneModel.deleteOne({_id: cellphoneId}, (err, deletedSuccessfully) => {
    if (err) return console.log(err)

    return deletedSuccessfully
  })
}

export default cellphoneDAL
