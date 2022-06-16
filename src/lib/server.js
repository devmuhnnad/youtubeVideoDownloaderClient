const httpClient = {
  host: "",

  post: function (path, body, headers) {
    return fetch(this.host + path, {
      method: "POST",
      headers,
      body,
      mode: "cors",
    });
  },
};
const server = {
  youtube: {
    download: async (link) => {
      try {
        let res = await httpClient.post("/youtube", JSON.stringify({ link }), {
          Accept: "application/json",
          "Content-Type": "application/json",
        });

        res = await res.json();

        return res;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default server;
