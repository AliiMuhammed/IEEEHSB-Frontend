import React, { useState, useEffect } from "react";
import http from "./../../../../../../../../Helper/http";
import MainHeader from "../../../../../../../../Shared/components/MainHeader";
import "./style/family.css";
const Family = () => {
  return <section className="family-section"><MainHeader title={"Our Family"} paragraph={"Here You can add, update, and delete all family members."}/></section>;
};

export default Family;
