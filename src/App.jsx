import QRCode from "react-qr-code";
import { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import { useFormik } from "formik";
import * as yup from "yup";

export default function App() {
  const [value, setValue] = useState("");
  const schema = yup.object().shape({
    url: yup.string().url("URL must not be empty!").required("URL is required!")
  })

  const formik = useFormik({
    initialValues: {
      url: ""
    },
    validationSchema: schema,
    onSubmit: values => {
      setValue(values.url)
    },
  });

  const qrcoderef = useRef(null)

  const downloadQRCode = () => {
    htmlToImage
      .toPng(qrcoderef.current)
      .then(function (dataUrl) {
        const link = document.createElement("a")
        link.href = dataUrl;
        link.download = "qr-code-png";
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
        <form onSubmit={formik.handleSubmit}>
        <div className="flex items-center gap-2">
          <label htmlFor="url">URL:</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.url}
            id="url"
            name="url"
            type="text"
            placeholder="Please URL enter"
            className={`w-72 outline-none px-2 py-1 rounded-sm ${formik.errors.url && formik.touched.url ? "border border-red-500" : "border border-zinc-600"}`}
          />
        </div>
          {formik.errors.url && formik.touched.url ? <p className="text-[0.875rem] text-red-500 px-12">{formik.errors.url}</p> : null}
          <div className="pt-4 flex justify-center items-center">
            <button disabled={formik.errors.url && formik.touched.url} type="sumbit" className={`transition-colors duration-300 ease-in-out text-white px-2.5 py-1.5 rounded-sm ${formik.values.url ? "cursor-pointer hover:bg-blue-800 bg-blue-500" : "bg-blue-500/30 cursor-not-allowed"}`} onClick={downloadQRCode}>Download</button>
          </div>
        </form>
      </div>
    </div>
  )
}
