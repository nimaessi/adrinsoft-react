import React , {useRef} from 'react';
import { useQRCode } from 'next-qrcode';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';

const QrCode = (props) => {
    const rf = useRef();
    const { Image } = useQRCode();
    const MyClick = () => {
      const data = rf.current.childNodes[0].getAttribute('src');
      rf.current.childNodes[0].style.display = 'none';
      var oImg = document.createElement("img");
      oImg.setAttribute('src', data);
      oImg.setAttribute('alt', 'na');
      oImg.setAttribute('height', '200px');
      oImg.setAttribute('width', '200px');
      var w = window.open("");
        w.document.write(oImg.outerHTML);
    }
    try{
      return(
        <div ref={rf} className="text-center m-3">
          <Image
            style={{display : 'none'}}
            id="my-qr"
            text={props.text}
            options={{
              type: 'image/jpeg',
              quality: 0.3,
              level: 'M',
              margin: 3,
              scale: 4,
              width: 200,
              color: {
                dark: '#010599FF',
                light: '#FFBF60FF',
              },
      }}/>
        <div className="row">
          <Button variant="danger" className="w-50 mx-auto mt-3" size="sm" onClick={() => MyClick()}>
                <Icon.Download className="m-2"/>
                        Download
              </Button>
        </div>
        </div>
    )

    }catch(e){
      return null;
    }
}
export default QrCode;