import React,  { useState, useRef, useEffect, Component }  from 'react';
import 'babel-polyfill';

import ReactSlider from "react-slider";
import Slider from '@mui/material/Slider';


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, Form, Input, InputHalfLeft, InputHalfRight , DivSlider, InputSlider, Select} from './HeroStyles';
import {categoryOptions, sortByOption} from '../../constants/constants';


const Event = () => {

  // 
  // const [department, setDepartment] = useState("");
  
  // const [discount, setDiscount] = useState("");
  // const [relevance, setRelevance] = useState("");
  // const [prime, setPrime] = useState("");
  // const [freeShipping, setFreeShipping] = useState("");
 
  // const [urlString, setUrlString] = useState("");

 

  const onSubmits = (event) => {
    event.preventDefault();
   
  }
}


function SendDataToUrl( event, searchTerm, country, minPrice, maxPrice, sortBy, primeOnly, freeShipping){
  event.preventDefault();
  let urlString = "";
  
  // alert(country=="");
  // searchText = document.getElementById("idCountry").value;
  if(country == ""){
    urlString += "https://www.amazon.com/s";
  }else if ( country != null || country != ""){
    urlString += country;
  }
  if ( searchTerm != ""){
    urlString += "?k=" + searchTerm.toLowerCase().replace(" ","+");
  }
  
  
  //if ( minprice != "") add 00 to string
  //same para o maxprice
  if (minPrice != ""){
    urlString += "&rh=p_36%3A" + minPrice + "00";
  }
  if (maxPrice != ""){
    urlString += "-"+ maxPrice+"00";
  }
  if (sortBy != ""){
    urlString += "&ref=" + sortBy;
  }
 
  urlString +="&tag=amzdealfinder-20";
  
  // if(document.getElementById("idSearch") != undefined  || document.getElementById("idSearch").value != ""){
  //   searchText += "?k=" + document.getElementById("idSearch").value.replace(" ", "+");
  // }
  // if( document.getElementById("idMinPrice")!=undefined || document.getElementById("idMinPrice").value==""){
  //   minPrice = document.getElementById("idMinPrice").value+'00';
  // }
  // if( document.getElementById("idMaxPrice")!=undefined || document.getElementById("idMaxPrice").value==""){
  //   maxPrice = document.getElementById("idMaxPrice").value+'00';
  // }
  // if ( minPrice != "" || maxPrice !=""){
  //   searchText += "&rh=p_36%3A"+minPrice+"-"+maxPrice;
  // }
  // if(document.getElementById("idSortBy") != undefined  || document.getElementById("idSortBy").value != ""){
  //   switch(document.getElementById("idSortBy").value){
  //     case "featured-rank": 
  //       searchText += "&ref=sr_st_relevanceblender";
  //       break;
  //     case "price-asc-rank":
  //       searchText += "&ref=sr_st_price-asc-rank";
  //       break;
  //     case "price-desk-rank":
  //       searchText += "&ref=sr_st_price-desc-rank";
  //       break;
  //     case "review-rank":
  //       searchText += "&ref=sr_st_review-rank";
  //       break;
  //     case "date-desc-rank":
  //       searchText += "&ref=sr_st_date-desc-rank";
  //       break;
  //     default:
  //       break;
  //   }
  // }

  
  
  const openUrl =  (ev) =>{ 
    ev.preventDefault();
    window.open(urlString,"_blank");
  }
  return urlString;
  
  
 
}


const Hero = (props) => {
  const [searchTerm, setSearchTerm] = useState("");  
  const [country, setCountry] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [primeOnly, setPrimeOnly] = useState("");
  const [freeShipping, setFreeShipping] = useState("");

  const [urlText, setUrlText] = useState("");


return  (
<>
<Section column nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      Amz Deal Finder
    </SectionTitle>
    <SectionText>
    Use this site to find the products in Amazon
   
    </SectionText>
  </LeftSection>
  <RightSection>
  <Form className="form form-horizontal"  id="amazonDiscountFinderForm" novalidate="novalidate">
    <Input onChange={(e) => setSearchTerm(e.target.value)} id="idSearch" type="" autocomplete="name" placeholder="Search Term" required  />
    

   <Select
    onChange={(e) => {
      setCountry(e.target.value);
    }}
   >
      {categoryOptions.map((item, index) => (
        <option value={item.value} key={index}>{item.label}</option>   
     ))}   
   </Select>
  
  
    <InputHalfLeft id="idMinPrice" type="text" autocomplete="name" placeholder="Min Price" onChange={(e)=> {setMinPrice(e.target.value)}} />
    <InputHalfRight id="idMaxPrice" type="text" autocomplete="name" placeholder="Max Price"  onChange={(e)=> {setMaxPrice(e.target.value)}} />

    {/* <ReactSlider
      id="idPercSlider"
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      renderThumb={(props, state) => <div {...props}>{state.valueNow}%</div>}
    /> */}
    
    

    <Select
    onChange={(e) => {
      setSortBy(e.target.value);
   }} 
   >
      {sortByOption.map((item, index) => (
        <option value={item.value} key={index}>{item.label}</option>
        
     ))}   


   </Select>

      <input type="checkbox" id="isPrime" name="isPrime" value="no"/>
      <label className="primeOnlyLabel"
      //  for="isPrime"
       > Prime only </label>
      <input type="checkbox" id="hasFreeShipping" name="hasFreeShipping" value="no"/>
      <label 
      // for="hasFreeShipping"
      > Free shipping </label>

    <div className="centerBtn">
      {/* <Button onClick={(e)=>(window.open(SendDataToUrl(e ,searchTerm, country, minPrice, maxPrice, sortBy, primeOnly, freeShipping),"__blank"))}  >Search</Button> */}
      
      <Button onClick={(ev)=>(ev ,openUrl(SendDataToUrl(e ,searchTerm, country, minPrice, maxPrice, sortBy, primeOnly, freeShipping) ))}>Search</Button>
      {/* <a target="_blank" href={(e)=>(SendDataToUrl(e ,searchTerm, country, minPrice, maxPrice, sortBy, primeOnly, freeShipping))}>Search</a> */}
      {/* <Button onClick={console.log( searchTerm + country + minPrice + maxPrice + sortBy + primeOnly + freeShipping)}  >Search</Button> */}
    </div>
  </Form>
  </RightSection>
</Section>
</>
);
}

 


export default Hero;