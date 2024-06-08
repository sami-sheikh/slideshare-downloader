"use client";
import { useContext } from "react";
import { AppContext } from "@/store";
import { AppBar, Preview, UrlBox, Selection } from "@/components/common";
import Accordion from "@/components/common/Accordion/Accordion";

const accordionData = [
  { title: "Item 1", content: "Content for item 1" },
  { title: "Item 2", content: "Content for item 2" },
  { title: "Item 3", content: "Content for item 3" },
];

export default function Home() {
  const { state } = useContext(AppContext);

  return (
    <div className="app">
      <AppBar />
      <main className="max-w-6xl mx-auto main">
        <UrlBox />
        {state.thumbs.length ? <Preview /> : ""}
        {state.selection_mode === true ? (
          <Selection images={state.thumbs} />
        ) : (
          ""
        )}
      </main>
      <section className="max-w-6xl px-5 mx-auto lg:px-0">
        <div className="flex justify-center">
          <div className="">
            <h2 className="flex justify-start py-10 text-3xl text-start">
              Easy way to download slides from Slideshare
            </h2>
            <p className="max-w-[950px] flex text-start">
              SlidesDownloader.net is a great &amp; free Slideshare downloader
              tool used to download slides from Slideshare in PDF and PPT
              format. It is the best Slideshare to PDF converter and Slideshare
              to PPT converter in the market. After you have downloaded the
              slides, you can view them anytime on your device without having
              the internet connection. Follow the below steps to download
              SlideShare:
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex py-10 lg:px-10">
          <div className="grid justify-center grid-cols-1 gap-10 py-5 lg:grid-cols-3">
            <div>
              <div className="px-5 py-10 border lg:px-10 min-h-[438px]">
                <div className="flex justify-center text-emerald-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="100px"
                    width="100px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                    <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                  </svg>
                </div>
                <div className="py-10 text-2xl ">Pick the Slides</div>
                <div className="">
                  Go to slideshare website, pick your slides, copy the URL from
                  the searchbar at the top.
                </div>
              </div>
            </div>
            <div>
              <div className="px-5 py-10 border lg:px-10 min-h-[438px]">
                <div className="flex justify-center text-emerald-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="100px"
                    width="100px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 11V5c0-1.103-.897-2-2-2h-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H4c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2zm-9 2v5H4V5h3v2h8V5h3v6h-5c-1.103 0-2 .897-2 2zm2 7v-7h7l.001 7H13z"></path>
                  </svg>
                </div>
                <div className="py-10 text-2xl ">Paste SlideShare URL</div>
                <div className="">
                  Now paste the URL of the slide that you copied in the previous
                  step into the downloadbox.{" "}
                </div>
              </div>
            </div>
            <div>
              <div className="px-5 py-10 border lg:px-10 min-h-[438px]">
                <div className="flex justify-center text-emerald-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="100px"
                    width="100px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                    <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
                  </svg>
                </div>
                <div className="py-10 text-2xl ">Now Download</div>
                <div className="">
                  Now select the desired extension (PDF or PPT) to download the
                  slides on your device and enjoy.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="text-left md:p-10">
          <h2 className="py-10 text-3xl font-semibold md:text-4xl">
            Slideshare Downloader - Download Free (PPT/PDF/Doc) Presentation
          </h2>
          <p className="">
            Do you know what a slideshare downloader is and for what it is used?
            No! Alright, we are here to cover you so no need to worry. Basically
            it is a tool to download the slides available on{" "}
            <a href="https://www.slideshare.net/">Slideshare</a>.
          </p>
          <p className="pt-5">
            However, slideshare itself allows downloading only some limited
            files after registration or subscription. So, with the other
            multiple features, it allows to download any files without paying a
            single penny. Are you curious to know more about this charismatic
            tool?
          </p>
          <p className="pt-5">
            Keep patience, in this article we will elaborate in-depth what is
            slideshare downloader, how to save slide share files, how to use,
            how to download and features of this tool.
          </p>
          <p className="pt-5">
            So, read the article till the end, it will be worth reading for you.
            But before this getting information about slideshare is necessary,
            so, have a look at slideshare, features, pros and cons.
          </p>
          <h2 className="py-10 text-2xl md:text-3xl font-[600]">
            What is Slideshare?
          </h2>
          <p>
            It,s no secret social media is a vast discipline. There are plenty
            of websites running under the umbrella of social media.
            Unfortunately, maintaining presence on all sites is a time taking
            activity. Moreover, making a decision is hard enough that which site
            is worth that time and effort. Well, no worries we got to cover you.
          </p>
          <p className="pt-5">
            In actuality, from all social media sites Slideshare is one of the
            more overlooked social media platforms which used to post content in
            the form of PPT slides, PDFs, infographics, and videos.
          </p>
          <p className="pt-5">
            The best quality of this platform has the potential to invest your
            time and efforts. Nowadays its use is on the rise for various tasks
            whether it may be related to education or business. Let,s dig deep
            to explore the features, pros and cons of slideshare.
          </p>
          <h2 className="py-10 text-2xl md:text-3xl font-[600]">
            What Content Slideshare Offers to Users?
          </h2>
          <p>
            Slideshare is the best platform to boost knowledge or business; it
            doesn,t matter where you are and what,s the time. Diversity of data
            is available on slideshare in the form of presentations, slides,
            videos, infographics and so on. Let,s have a look which
            characteristics contain slideshare:
          </p>
          <div className="py-10 pl-10">
            <ul className="pl-1 text-gray-400 list-disc md:pl-5">
              <li>
                <p className="pt-1">
                  It has more than fifty millions professional presentations and
                  slides for users on different topics
                </p>
              </li>
              <li>
                <p className="pt-1">
                  Content library is available to explore any of your favorite
                  topics.
                </p>
              </li>
              <li>
                <p className="pt-1">
                  Notification option is available to alert you for updated
                  content.
                </p>
              </li>
              <li>
                <p className="pt-1">
                  You can share your favorite topic on other social media
                  platforms such as facebook, LinkedIn twitter and so on.
                </p>
              </li>
              <li>
                <p className="pt-1">
                  All the documents are arranged according to categories on this
                  platform.
                </p>
              </li>
              <li>
                <p className="pt-1">
                  You can save any of your favorite data to read later.
                </p>
              </li>
              <li>
                <p className="pt-1">
                  It has the world&lsquo;s largest community like all other
                  social media platforms and here lots of opportunities for
                  students, researchers, companies and organizations.
                </p>
              </li>
            </ul>
          </div>
          <div
            className="text-center lazy-unit av-ads"
            parent-unit="slidesharedown_in_content_lazy"
            align="center"
            id="div-gpt-5199964"
          ></div>
          <div className="mt-6">
            <div className="grid md:grid-cols-2">
              <div className="">
                <div className="bg-emerald-700">
                  <h3 className="py-5 pl-4 text-xl font-bold text-white md:text-xl">
                    Pros
                  </h3>
                </div>
                <div className="p-3">
                  <ul className="pl-1 text-gray-400 md:pl-5">
                    <li>
                      <div className="flex pt-2">
                        <div className="">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.2"
                            baseProfile="tiny"
                            viewBox="0 0 24 24"
                            color="green"
                            height="26px"
                            width="26px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-green-800"
                          >
                            <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                          </svg>
                        </div>
                        <p className="pl-2">
                          It has more than fifty millions professional
                          presentations and slides for users on different topics
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex pt-2">
                        <div className="">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.2"
                            baseProfile="tiny"
                            viewBox="0 0 24 24"
                            color="green"
                            height="26px"
                            width="26px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-green-800"
                          >
                            <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                          </svg>
                        </div>
                        <p className="pl-2">
                          Content library is available to explore any of your
                          favorite topics.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex pt-2">
                        <div className="">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.2"
                            baseProfile="tiny"
                            viewBox="0 0 24 24"
                            color="green"
                            height="26px"
                            width="26px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-green-800"
                          >
                            <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                          </svg>
                        </div>
                        <p className="pl-2">
                          Notification option is available to alert you for
                          updated content.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex pt-2">
                        <div className="">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.2"
                            baseProfile="tiny"
                            viewBox="0 0 24 24"
                            color="green"
                            height="26px"
                            width="26px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-green-800"
                          >
                            <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                          </svg>
                        </div>
                        <p className="pl-2">
                          You can share your favorite topic on other social
                          media platforms such as facebook, LinkedIn twitter and
                          so on.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex pt-2">
                        <div className="">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.2"
                            baseProfile="tiny"
                            viewBox="0 0 24 24"
                            color="green"
                            height="26px"
                            width="26px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-green-800"
                          >
                            <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                          </svg>
                        </div>
                        <p className="pl-2">
                          All the documents are arranged according to categories
                          on this platform.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex pt-2">
                        <div className="">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.2"
                            baseProfile="tiny"
                            viewBox="0 0 24 24"
                            color="green"
                            height="26px"
                            width="26px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-green-800"
                          >
                            <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                          </svg>
                        </div>
                        <p className="pl-2">
                          You can save any of your favorite data to read later.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex pt-2">
                        <div className="">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.2"
                            baseProfile="tiny"
                            viewBox="0 0 24 24"
                            color="green"
                            height="26px"
                            width="26px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-green-800"
                          >
                            <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                          </svg>
                        </div>
                        <p className="pl-2">
                          It has the world&lsquo;s largest community like all
                          other social media platforms and here lots of
                          opportunities for students, researchers, companies and
                          organizations.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="bg-red-600">
                  <h3 className="py-5 pl-4 text-xl font-bold text-white md:text-xl">
                    Cons
                  </h3>
                </div>
                <div className="p-3">
                  <ul className="pl-1 text-gray-400 md:pl-5">
                    <li>
                      <div className="flex pt-2">
                        <div className="">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.2"
                            baseProfile="tiny"
                            viewBox="0 0 24 24"
                            color="red"
                            height="26px"
                            width="26px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-red-800"
                          >
                            <path d="M17.414 6.586c-.78-.781-2.048-.781-2.828 0l-2.586 2.586-2.586-2.586c-.78-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l2.585 2.586-2.585 2.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l2.586-2.586 2.586 2.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-2.585-2.586 2.585-2.586c.781-.781.781-2.047 0-2.828z"></path>
                          </svg>
                        </div>
                        <p className="pl-2">
                          Downloading requires money and some of the slides are
                          not available for download.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex pt-2">
                        <div className="">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.2"
                            baseProfile="tiny"
                            viewBox="0 0 24 24"
                            color="red"
                            height="26px"
                            width="26px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-red-800"
                          >
                            <path d="M17.414 6.586c-.78-.781-2.048-.781-2.828 0l-2.586 2.586-2.586-2.586c-.78-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l2.585 2.586-2.585 2.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l2.586-2.586 2.586 2.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-2.585-2.586 2.585-2.586c.781-.781.781-2.047 0-2.828z"></path>
                          </svg>
                        </div>
                        <p className="pl-2">
                          Some presentations are repeated again and again.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="flex pt-2">
                        <div className="">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            version="1.2"
                            baseProfile="tiny"
                            viewBox="0 0 24 24"
                            color="red"
                            height="26px"
                            width="26px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-red-800"
                          >
                            <path d="M17.414 6.586c-.78-.781-2.048-.781-2.828 0l-2.586 2.586-2.586-2.586c-.78-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l2.585 2.586-2.585 2.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l2.586-2.586 2.586 2.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-2.585-2.586 2.585-2.586c.781-.781.781-2.047 0-2.828z"></path>
                          </svg>
                        </div>
                        <p className="pl-2">
                          Although it is free to use, for professional branding
                          it needs a subscription.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h3 className="py-5 text-xl font-bold md:text-xl">
            How to save slideshare files?
          </h3>
          <p className="pb-5">
            To save slideshare files follow these easy steps:
          </p>
          <div className="pl-10">
            <ul className="pl-1 text-gray-400 list-disc md:pl-5">
              <li>
                <p className="pt-1">Go to your Slideshare account.</p>
              </li>
              <li>
                <p className="pt-1">
                  Find out the content to which you want to save.
                </p>
              </li>
              <li>
                <p className="pt-1">Tap on the download now button.</p>
              </li>
              <li>
                <p className="pt-1">
                  Customize the name of your file and set location that finding
                  will be easy.
                </p>
              </li>
              <li>
                <p className="pt-1">
                  After that click on the save button and the file will be
                  saved.
                </p>
              </li>
            </ul>
          </div>
          <h3 className="py-5 text-xl font-bold md:text-xl">
            How to use a slideshare APP?
          </h3>
          <p>
            Slideshare platform is not a rocket science that a user needs
            training to understand it. Undoubtedly, it is an easy-to-understand
            platform. Firstly design your slides in PowerPoint software. Sign up
            on slideshare and upload your slides.
          </p>
          <p className="pt-5">
            Before uploading don,t forget to add some keywords in title and
            description of your file for the purpose of SEO. Optimization is
            necessitate because on the searching for presentation about any
            topic; slideshare comes at the rank #2 on Google.
          </p>
          <h2 className="py-10 text-2xl md:text-3xl font-[600]">
            What is a slideshare downloader?
          </h2>
          <p>
            Slideshare downloader is a tool used to download PDFs and PPT files
            from the slideshare platform. Whenever you are in a hurry and do not
            have enough time to read your favorite content from slideshare. Take
            assistance from this convenient and quick downloader.
          </p>
          <p className="pt-5">
            It is the best tool used to download slideshare presentations, in
            word document form, PPT and PDFs form to read later. The best thing
            is you can save any important data for life time and read it
            whenever you are offline. If a question is popping up in your mind,
            how can you download from slideshare, no worries and have a look
            below to get answer your query.
          </p>
          <h2 className="py-10 text-2xl md:text-3xl font-[600]">
            How to download PPT or PDF from slideshare to computers?
          </h2>
          <p>
            The downloading procedure is not complicated and time taking. Within
            a few minutes by following some easy steps you can download your
            favorite slides. Easy-to-follow steps are listed in below:
          </p>
          <div className="pl-10 mb-6">
            <ul className="pt-5 pl-1 text-gray-400 list-disc md:pl-5">
              <li>
                <p className="pt-1">First of all, open the slideshare site.</p>
              </li>
              <li>
                <p className="pt-1">
                  Copy the URL of content to which you want to download.
                </p>
              </li>
              <li>
                <p className="pt-1">
                  Go to the slideshare downloader and paste the copied link.
                </p>
              </li>
              <li>
                <p className="pt-1">
                  Select the form PDF, word dox or PPFs, which you want.
                </p>
              </li>
              <li>
                <p className="pt-1">
                  Hit the download button and save the file to read later.
                </p>
              </li>
            </ul>
          </div>
          <div
            className="text-center lazy-unit av-ads"
            parent-unit="slidesharedown_in_content_lazy"
            align="center"
            id="div-gpt-52927776"
          ></div>
          <div className="pt-12">
            <div className="p-5 border lg:bg-slate-200 ">
              <h2 className="py-10 text-2xl md:text-3xl font-[600] pt-0 pb-2 text-black">
                Features of Slideshare Downloader
              </h2>
              <p className="pb-5 text-black">
                This tool features tons of characteristics but some remarkable
                characteristics are depicted below. Lets read what features
                contain this wonderful tool.
              </p>
            </div>
            <div className="grid border md:grid-cols-2">
              <div className="px-5 py-5 md:px-10 md:border">
                <div className="flex text-emerald-600 max-sm:justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="100px"
                    width="100px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27zM5.33 4.06L4.06 5.33 7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22 1.27-1.27L5.33 4.06z"></path>
                  </svg>
                </div>
                <h3 className="flex py-5 text-xl font-bold md:text-xl text-emerald-600 max-sm:justify-center">
                  1. Free to Download
                </h3>
                <p>
                  Slideshare downloader is a free tool you have no need for any
                  subscription or registration. Without paying a single dime you
                  can download PPT or PDFs content from Slideshare. However you
                  can download files from the slideshare site but it needs a
                  subscription. So, it is the wonderful feature of our tool; it
                  is free from any kind of charges.
                </p>
                <div className="flex pt-5 text-emerald-600 max-sm:justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="100px"
                    width="100px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                    <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
                  </svg>
                </div>
                <h3 className="flex py-5 text-xl font-bold md:text-xl text-emerald-600 max-sm:justify-center">
                  2. Unlimited Downloads
                </h3>
                <p>
                  In the world of the internet hundreds of tools are available
                  which permit downloading freely content from slideshare sites
                  but all of these tools offer limited downloads. It is a beauty
                  of a slideshare downloader that it has no restrictions and you
                  can download plenty of files whenever you want.
                </p>
                <div className="flex pt-5 text-emerald-600 max-sm:justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="100px"
                    width="100px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z"></path>
                  </svg>
                </div>
                <h3 className="flex py-5 text-xl font-bold md:text-xl text-emerald-600 max-sm:justify-center">
                  3. Safe &amp; Secure
                </h3>
                <p>
                  One of the best things of this tool is hundred percent safe
                  and secure to download any of your professional content. There
                  is nothing risky to use it because it never demands for login
                  from you. So, without any hesitation use this tool for any
                  kind of data downloading.
                </p>
              </div>
              <div className="px-5 py-5 md:border md:px-10 ">
                <div className="flex text-emerald-600 max-sm:justify-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="100px"
                    width="100px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM9.997 19H4V9h6l-.003 10zm10-2H12V9c0-1.103-.897-2-2-2H7V5h13l-.003 12z"></path>
                  </svg>
                </div>
                <h3 className="flex py-5 text-xl font-bold md:text-xl text-emerald-600 max-sm:justify-center">
                  4. Compatible for All Devices
                </h3>
                <p>
                  Most of the tools used only laptop or PC but you can use this
                  amazing tool in any device. Yeah! You heard right, because
                  Slideshare downloader is compatible for all devices whether it
                  may be mobile or PC. From now on you can download content from
                  slideshare even on your mobile devices as well.
                </p>
                <div className="flex pt-12 max-sm:justify-center text-emerald-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="100px"
                    width="100px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"></path>
                  </svg>
                </div>
                <h3 className="flex py-5 text-xl font-bold md:text-xl text-emerald-600 max-sm:justify-center">
                  5. Different Formats Availability
                </h3>
                <p>
                  Wow! You can download slideshare presentations in any form
                  according to your needs. The formats are available on
                  slideshare downloader 2022 PPT, PDFs, slides and word
                  documents. Isn,t it amazing?
                </p>
                <div className="flex pt-10 text-emerald-600 max-sm:justify-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="100px"
                    width="100px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc></desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="7" y="3" width="14" height="14" rx="2"></rect>
                    <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
                    <path d="M14 10a2 2 0 1 0 -2 -2"></path>
                    <path d="M12 12a2 2 0 1 0 2 -2"></path>
                  </svg>
                </div>
                <h3 className="flex py-5 text-xl font-bold md:text-xl text-emerald-600 max-sm:justify-center">
                  6. Multi Features Tool
                </h3>
                <p>
                  How amazing a slideshare downloader is featured with multi
                  abilities. For instance with downloading a file you can
                  convert slideshare content into PDFs, PPT, word doc and
                  images. The best thing about it is that you can preview your
                  file before downloading. Saying this would not be wrong, it is
                  an all in one tool.
                </p>
              </div>
            </div>
          </div>
          <h2 className="py-10 text-2xl md:text-3xl font-[600]">
            Personal Review
          </h2>
          <p>
            Slideshare downloader is a great tool that permits downloading PPT,
            PDFs and word formats from the slideshare site. Moreover, the
            downloading procedure is instant and never requires captcha filling.
            It never demands for login so it is a 100% safe and secure tool.
          </p>
          <p className="pt-5">
            If you are a college student, researcher you may have to get
            knowledge from the slideshare site. Then you must use this tool to
            download any of your desired content or slideshare presentations
            quickly.
          </p>
          <h2 className="py-10 text-2xl md:text-3xl font-[600]">Final Take</h2>
          <p>
            Undoubtedly, a slideshare downloader is an amazing tool and
            convenient for everyone. Well, to conclude we can say that this is
            an amazing tool to download and save any content from the slideshare
            site. We are confident that this article will be beneficial for you
            and you learned a lot.
          </p>
          <p className="pt-5 mb-6">
            We covered all in-depth details in this article about slideshare
            downloader and slideshare. Further, your feedback is important
            enough for us so do not forget to comment. Also, if you have queries
            regarding slideshare downloader, slideshare, how to use and how to
            download, you can ask anytime. We will assist you at any cost.
          </p>
          <div
            className="text-center lazy-unit av-ads"
            parent-unit="slidesharedown_in_content_lazy"
            align="center"
            id="div-gpt-55854277"
          ></div>
        </div>

        {/*  */}

        <h2 className="flex justify-center pt-16 pb-10 text-4xl font-semibold">
          FAQ
        </h2>
        <Accordion data={accordionData} />
        {/* </div> */}
      </section>
    </div>
  );
}
