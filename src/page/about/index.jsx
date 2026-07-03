import { Link } from "react-router";
import Logo from "/logo.png";

export const About = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        <h1 className="mt-20 mb-10 text-2xl">QR Code Generate</h1>
        <artcile>
          <p className="text-lg">
            This is a website that generates a QR code for a URL or Link. You
            enter a URL into the box and click the{" "}
            <span className="text-sky-600">"Generate QR Code"</span> button to
            generate the QR code. The site was written using a learning and
            teaching methodology with{" "}
            <a href="https://github.com/orujaliev" className="text-sky-600">
              orujaliev
            </a>
            . It was also a coding practice for me. Thank you,{" "}
            <a href="https://github.com/orujaliev" className="text-sky-600">
              orujaliev
            </a>
            . <br />
            If you want to see which packages and resources were used on the
            site, you can take a look on the{" "}
            <Link to={"/referance"} className="text-sky-600">
              "Referance"
            </Link>{" "}
            page.
            <br className="my-5" />
            <b>
              Note: This text was written with{" "}
              <a
                href="https://www.deepl.com/en/firefox-extension"
                className="text-sky-500"
              >
                DeepL translator Firefox extension
              </a>
              .
            </b>
            <br className="mb-10" />
            <a
              href="https://github.com/NadirYusifov/qr-code-react"
              className="underline underline-offset-5"
            >
              GitHub
            </a>
          </p>
        </artcile>
        <picture className="my-20 flex justify-center">
          <img
            src={Logo}
            width={250}
            height={100}
            quality={100}
            alt="QR Code Generate logo"
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  );
};
