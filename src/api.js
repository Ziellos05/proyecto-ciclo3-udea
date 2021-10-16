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
            return callApi("/products", {method: "POST", body: JSON.stringify(producto),}); 
        }
    }
};


export default api;