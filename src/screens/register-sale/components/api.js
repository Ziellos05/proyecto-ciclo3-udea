const callApi = async (url, options = {}) => {
    options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    const response = await fetch("http://localhost:3002/api"+url, options);
    const data = await response.json();
    return data;
};

const api = {
    products: {
        list() {
            return callApi("/products")
        },
    },

    sales: {
        list() {
            return callApi("/sales")
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
    },
}

export default api;