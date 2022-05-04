import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
import { SampleBase } from './sample-base';
export class Default extends SampleBase {
    render() {
        return (<div>
        <div className='control-section'>
            {/* Render the PDF Viewer */}
            <PdfViewerComponent id="container" documentPath="PDF_Succinctly.pdf" serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" style={{ 'height': '640px' }}>
                <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]}/>
            </PdfViewerComponent>
          </div>
 
        </div>);
    }
}

render(<Default />, document.getElementById('sample'));