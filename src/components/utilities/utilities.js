import API from '../quotes_obj.json';

export default {
  getPage: (path) => API.find(obj => {
    console.log(path, obj);
    console.log(API);
    return obj.pageId === path
  })
}
