import { savePDF } from '@progress/kendo-react-pdf';

class PdfService {
  createPdf = (html) => {
    savePDF(html, { 
      paperSize: 'A4',
      fileName: 'VenueMonkContract.pdf',
      margin: 3
    })
  }
}

const Pdf = new PdfService();
export default Pdf;
