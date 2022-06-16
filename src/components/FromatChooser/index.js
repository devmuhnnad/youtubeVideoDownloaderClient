import { Container, Formats, Format } from "./style";

export default function FormatChooser({ formats = [] }) {
  const downloadHandler = (url) => {};

  return (
    formats.length > 0 && (
      <Container>
        <p>Choose a format</p>
        <Formats>
          {formats.reverse().map((format, index) => (
            <Format key={index} href={format.url + "&title=video"} download="video.mp4">
              {format.qualityLabel}
            </Format>
          ))}
        </Formats>
      </Container>
    )
  );
}
