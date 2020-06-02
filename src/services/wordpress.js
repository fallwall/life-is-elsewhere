import axios from 'axios';

 const posts = {
    url: 'https://public-api.wordpress.com/rest/v1.1/sites/tibbyelsewhere.wordpress.com/posts',
    content: 'blog',
    searchable: true,
    label: '',
    contentName: 'blog post'
 }
  
export const getPosts = (param = [], append=null) => {
  const url = append ? posts.url + append : posts.url;
  try {
    const resp  = axios.get(url, {
      params: param
    })
    return resp;
  } catch (error) {
    console.error(error)
  }
}

