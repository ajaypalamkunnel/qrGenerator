import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './QRCodeGenerator.css';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    setQRCodeValue(text);
  };

  return (
    <div className="qrcode-container">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={handleInputChange}
      />
      <div className="qrcode">
        <QRCode value={qrCodeValue} />
      </div>
      <div className="button-container">
        <button className="button" onClick={handleSubmit}>
          Generate QR Code
        </button>
      </div>
    </div>
  );
}

export default QRCodeGenerator;
