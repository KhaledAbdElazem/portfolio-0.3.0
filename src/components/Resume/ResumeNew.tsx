import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Import for Annotations
import "react-pdf/dist/esm/Page/TextLayer.css"; // Import for Text Layer
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

// Import your PDF file
import pdf from "../../assets/Khaled-Abdelazem.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1000);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState<Error | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess() {
    setPageNumber(1);
  }

  function onDocumentLoadError(error: Error) {
    console.error("PDF load error:", error);
    setPdfError(error);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* Single Download Button */}
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginBottom: "20px" }}
          >
            <AiOutlineDownload />
            Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            className="d-flex justify-content-center"
          >
            {pdfError ? (
              <p>Error loading PDF: {pdfError.message}</p>
            ) : (
              <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
            )}
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
