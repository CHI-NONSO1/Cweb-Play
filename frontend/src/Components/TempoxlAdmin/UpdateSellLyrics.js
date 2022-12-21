import React, { useEffect } from "react";
import "../CSS/UpdateSellLyrics.scss"
import { useState } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useNavigate, useParams } from "react-router-dom";




function UpdateSellLyrics() {


  const [msg, setMsg] = useState('');
  const [lyricsname, setLyricsname] = useState("");
  const [price, setPrice] = useState('');
 
const {buylyricsid} = useParams()
const history = useNavigate()

  useEffect(() => {
 
  
  
  
    const GetLyrics = async () => {
      
      const lyrics = await axios.get(`http://localhost:8000/buylyrics/one/${buylyricsid}`);
     
      setLyricsname(lyrics.data.lyricsname);
      setPrice(lyrics.data.price);
      setLine1(lyrics.data.line1);
      setLine2(lyrics.data.line2);
      setLine3(lyrics.data.line3);
      setLine4(lyrics.data.line4);
      setLine5(lyrics.data.line5);
      setLine6(lyrics.data.line6);
      setLine7(lyrics.data.line7);
      setLine8(lyrics.data.line8);
      setLine9(lyrics.data.line9);
      setLine10(lyrics.data.line10);
      setLine11(lyrics.data.line11);
      setLine12(lyrics.data.line12);
      setLine13(lyrics.data.line13);
      setLine14(lyrics.data.line14);
      setLine15(lyrics.data.line15);
      setLine16(lyrics.data.line16);
      setLine17(lyrics.data.line17);
      setLine18(lyrics.data.line18);
      setLine19(lyrics.data.line19);
      setLine20(lyrics.data.line20);
      setLine21(lyrics.data.line21);
      setLine22(lyrics.data.line22);
      setLine23(lyrics.data.line23);
      setLine24(lyrics.data.line24);
      setLine25(lyrics.data.line25);
      setLine26(lyrics.data.line26);
      setLine27(lyrics.data.line27);
      setLine28(lyrics.data.line28);
      setLine29(lyrics.data.line29);
      setLine30(lyrics.data.line30);
      setLine31(lyrics.data.line31);
      setLine32(lyrics.data.line32);
      setLine33(lyrics.data.line33);
      setLine34(lyrics.data.line34);
      setLine35(lyrics.data.line35);
      setLine36(lyrics.data.line36);
      setLine37(lyrics.data.line37);
      setLine38(lyrics.data.line38);
      setLine39(lyrics.data.line39);
      setLine40(lyrics.data.line40);
      setLine41(lyrics.data.line41);
      setLine42(lyrics.data.line42);
      setLine43(lyrics.data.line43);
      setLine44(lyrics.data.line44);
      setLine45(lyrics.data.line45);
      setLine46(lyrics.data.line46);
      setLine47(lyrics.data.line47);
      setLine48(lyrics.data.line48);
      setLine49(lyrics.data.line49);
      setLine50(lyrics.data.line50);
      setLine51(lyrics.data.line51);
      setLine52(lyrics.data.line52);
      setLine53(lyrics.data.line53);
      setLine54(lyrics.data.line54);
      setLine55(lyrics.data.line55);
      setLine56(lyrics.data.line56);
      setLine57(lyrics.data.line57);
      setLine58(lyrics.data.line58);
      setLine59(lyrics.data.line59);
      setLine60(lyrics.data.line60);
      setLine61(lyrics.data.line61);
      setLine62(lyrics.data.line62);
      setLine63(lyrics.data.line63);
      setLine64(lyrics.data.line64);
      setLine65(lyrics.data.line65);
      setLine66(lyrics.data.line66);
      setLine67(lyrics.data.line67);
      setLine68(lyrics.data.line68);
      setLine69(lyrics.data.line69);
      setLine70(lyrics.data.line70);
    
    }
   
    GetLyrics()


  //refreshToken()
  
  },[buylyricsid])
  

  //const history = useNavigate();

  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [line4, setLine4] = useState('');
  const [line5, setLine5] = useState('');
  const [line6, setLine6] = useState('');
  const [line7, setLine7] = useState('');
  const [line8, setLine8] = useState('');
  const [line9, setLine9] = useState('');
  const [line10, setLine10] = useState('');
  const [line11, setLine11] = useState('');
  const [line12, setLine12] = useState('');
  const [line13, setLine13] = useState('');
  const [line14, setLine14] = useState('');
  const [line15, setLine15] = useState('');
  const [line16, setLine16] = useState('');
  const [line17, setLine17] = useState('');
  const [line18, setLine18] = useState('');
  const [line19, setLine19] = useState('');
  const [line20, setLine20] = useState('');
  const [line21, setLine21] = useState('');
  const [line22, setLine22] = useState('');
  const [line23, setLine23] = useState('');
  const [line24, setLine24] = useState('');
  const [line25, setLine25] = useState('');
  const [line26, setLine26] = useState('');
  const [line27, setLine27] = useState('');
  const [line28, setLine28] = useState('');
  const [line29, setLine29] = useState('');
  const [line30, setLine30] = useState('');
  const [line31, setLine31] = useState('');
  const [line32, setLine32] = useState('');
  const [line33, setLine33] = useState('');
  const [line34, setLine34] = useState('');
  const [line35, setLine35] = useState('');
  const [line36, setLine36] = useState('');
  const [line37, setLine37] = useState('');
  const [line38, setLine38] = useState('');
  const [line39, setLine39] = useState('');
  const [line40, setLine40] = useState('');
  const [line41, setLine41] = useState('');
  const [line42, setLine42] = useState('');
  const [line43, setLine43] = useState('');
  const [line44, setLine44] = useState('');
  const [line45, setLine45] = useState('');
  const [line46, setLine46] = useState('');
  const [line47, setLine47] = useState('');
  const [line48, setLine48] = useState('');
  const [line49, setLine49] = useState('');
  const [line50, setLine50] = useState('');
  const [line51, setLine51] = useState('');
  const [line52, setLine52] = useState('');
  const [line53, setLine53] = useState('');
  const [line54, setLine54] = useState('');
  const [line55, setLine55] = useState('');
  const [line56, setLine56] = useState('');
  const [line57, setLine57] = useState('');
  const [line58, setLine58] = useState('');
  const [line59, setLine59] = useState('');
  const [line60, setLine60] = useState('');
  const [line61, setLine61] = useState('');
  const [line62, setLine62] = useState('');
  const [line63, setLine63] = useState('');
  const [line64, setLine64] = useState('');
  const [line65, setLine65] = useState('');
  const [line66, setLine66] = useState('');
  const [line67, setLine67] = useState('');
  const [line68, setLine68] = useState('');
  const [line69, setLine69] = useState('');
  const [line70, setLine70] = useState('');


      const addLyrics = async (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();

        try{
      
          await axios.patch(`http://localhost:8000/buylyrics/${buylyricsid}`, 
      
            { 
              buylyricsid:buylyricsid,    
              lyricsname: lyricsname, 
              price: price,
              line1: line1,
              line2: line2,
              line3: line3,
              line4: line4,
              line5: line5,
              line6: line6,
              line7: line7,
              line8: line8,
              line9: line9,
              line10:line10,
              line11:line11,
              line12:line12,
              line13:line13,
              line14:line14,
              line15:line15,
              line16:line16,
              line17:line17,
              line18:line18,
              line19:line19,
              line20:line20,
              line21:line21,
              line22:line22,
              line23:line23,
              line24:line24,
              line25:line25,
              line26:line26,
              line27:line27,
              line28:line28,
              line29:line29,
              line30:line30,
              line31:line31,
              line32:line32,
              line33:line33,
              line34:line34,
              line35:line35,
              line36:line36,
              line37:line37,
              line38:line38,
              line39:line39,
              line40:line40,
              line41:line41,
              line42:line42,
              line43:line43,
              line44:line44,
              line45:line45,
              line46:line46,
              line47:line47,
              line48:line48,
              line49:line49,
              line50:line50,
              line51:line51,
              line52:line52,
              line53:line53,
              line54:line54,
              line55:line55,
              line56:line56,
              line57:line57,
              line58:line58,
              line59:line59,
              line60:line60,
              line61:line61,
              line62:line62,
              line63:line63,
              line64:line64,
              line65:line65,
              line66:line66,
              line67:line67,
              line68:line68,
              line69:line69,
              line70:line70
            
              
          },
          {headers: {
            'content-type': 'application/json',
            "Access-Control-Allow-Origin": "http://localhost:8000",
          }
        }).then((result) => {
          if(result)
          history('/admindashboard')
          })
          
          }catch (error)  {
            if (error.response) {
              setMsg(error.response.data.msg);
          }
          }
      }

  
  return (

    
   
    <SellLyrics >
      <form encType="multipart/form-data"  method="post">
    
    
      <div className="lyrics__header-wrap">
        <h2 className="lyrics_header">Update Lyrics</h2>
      </div>
      <div className="form-group">
          <p className="has-text-centered">{msg}</p>
      </div>

      <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="lyricsname"
              name="lyricsname"
              placeholder="Lyrics Name"
              className="form-control"
              value={lyricsname}
              onChange={(e) => setLyricsname(e.target.value)}
              />
            <label htmlFor="lyricsname" className="labText">Lyrics Name</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>


        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              />
            <label htmlFor="price" className="labText">Price</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

      <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line1"
              name="line1"
              placeholder="line1"
              className="form-control"
              value={line1}
              onChange={(e) => setLine1(e.target.value)}
              />
            <label htmlFor="line1" className="labText">line1</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line2"
              name="line2"
              placeholder="line2"
              className="form-control"
              value={line2}
              onChange={(e) => setLine2(e.target.value)}
              />
            <label htmlFor="line2" className="labText">line2</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line3"
              name="line3"
              placeholder="line3"
              className="form-control"
              value={line3}
              onChange={(e) => setLine3(e.target.value)}
              />
            <label htmlFor="line3" className="labText">line3</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line4"
              name="line4"
              placeholder="line4"
              className="form-control"
              value={line4}
              onChange={(e) => setLine4(e.target.value)}
              />
            <label htmlFor="line4" className="labText">line4</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line5"
              name="line5"
              placeholder="line5"
              className="form-control"
              value={line5}
              onChange={(e) => setLine5(e.target.value)}
              />
            <label htmlFor="line5" className="labText">line5</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line6"
              name="line6"
              placeholder="line6"
              className="form-control"
              value={line6}
              onChange={(e) => setLine6(e.target.value)}
              />
            <label htmlFor="line6" className="labText">line6</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line7"
              name="line7"
              placeholder="line7"
              className="form-control"
              value={line7}
              onChange={(e) => setLine7(e.target.value)}
              />
            <label htmlFor="line7" className="labText">line7</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line8"
              name="line8"
              placeholder="line8"
              className="form-control"
              value={line8}
              onChange={(e) => setLine8(e.target.value)}
              />
            <label htmlFor="line8" className="labText">line8</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line9"
              name="line9"
              placeholder="line9"
              className="form-control"
              value={line9}
              onChange={(e) => setLine9(e.target.value)}
              />
            <label htmlFor="line9" className="labText">line9</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line10"
              name="line10"
              placeholder="line10"
              className="form-control"
              value={line10}
              onChange={(e) => setLine10(e.target.value)}
              />
            <label htmlFor="line10" className="labText">line10</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>


        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line11"
              name="line11"
              placeholder="line11"
              className="form-control"
              value={line11}
              onChange={(e) => setLine11(e.target.value)}
              />
            <label htmlFor="line11" className="labText">line11</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line12"
              name="line12"
              placeholder="line12"
              className="form-control"
              value={line12}
              onChange={(e) => setLine12(e.target.value)}
              />
            <label htmlFor="line12" className="labText">line12</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line13"
              name="line13"
              placeholder="line13"
              className="form-control"
              value={line13}
              onChange={(e) => setLine13(e.target.value)}
              />
            <label htmlFor="line13" className="labText">line13</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line14"
              name="line14"
              placeholder="line14"
              className="form-control"
              value={line14}
              onChange={(e) => setLine14(e.target.value)}
              />
            <label htmlFor="line14" className="labText">line14</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line15"
              name="line15"
              placeholder="line15"
              className="form-control"
              value={line15}
              onChange={(e) => setLine15(e.target.value)}
              />
            <label htmlFor="line15" className="labText">line15</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line16"
              name="line16"
              placeholder="line16"
              className="form-control"
              value={line16}
              onChange={(e) => setLine16(e.target.value)}
              />
            <label htmlFor="line16" className="labText">line16</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line17"
              name="line17"
              placeholder="line17"
              className="form-control"
              value={line17}
              onChange={(e) => setLine17(e.target.value)}
              />
            <label htmlFor="line17" className="labText">line17</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line18"
              name="line18"
              placeholder="line18"
              className="form-control"
              value={line18}
              onChange={(e) => setLine18(e.target.value)}
              />
            <label htmlFor="line18" className="labText">line18</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line19"
              name="line19"
              placeholder="line19"
              className="form-control"
              value={line19}
              onChange={(e) => setLine19(e.target.value)}
              />
            <label htmlFor="line19" className="labText">line19</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line20"
              name="line20"
              placeholder="line20"
              className="form-control"
              value={line20}
              onChange={(e) => setLine20(e.target.value)}
              />
            <label htmlFor="line20" className="labText">line20</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>



        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line21"
              name="line21"
              placeholder="line21"
              className="form-control"
              value={line21}
              onChange={(e) => setLine21(e.target.value)}
              />
            <label htmlFor="line21" className="labText">line21</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line22"
              name="line22"
              placeholder="line22"
              className="form-control"
              value={line22}
              onChange={(e) => setLine22(e.target.value)}
              />
            <label htmlFor="line22" className="labText">line22</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line23"
              name="line23"
              placeholder="line23"
              className="form-control"
              value={line23}
              onChange={(e) => setLine23(e.target.value)}
              />
            <label htmlFor="line23" className="labText">line23</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line24"
              name="line24"
              placeholder="line24"
              className="form-control"
              value={line24}
              onChange={(e) => setLine24(e.target.value)}
              />
            <label htmlFor="line24" className="labText">line24</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line25"
              name="line25"
              placeholder="line25"
              className="form-control"
              value={line25}
              onChange={(e) => setLine25(e.target.value)}
              />
            <label htmlFor="line25" className="labText">line25</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line26"
              name="line26"
              placeholder="line26"
              className="form-control"
              value={line26}
              onChange={(e) => setLine26(e.target.value)}
              />
            <label htmlFor="line26" className="labText">line26</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line27"
              name="line27"
              placeholder="line27"
              className="form-control"
              value={line27}
              onChange={(e) => setLine27(e.target.value)}
              />
            <label htmlFor="line27" className="labText">line27</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line28"
              name="line28"
              placeholder="line28"
              className="form-control"
              value={line28}
              onChange={(e) => setLine28(e.target.value)}
              />
            <label htmlFor="line28" className="labText">line28</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line29"
              name="line29"
              placeholder="line29"
              className="form-control"
              value={line29}
              onChange={(e) => setLine29(e.target.value)}
              />
            <label htmlFor="line29" className="labText">line29</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line30"
              name="line30"
              placeholder="line30"
              className="form-control"
              value={line30}
              onChange={(e) => setLine30(e.target.value)}
              />
            <label htmlFor="line30" className="labText">line30</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>


        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line31"
              name="line31"
              placeholder="line31"
              className="form-control"
              value={line31}
              onChange={(e) => setLine31(e.target.value)}
              />
            <label htmlFor="line31" className="labText">line31</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line32"
              name="line32"
              placeholder="line32"
              className="form-control"
              value={line32}
              onChange={(e) => setLine32(e.target.value)}
              />
            <label htmlFor="line32" className="labText">line32</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line33"
              name="line33"
              placeholder="line33"
              className="form-control"
              value={line33}
              onChange={(e) => setLine33(e.target.value)}
              />
            <label htmlFor="line33" className="labText">line33</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line34"
              name="line34"
              placeholder="line34"
              className="form-control"
              value={line34}
              onChange={(e) => setLine34(e.target.value)}
              />
            <label htmlFor="line34" className="labText">line34</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line35"
              name="line35"
              placeholder="line35"
              className="form-control"
              value={line35}
              onChange={(e) => setLine35(e.target.value)}
              />
            <label htmlFor="line35" className="labText">line35</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line36"
              name="line36"
              placeholder="line36"
              className="form-control"
              value={line36}
              onChange={(e) => setLine36(e.target.value)}
              />
            <label htmlFor="line36" className="labText">line36</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line37"
              name="line37"
              placeholder="line37"
              className="form-control"
              value={line37}
              onChange={(e) => setLine37(e.target.value)}
              />
            <label htmlFor="line37" className="labText">line37</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line38"
              name="line38"
              placeholder="line38"
              className="form-control"
              value={line38}
              onChange={(e) => setLine38(e.target.value)}
              />
            <label htmlFor="line38" className="labText">line38</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line39"
              name="line39"
              placeholder="line39"
              className="form-control"
              value={line39}
              onChange={(e) => setLine39(e.target.value)}
              />
            <label htmlFor="line39" className="labText">line39</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line40"
              name="line40"
              placeholder="line40"
              className="form-control"
              value={line40}
              onChange={(e) => setLine40(e.target.value)}
              />
            <label htmlFor="line40" className="labText">line40</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>


        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line41"
              name="line41"
              placeholder="line41"
              className="form-control"
              value={line41}
              onChange={(e) => setLine41(e.target.value)}
              />
            <label htmlFor="line41" className="labText">line41</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line42"
              name="line42"
              placeholder="line42"
              className="form-control"
              value={line42}
              onChange={(e) => setLine42(e.target.value)}
              />
            <label htmlFor="line42" className="labText">line42</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line43"
              name="line43"
              placeholder="line43"
              className="form-control"
              value={line43}
              onChange={(e) => setLine43(e.target.value)}
              />
            <label htmlFor="line43" className="labText">line43</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line44"
              name="line44"
              placeholder="line44"
              className="form-control"
              value={line44}
              onChange={(e) => setLine44(e.target.value)}
              />
            <label htmlFor="line44" className="labText">line44</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line45"
              name="line45"
              placeholder="line45"
              className="form-control"
              value={line45}
              onChange={(e) => setLine45(e.target.value)}
              />
            <label htmlFor="line45" className="labText">line45</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line46"
              name="line46"
              placeholder="line46"
              className="form-control"
              value={line46}
              onChange={(e) => setLine46(e.target.value)}
              />
            <label htmlFor="line46" className="labText">line46</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line47"
              name="line47"
              placeholder="line47"
              className="form-control"
              value={line47}
              onChange={(e) => setLine47(e.target.value)}
              />
            <label htmlFor="line47" className="labText">line47</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line48"
              name="line48"
              placeholder="line48"
              className="form-control"
              value={line48}
              onChange={(e) => setLine48(e.target.value)}
              />
            <label htmlFor="line48" className="labText">line48</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line49"
              name="line49"
              placeholder="line49"
              className="form-control"
              value={line49}
              onChange={(e) => setLine49(e.target.value)}
              />
            <label htmlFor="line49" className="labText">line49</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line50"
              name="line50"
              placeholder="line50"
              className="form-control"
              value={line50}
              onChange={(e) => setLine50(e.target.value)}
              />
            <label htmlFor="line50" className="labText">line50</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>


        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line51"
              name="line51"
              placeholder="line51"
              className="form-control"
              value={line51}
              onChange={(e) => setLine51(e.target.value)}
              />
            <label htmlFor="line51" className="labText">line51</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line52"
              name="line52"
              placeholder="line52"
              className="form-control"
              value={line52}
              onChange={(e) => setLine52(e.target.value)}
              />
            <label htmlFor="line52" className="labText">line52</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line53"
              name="line53"
              placeholder="line53"
              className="form-control"
              value={line53}
              onChange={(e) => setLine53(e.target.value)}
              />
            <label htmlFor="line53" className="labText">line53</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line54"
              name="line54"
              placeholder="line54"
              className="form-control"
              value={line54}
              onChange={(e) => setLine54(e.target.value)}
              />
            <label htmlFor="line54" className="labText">line54</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line55"
              name="line55"
              placeholder="line55"
              className="form-control"
              value={line55}
              onChange={(e) => setLine55(e.target.value)}
              />
            <label htmlFor="line55" className="labText">line55</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line56"
              name="line56"
              placeholder="line56"
              className="form-control"
              value={line56}
              onChange={(e) => setLine56(e.target.value)}
              />
            <label htmlFor="line56" className="labText">line56</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line57"
              name="line57"
              placeholder="line57"
              className="form-control"
              value={line57}
              onChange={(e) => setLine57(e.target.value)}
              />
            <label htmlFor="line57" className="labText">line57</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line58"
              name="line58"
              placeholder="line58"
              className="form-control"
              value={line58}
              onChange={(e) => setLine58(e.target.value)}
              />
            <label htmlFor="line58" className="labText">line58</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line59"
              name="line59"
              placeholder="line59"
              className="form-control"
              value={line59}
              onChange={(e) => setLine59(e.target.value)}
              />
            <label htmlFor="line59" className="labText">line59</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line60"
              name="line60"
              placeholder="line60"
              className="form-control"
              value={line60}
              onChange={(e) => setLine60(e.target.value)}
              />
            <label htmlFor="line60" className="labText">line60</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>


        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line61"
              name="line61"
              placeholder="line61"
              className="form-control"
              value={line61}
              onChange={(e) => setLine61(e.target.value)}
              />
            <label htmlFor="line61" className="labText">line61</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line62"
              name="line62"
              placeholder="line62"
              className="form-control"
              value={line62}
              onChange={(e) => setLine62(e.target.value)}
              />
            <label htmlFor="line62" className="labText">line62</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line63"
              name="line63"
              placeholder="line63"
              className="form-control"
              value={line63}
              onChange={(e) => setLine63(e.target.value)}
              />
            <label htmlFor="line63" className="labText">line63</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line64"
              name="line64"
              placeholder="line64"
              className="form-control"
              value={line64}
              onChange={(e) => setLine64(e.target.value)}
              />
            <label htmlFor="line64" className="labText">line64</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line65"
              name="line65"
              placeholder="line65"
              className="form-control"
              value={line65}
              onChange={(e) => setLine65(e.target.value)}
              />
            <label htmlFor="line65" className="labText">line65</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line66"
              name="line66"
              placeholder="line66"
              className="form-control"
              value={line66}
              onChange={(e) => setLine66(e.target.value)}
              />
            <label htmlFor="line66" className="labText">line66</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line67"
              name="line67"
              placeholder="line67"
              className="form-control"
              value={line67}
              onChange={(e) => setLine67(e.target.value)}
              />
            <label htmlFor="line67" className="labText">line67</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line68"
              name="line68"
              placeholder="line68"
              className="form-control"
              value={line68}
              onChange={(e) => setLine68(e.target.value)}
              />
            <label htmlFor="line68" className="labText">line68</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line69"
              name="line69"
              placeholder="line69"
              className="form-control"
              value={line69}
              onChange={(e) => setLine69(e.target.value)}
              />
            <label htmlFor="line69" className="labText">line69</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form__group--parent">
          <div className="input_parent">
            <input
              type="text"
              id="line70"
              name="line70"
              placeholder="line70"
              className="form-control"
              value={line70}
              onChange={(e) => setLine70(e.target.value)}
              />
            <label htmlFor="line70" className="labText">line70</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group__submit--addlyrics">
          
          <input type="submit" className="lyrics__btn_submit" onClick={(e) => addLyrics(e)} value="Update" />

      </div>
      </form>
      </SellLyrics>

      
    

      
  );
}

export default UpdateSellLyrics

const SellLyrics = styled.div`
width:40%;
height:5999px; 
position:absolute;
top:1.8%;
left:5%;
right:20%;

margin-bottom: 5%;
z-index:100;
 background:navy;
@media (max-width:820px) {
  width:100%;
  height:5310px; 
  position:absolute;
  top:-4%;
  margin-bottom: 5%;
}

`


