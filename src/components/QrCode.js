import React from 'react';
import { useQRCode } from 'next-qrcode';


const QrCode = (props) => {

    const { Image } = useQRCode();

    try{
      return(
        <div className="text-center m-3">
          <Image
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
            }}
      />

        </div>
    )

    }catch(e){
      return null;
    }
}
export default QrCode;