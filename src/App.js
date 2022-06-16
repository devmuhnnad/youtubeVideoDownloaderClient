import "./App.css";

import { Form, Footer, FormatChooser } from "./components";
import Server from "./lib/server";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { useState } from "react";

function App() {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [formats, setFormats] = useState([]);

  async function downloadHandler() {
    if (link.trim() == "") {
      setError("The link input is empty!");
      return;
    }

    const res = await Server.youtube.download(link);
    if (!res.success) {
      setError(res.message);
      return;
    }

    setFormats(res.formats);
  }

  return (
    <div className="App">
      <Form>
        <Form.Title>Youtube Video Downloader</Form.Title>
        <Form.Input
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
          type="text"
          placeholder="Video Link"
        />
        <Form.Button onClick={downloadHandler}>Download</Form.Button>
        <p style={{ color: "#DE7474", textAlign: "center", margin: "1em 0" }}>
          {error}
        </p>
      </Form>

      <FormatChooser formats={formats} />

      <Footer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <Footer.Text>Made with ❤ by @devmuhnnad</Footer.Text>
          <a
            href=""
            style={{
              color: "white",
              opacity: "80%",
              display: "flex",
              alignItems: "center",
              marginRight: "2px",
            }}
          >
            <GithubIcon />
            Souce Code in Github
          </a>
        </div>
      </Footer>
    </div>
  );
}

export default App;
