import React from 'react';
import ReactDOM from 'react-dom';

/* #region css import  */
   import './Main.css';
/* #endregion */


   import IconBitazza from '../src/pic/icon2.png';
   import IconNameBitazza from '../src/pic/icon1.png';
   import PhotoBitazza from '../src/pic/photo bitazza en.png';
   import IconBtn from '../src/pic/icons8-download-24.png';
   import PhotoTh from '../src/pic/icon3 bitazza.png';


const MainItems = () =>{

    /* #region CllickToggleBtn1 */

      const ToggleClick = ()=>{
          document.querySelector("#click-btn-toggle").style.left="2px";
          document.querySelector("#click-btn-toggle1").style.display="block";
          document.querySelector("#click-btn-toggle1").style.left="2px";
          document.querySelector("#click-btn-toggle").style.display="none";
          document.querySelector(".p-div-btn").style.display="none";
          document.querySelector(".p-div-btn1").style.display="block";

          document.querySelector(".p-main-email1").style.display="none";
          document.querySelector(".p-main-email1-th").style.display="block";
          document.querySelector(".p-main-email2").style.display="none";
          document.querySelector(".p-main-email2-th").style.display="block";
          document.querySelector(".p-main-email3").style.display="none";
          document.querySelector(".photo-bitazza").style.display="none";
          document.querySelector(".photo-bitazza-th").style.display="block";
          document.querySelector(".p-dow").style.display='none';
         document.querySelector(".p-dow-th").style.display='block';
          document.querySelector(".p-log").style.display='none';
          document.querySelector(".p-log-th").style.display='block';
      };
    /* #endregion */
    
    /* #region ClickToggleBtn2 */
      const ToggleClick1 = ()=>{
          document.querySelector("#click-btn-toggle").style.left="22px";
          document.querySelector("#click-btn-toggle1").style.display="none";
          document.querySelector("#click-btn-toggle").style.display="block";
          document.querySelector(".p-div-btn").style.display="block";
          document.querySelector(".p-div-btn1").style.display="none";

          document.querySelector(".p-main-email1").style.display="block";
          document.querySelector(".p-main-email1-th").style.display="none";
          document.querySelector(".p-main-email2").style.display="block";
          document.querySelector(".p-main-email2-th").style.display="none";
          document.querySelector(".p-main-email3").style.display="block";
          document.querySelector(".photo-bitazza").style.display="block";
          document.querySelector(".photo-bitazza-th").style.display="none";
          document.querySelector(".p-dow").style.display='block';
          document.querySelector(".p-dow-th").style.display='none';
          document.querySelector(".p-log").style.display='block';
          document.querySelector(".p-log-th").style.display='none';
      };
    /* #endregion */

    return (
        <div>
            <section id='section-main-bitazza'>

                <div id='div-main-btn'>
                    <div className='div-btn'>
                        <button id='click-btn-toggle' onClick={ToggleClick}></button>
                        <button id='click-btn-toggle1' onClick={ToggleClick1}></button>
                        <p className='p-div-btn'>EN</p>
                        <p className='p-div-btn1'>TH</p>
                    </div>
                </div>
        
               <div className='div-main-icon-bitazza'>
                   <a href="https://trade.bitazza.com/th/login"><img className='icon-bitazza1' src={IconBitazza} alt="icon bitazza"/></a>
                   <a href="https://trade.bitazza.com/th/login"><img className='icon-bitazza2' src={IconNameBitazza} alt="icon name bitazza"/></a>
                   <p className='p-main-email1'>We ve sent you an email.</p>
                   <p className='p-main-email1-th'>เราส่งอีเมลไปหาคุณแล้ว</p>

                   <p className='p-main-email2'>Please click verify</p>
                   <p className='p-main-email2-th'>กรุณาตรวจสอบอีเมลเพื่อเริ่มใช้งาน</p>
                   <p className='p-main-email3'>to get started!</p>
               </div>

               <div className='div-photo-bitazza'>
                    <img className='photo-bitazza' src={PhotoBitazza} alt="photobitazza"/>
                    <img className='photo-bitazza-th' src={PhotoTh} alt="photobitazza"/>
               </div>

               <div className='div-btn-click-footer'>
                   <button className='btn-dow'> 
                      <img className='icon-btn' src={IconBtn} alt="download"/>
                      <p className='p-dow'>Download App</p>
                      <p className='p-dow-th'>ดาวน์โหลดแอฟ</p>
                   </button>
                   <button className='btn-log'> 
                       <a href="https://trade.bitazza.com/th/login">
                           <p className='p-log'>Log in</p>
                           <p className='p-log-th'>เข้าสู่ระบบ</p>
                       </a>
                    </button>
               </div>

            </section>
        </div>
    )
};
 export default MainItems;