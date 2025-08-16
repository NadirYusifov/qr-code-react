import QRCode from "react-qr-code";
import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";

export default function App() {
  const [value, setValue] = useState("");

  const qrcoderef = useRef(null)

  const downloadQRCode = () => {
    htmlToImage
      .toPng(qrcoderef.current)
      .then(function (dataUrl) {
        const link = document.createElement("a")
        link.href = dataUrl;
        link.download = "qr-code-png-link";
        link.click();
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <article>
        <h1 className="text-[1.875rem] font-bold mb-20">QR Code Generate</h1>
      </article>
      <div ref={qrcoderef}>
        <QRCode style={{ width: "100%" }} size={256} value={value} viewBox="0 0 256 256" />
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <input placeholder="Please URL enter" className="w-72 border border-zinc-600 outline-none px-2 py-1 rounded-sm" onChange={(e) => setValue(e.target.value)} />
        <div className="pt-4">
          <button className="cursor-pointer hover:bg-blue-800 transition-colors duration-300 ease-in-out bg-blue-500 text-white px-2.5 py-1.5 rounded-sm" onClick={downloadQRCode}>Download</button>
        </div>
      </div>
    </div>
  )
}
