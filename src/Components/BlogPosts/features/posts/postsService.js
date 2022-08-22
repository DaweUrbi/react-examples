import axios from 'axios';
import { db } from '../../firebase-config';


const postCollectionRef = collection (db, 'posts');

const postsService = {
  get: async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
    
  },

  getFromFirebase: async () => {
    const response = await getDocs (postCollectionRef);
    return response.docs.map((doc) => ({...doc.data(), id: doc.id}));

  },

  post: async (post) => {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      post
    );
    return response.data;
  },
  delete: async (id) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (response.status === 200) {
      // status OK
      return id;
    }
  },
  update: async (post) => {
    console.log('post', post);
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
    console.log('data', response);
    return post;
  },
};

export default postsService;
