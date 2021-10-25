const callApi = async (url, options = {}) => {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const response = await fetch("http://localhost:3002/api" + url, options);
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return callApi("/products");
    },
    create(producto) {
      console.log(producto);
      return callApi("/products", {
        method: "POST",
        body: JSON.stringify(producto),
      });
    },
    delete(id) {
      return callApi(`/products/${id}`, {
        method: "DELETE",
      });
    },
    edit(producto) {
      console.log(producto);
      return callApi(`/products/${producto._id}`, {
        method: "PUT",
        body: JSON.stringify(producto),
      });
    },
    getProduct(id) {
      return callApi(`/products/${id}`);
    },
  },
  sales: {
    list() {
      return callApi("/sales");
    },
    create(sale) {
      return callApi("/sales", {
        method: "POST",
        body: JSON.stringify(sale),
      });
    },
  },

  users: {
    list() {
      return callApi("/users");
    },
    create(user) {
      return callApi("/users", {
        method: "POST",
        body: JSON.stringify(user),
      });
    },
    delete(email) {
      return callApi(`/users/${email}`, {
        method: "DELETE",
      });
    },
    edit(user, rol) {
      return callApi(`/users/${user.email}`, {
        method: "PUT",
        body: JSON.stringify(rol),
      });
    },
    getUser(email) {
      return callApi(`/users/${email}`);
    },
  },
};

export default api;
