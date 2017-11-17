import Api from '../services/Api.js'

export const getCategories = () => {
  Api
  .get(`/categories`)
  .then((res) => {
    return res
  })
  .then((categories) => dispatch())
}
