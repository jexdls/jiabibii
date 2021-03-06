import './App.css';
import React, { useState, useRef } from 'react';

import { Carousel, Container, Modal, Tooltip, Overlay} from 'react-bootstrap';

import img1 from './img/test.gif';
import img2 from './img/test.gif';
import port_pic_portrait from './img/portrait_gorl.png';
import port_pic_landscape from './img/gorl.png';
import rose from './img/rose.png';

import InstagramEmbed from 'react-instagram-embed';

import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';



function App() {
    const [isOnPhone, setIsOnPhone] = useState((window.innerWidth < window.innerHeight)? true : false);
    window.addEventListener('resize', ()=>checkIfOnPhone());

     const[showContact, setShowContact] = useState(false);

      // FACEBOOK EMBED CONFIG
     const[facebookIframeW, setFacebookIframeW] = useState(350);
     const[facebooksrc, setFacebooksrc] = useState("https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjiabibii%2Fposts%2F673875673439182&show_text=true&appId=195073292401592&width="+facebookIframeW);
     const[facebookIframeJSX, setFacebookIframeJSX] = 
     useState(<iframe 
      id="facebook"
      className="iframe-style" 
      src={facebooksrc}
      scrolling="no" 
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>);

      // YOUTUBE EMBED CONFIG
     const[youtubeIframeW, setYoutubeIframeW] = useState(350);
     const[youtubesrc, setYoutubesrc] = useState("https://www.youtube.com/embed/JGF7MFZZAEY");
     const[youtubeIframeJSX, setYoutubeIframeJSX] = 
     useState(<iframe 
      id="youtube"
      className="iframe-style" 
      width={youtubeIframeW}
      height="315" 
      src={youtubesrc}
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
      </iframe>);

      // INSTAGRAM EMBED CONFIG
     const instagramAppId="195073292401592";
     const instagramClientToken="b9933604cbc0cf490f8ffeb97e719bc2";
     const instagramPostId="CLu1U0Flyfd";
     const[instagramIframeW, setInstagramIframeW] = useState(500);
     const[instagramIframeJSX, setInstagramIframeJSX] = 
     useState(<InstagramEmbed
              url={'https://instagr.am/p/'+instagramPostId+'/'}
              clientAccessToken={instagramAppId+"|"+instagramClientToken}
              maxWidth={instagramIframeW}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />);


      // TWITTER EMBED CONFIG
     const[twitterIframeJSX, setTwitterIframeJSX] = 
     useState(
              <div className="centerContent">
              <div className="selfCenter">
              <TwitterTweetEmbed tweetId="1338847828576063488" />
              </div>
              </div>);

      // TIKTOK EMBED CONFIG
     const[tiktokCite, setTiktokCite] = useState("https://www.tiktok.com/@jiabibii/video/6936295605538934018" );
     const[tiktokDataVideoId, setTiktokDataVideoId] = useState("6936295605538934018" );
     const[tiktokSection, setTiktokSection] = 
     useState(
              <div>
                      <section> 
                          <a target="_blank" title="@jiabibii" href="https://www.tiktok.com/@jiabibii">
                            @jiabibii
                          </a> 
                          <p>
                            <a title="adoptdontshop" target="_blank" href="https://www.tiktok.com/tag/adoptdontshop">
                              #adoptdontshop
                            </a>
                             follow @pawssionproject  official tiktok 🥰
                           </p> 
                           <a target="_blank" title="♬ original sound - Cibi" href="https://www.tiktok.com/music/original-sound-6922356027585268486">
                            ♬ original sound - Cibi
                          </a> 
                        </section>
             </div>
                );
     const[tiktokIframeJSX, setTiktokIframeJSX] = 
     useState(
              <div>
                <blockquote 
                  class="tiktok-embed" 
                  cite={tiktokCite}
                  data-video-id={tiktokDataVideoId}
                  style={{maxWidth: "605px", minWidth: "325px"}}> 
                   {tiktokSection}
                </blockquote> 
                
              </div>);


    function checkIfOnPhone(){
      setIsOnPhone((window.innerWidth-250 < window.innerHeight)? true : false);
    }

  return (
    <Container fluid className="px-0 App">

      <section id="home_sec">
        <ContactInfo setShowContact={setShowContact} showContact={showContact}/>
        <GifOverview isOnPhone={isOnPhone}/>
        <Container fluid className={isOnPhone ? "px-0 ml-0 main-cont d-flex":"px-0 ml-0 main-cont d-flex mt-2"}>
          {/* <YellowLineAnim/> */}
          <MainTitle/>
          {/* <Container id="cta_cont"> */}
            <CTAButtons setShowContact={setShowContact} showContact={showContact}/>
          {/* </Container> */}
        </Container>
        <Container className={isOnPhone?"about-out-cont-100vw":"about-out-cont-50vw"} id="about_out_cont" fluid>
          <About/>
        </Container>
        <PortraitPicture isOnPhone={isOnPhone}/>
        <RosePicture/>
      </section>

      <section id="content_sec">
        <ContentTitle/>
        <Container fluid id="contents-cont" className="m-auto d-flex flex-wrap">
          <LatestContentCard myIcon="fab fa-facebook" xClass="facebook" contentId="idfacebook" iframeJSX={facebookIframeJSX}/>
          <LatestContentCard myIcon="fab fa-youtube" xClass="youtube" contentId="idyoutube" iframeJSX={youtubeIframeJSX}/>
          <LatestContentCard myIcon="fab fa-instagram" xClass="instagram" contentId="idinstagram" iframeJSX={instagramIframeJSX}/>
          <LatestContentCard myIcon="fas fa-music" xClass="tiktok" contentId="idtiktok" iframeJSX={tiktokIframeJSX}/>
          <LatestContentCard myIcon="fab fa-twitter" xClass="twitter" contentId="idtwitter" iframeJSX={twitterIframeJSX}/>
        </Container>
      </section>

    </Container>
  );
}


function GifOverview(props){
    const isOnPhone = props.isOnPhone;
    const img=[img1,img2];
    const items=[];
    // ITEMS IN CAROUSEL
    if(isOnPhone){
      for(let i=0; i<2; i++){
        items.push(
        <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src={img[i]}
              alt={"gif_"+i}
            />
        </Carousel.Item>
       );
      }
    }else{
      for(let i=0; i<2; i++){
        items.push(
          <div className="img-cont">
            <img
              className="d-block w-100"
              src={img[i]}
              alt={"gif_"+i}
            />
          </div>
       );
      }
    }

    return (
      <div className="gifoverview">
        {isOnPhone &&
          <Container>
            <Carousel className="gifoverview-carousel">
              {items}
            </Carousel>
          </Container>
        }
        {!isOnPhone &&
          <Container fluid className="gifoverview-flex d-flex">
            {items}
          </Container>
        }
      </div>
    );
}

// function YellowLineAnim(props){
//   return(
//     <div className="ylw-l-anim d-flex">
//       <div className="long"></div>
//       <div className="short"></div>
//     </div>
//     )
// }

function MainTitle(props){
  return(
    <div className="maintitle w-auto">
        <h1 className="maintitle_lg">
          JIA
        </h1>
        <SmallTitle/>
    </div>
    );
}

function SmallTitle() {
  const [show, setShow] = useState(false);
  const [underlineClass, setUnderlineClass] = useState("mt-n3");
  const target = useRef(null);

  return (
    <>
        <button ref={target} 
          onMouseOver={() => {setUnderlineClass("mt-n3 underline-hover")}}
          onMouseLeave={() => {setUnderlineClass("mt-n3")}}
          onClick={() => {
            copyToClipboard(document.querySelector(".maintitle_sm").textContent);
            setShow(true);
            setTimeout(()=>{setShow(false)},2000)}} 
          className="maintitle_sm">
          @jiabibii
        </button>
        <div id="underline" className={underlineClass}></div>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            text copied! be sure to follow my content! :D
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

function CTAButtons(props){
  const [isViewActive, setViewActive] = useState(true);
  const setShowContact= props.setShowContact;

  return(
    <div className ="cta-btns w-auto d-flex">
      <a href="#content_sec">
        <button 
          // onFocus={()=>{setViewActive(true)}}
          // onBlur={()=>{setViewActive(false)}}
          onMouseOver={()=>{setViewActive(true)}}
          className={isViewActive? "view x-active" : "view x-inactive"}>
          <i className="fas fa-eye"></i> view latest content
        </button>
      </a>

      <button 
        // onFocus={()=>{setViewActive(false)}}
        // onBlur={()=>{setViewActive(true)}}
        onMouseOver={()=>{setViewActive(false)}}

        onClick={()=>{setShowContact(true)}}
        className={isViewActive? "contact x-inactive" : "contact x-active"}>
        <i className="fas fa-envelope"></i> contact info
      </button>
    </div>
    );
}

function ContactInfo(props){
 const show = props.showContact;
 const setShow = props.setShowContact;
  return(
    <Container className="mx-auto">
      
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w mx-auto"
        aria-labelledby="example-custom-modal-styling-title"
        id="contact-info-modal-styling"
      >
        <Modal.Header closeButton>
          <Modal.Title id="title">
            contact <span>jiabibii</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="body">
          <h5>
            click <i>#</i> to copy information
          </h5>
          <p>
            <ContactCopybtn idOfToCopy="contact1"/> <span id="contact1">email</span>  <br/>
            <ContactCopybtn idOfToCopy="contact2"/> <span id="contact2">gmail 2</span>  <br/>
            <ContactCopybtn idOfToCopy="contact3"/> <span id="contact3">ymail 5</span>  <br/>
          </p>
        </Modal.Body>
      </Modal>

    </Container>
      );
}

function ContactCopybtn(props) {
  const [show, setShow] = useState(false);
  const [underlineClass, setUnderlineClass] = useState("mt-n3");
  const target = useRef(null);

  return (
    <>
        <button ref={target} 
          onClick={() => {
            copyToClipboard(document.querySelector("#"+props.idOfToCopy).textContent);
            setShow(true);
            setTimeout(()=>{setShow(false)},2000)}} 
          className="bg-tp border-0 mt-n3">
          <i>#</i>
        </button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Text copied!
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

function PortraitPicture(props){
  let alt="portrait of jiabibii";
  return(
    <div className={props.isOnPhone ? "img-portrait-portrait" : "img-portrait-landscape"}>
      {props.isOnPhone && <img id="img-portrait" src={port_pic_portrait} alt={alt}/>}
      {!props.isOnPhone && <img id="img-landscape" src={port_pic_landscape} alt={alt}/>}
    </div>
    );
}

function RosePicture(props){
  return(
    <div id="rose-cont" className="container-fluid d-flex flex-row-reverse">
      <div className="rose-picture">
        <img id="rose-img" src={rose} alt="rose background"/>
      </div>
    </div>
    );
}

function About(props){
  return(
    <div className="about-cont d-flex">
      <h1>ABOUT</h1>
      <p>lorem ipsum dolor sit amett lorem ipsum dolor sit amett lorem ipsum dolor sit amett lorem ipsum dolor sit amett lorem ipsum dolor sit amett lorem ipsum dolor sit amett lorem ipsum dolor sit amett lorem ipsum dolor sit amett</p>
    </div>
    );
}

function ContentTitle(props){
  return(
    <Container id="content-title-cont" className="my-5">
      <h1><i className="fas fa-video"></i> my latest content</h1>
    </Container>
    );
}

function LatestContentCard(props){
  const[lineClassName, setLineClassName]=useState("line " + props.xClass);
  return(
      <Container
        id={props.contentId}
        onMouseOver={() => setLineClassName(lineClassName+" thick-line")}
        onMouseLeave={() => setLineClassName("line " + props.xClass)}
        className="latest-content-card-cont p-0">
          <div id="title-cont" className={"h_"+props.xClass}>
            <h1><i className={props.myIcon}></i></h1>
          </div>
          <div className={lineClassName}></div>
          <div className="container mx-auto p-0 iframe-cont">
            {props.iframeJSX}
          </div>
      </Container>

    );
}


function copyToClipboard(text){
      const textArea = document.createElement('textarea');
      textArea.value = text;

      const body = document.body;
      if (body != null) {
          body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          body.removeChild(textArea);
      }
  };

export default App;



// TODO: 

// FIX responsive sizes. 
//   try mosaic brick grid
//     differing height
//     same width
    // overlapping of content header

// FADE(?) BLACK background content section

// replace to supposed image

// auto update of content post

// add splash of design

// secure tokens sensitive info