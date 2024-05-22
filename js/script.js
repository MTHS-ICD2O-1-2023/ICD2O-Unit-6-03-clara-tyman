// Copyright (c) 2024 Clara Tyman All rights reserved
//
// Created by: Clara Tyman
// Created on: May 2024
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("ICD2O-Unit-6-03-clara-tyman/sw.js", {
    scope: "/ICD2O-Unit-6-03-clara-tyman /",
  })
}

"use strict"

async function getTemperature() {
  try {
    const resultJSON = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
    const jsonData = await resultJSON.json()
    //console.log(jsonData)
    const firstDataSet = jsonData[0]
    const textDataSet = firstDataSet.text
    console.log(textDataSet)
  } catch (error) {
    console.error(error)
  }
}