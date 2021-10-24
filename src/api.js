const callApi = async (url, options = {}) => {

    options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    const response = await fetch("http://localhost:3002/api" + url, options);
    const data = await response.json();
    return data;

}

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
        }
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
        getSale(id) {
            console.log(id);
            return callApi(`/sales/${id}`)
        },
        byClientID(clientID) {
            console.log(clientID);
            return callApi(`/sales/client/${clientID}`)
        }
    },

    users: {
        list() {
            return callApi("/users");
        },
    },


};


export default api;
