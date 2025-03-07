import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

import pdf from "../../assets/resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState<Error | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function onDocumentLoadError(error: Error) {
    console.error("PDF load error:", error);
    setPdfError(error);
  }

  const getScale = () => {
    if (width > 1200) return 1.7;
    if (width > 768) return 1.3;
    if (width > 500) return 0.8;
    return 0.6;
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginBottom: "20px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <div style={{ 
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              className="d-flex justify-content-center"
            >
              {pdfError ? (
                <div className="pdf-error">
                  <p>Error loading PDF: {pdfError.message}</p>
                  <Button variant="secondary" onClick={() => window.location.reload()}>
                    Retry
                  </Button>
                </div>
              ) : (
                <Page 
                  pageNumber={pageNumber} 
                  scale={getScale()}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  loading={
                    <div className="pdf-loading">
                      Loading PDF...
                    </div>
                  }
                />
              )}
            </Document>
            {numPages > 0 && (
              <p className="text-center mt-2">
                Page {pageNumber} of {numPages}
              </p>
            )}
          </div>
        </Row>
      </Container>

      <style>
        {`
        .resume-section {
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .pdf-error {
          text-align: center;
          padding: 20px;
          background: #fff3f3;
          border-radius: 8px;
        }
        .pdf-loading {
          text-align: center;
          padding: 20px;
        }
        .resume {
          background-color: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 768px) {
          .resume {
            padding: 10px;
          }
        }
        `}
      </style>
    </div>
  );
}

export default ResumeNew;
