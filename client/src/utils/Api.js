import api from 'axios';

export const User = {
  create() {
    api.post(`/api/users`);
  },

  findById(id) {
    api.get(`/api/users/${id}`);
  },

  find() {
    api.get(`/api/users`);
  },

  findOne() {
    api.get(`/api/users/findOne`);
  },

  deleteById(id) {
    api.delete(`/api/users/delete/${id}`);
  }
};
