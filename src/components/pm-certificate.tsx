import {Document, Page, pdfjs} from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import useWindowDimensions from '@/hooks/window-dimensions';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export function PMPopUp(){

    const {height:h, width:w} = useWindowDimensions();
    // const URL = "https://drive.google.com/file/d/10e--TUda8SSHu03GhRdvN3zCBF-LpcZA/view.pdf"
    return(
        <div>
            <Document className={`flex items-center justify-center`} file="/product-management-certificate.pdf">
                <div className=''>
                <Page  className='' pageNumber={1} height={h*(w>=768?0.7:0.27)}/>
                </div>
            </Document>
        </div>
    )
}
export function PMIcon(){

    const {width:pageWidth} = useWindowDimensions();
    return(
        <div className='flex items-center justify-center'>
            <Document className={``} file="/product-management-certificate.pdf">
                <div className='h-full w-full'>
                <Page pageNumber={1} width={pageWidth>=768?pageWidth/3.7:pageWidth*0.8}/>
                </div>
            </Document>
        </div>
    )
}

export default [PMIcon, PMPopUp]