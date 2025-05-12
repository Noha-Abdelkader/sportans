"use client";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  subTitle: string;
  h2: string;
  p1?: string;
  p2?: string;
  btn?: string;
  action?:string
};

function MainComponent(props: Props) {
  
  function handleClick(){
    if(props.action){
      window.location.href = props.action
    }else{
      window.location.href = '/contact'
    }
  }  return (
    <div className="space-y-3">
      <span className="sub-title">{props.subTitle}</span>
      <h2 className="font-semibold  text-xl">{props.h2}</h2>
      {props.p1 && <p className="text-dark-200 text-sm">{props.p1}</p>}
      {props.p2 && <p className="text-dark-200 text-sm">{props.p2}</p>}
      {props.btn && <Button variant={"before-effect"}
      onClick={handleClick}
      >{props.btn}</Button>}
    </div>
  );
}

export default MainComponent;
