import './App.css';
import React, { useState } from 'react';
import { Carousel, Container, Modal} from 'react-bootstrap';
import img1 from './img/test.gif';
import img2 from './img/test.gif';
import port_pic_portrait from './img/portrait_gorl.png';
import port_pic_landscape from './img/gorl.png';
import rose from './img/rose.png';


function App() {
    const [isOnPhone, setIsOnPhone] = useState((window.innerWidth < window.innerHeight)? true : false);
    window.addEventListener('resize', ()=>checkIfOnPhone());

     const[showContact, setShowContact] = useState(false);

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
          <About/>s
        </Container>
        <PortraitPicture isOnPhone={isOnPhone}/>
        <RosePicture/>
      </section>

      <section id="content_sec">
        <ContentTitle/>
        <Container fluid id="contents-cont" className="m-auto d-flex flex-wrap">
          <LatestContentCard myTitle="Facebook" myIcon="fab fa-facebook" xClass="facebook"/>
          <LatestContentCard myTitle="Youtube" myIcon="fab fa-youtube" xClass="youtube"/>
          <LatestContentCard myTitle="Instagram" myIcon="fab fa-instagram" xClass="instagram"/>
          <LatestContentCard myTitle="TikTok" myIcon="fas fa-music" xClass="tiktok"/>
          <LatestContentCard myTitle="Twitter" myIcon="fab fa-twitter" xClass="twitter"/>
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
          JIABIBII
        </h1>
        <h3 className="maintitle_sm">
          <i className="fas fa-video"></i> content creator
        </h3>
    </div>
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
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
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
            <i>#</i>&ensp;email 1 <br/>
            <i>#</i>&ensp;contact 2 <br/>
            <i>#</i>&ensp;email 3 <br/>
            <i>#</i>&ensp;home number 4 <br/>
            <i>#</i>&ensp;phone number 1 <br/>
          </p>
        </Modal.Body>
      </Modal>
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
  // let title=props.myTitle;
  const[lineClassName, setLineClassName]=useState("line " + props.xClass);
  return(
    <Container 
      onMouseOver={() => setLineClassName(lineClassName+" thick-line")}
      onMouseLeave={() => setLineClassName("line " + props.xClass)}
      className="latest-content-card-cont">
      <div>
        <h1><i className={props.myIcon}></i></h1>
      </div>
      <div className={lineClassName}></div>
      <div className="content-cont">
        
      </div>
    </Container>
    );
}

export default App;
