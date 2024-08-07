const createRequest = async (options) => {
    const request = fetch(options.url, options.data);
    const result = await request;
    if (result.status === 204) {
        // Я не знаю, на сколько это можно считать за "костыль", но это работает)
        options.callback();
        return;
    }
    const response = await result.json();
    if (!result.ok) {
      alert(response.message);
      return;
    }
    options.callback(response);
  };
  
  export default createRequest;
  