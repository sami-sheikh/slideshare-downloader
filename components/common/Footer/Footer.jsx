import React from "react";

export default function Footer() {
  return (
    <footer className="footer_wrapper">
      <div className="flex-col footer lg:flex-row">
        <div>
          <span>&copy; 2024 &#183; SlideShare Downloader</span>
          <span className={"disclaimer"}>
            SlideShare Downloader operates under strict adherence to copyright
            laws. The platform functions as a conduit, retrieving content
            directly from the Content Delivery Networks (CDNs) of the original
            sources. It is important to note that SlideShare Downloader does not
            host or store any copyrighted material on its servers. Furthermore,
            the platform maintains no affiliation with SlideShare or any other
            content-sharing platforms.
          </span>
        </div>
      </div>
    </footer>
  );
}
