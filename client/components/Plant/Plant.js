/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import './Plant.scss';
import axios from 'axios';

const Plant = (props) => {
  console.log('This is props', props);
  // state will be plant details
  // need to import plant img url somehow
  const {
    common_name,
    scientific_name,
    image_url,
    id,
    slug,
    year,
    bibliography,
    author,
    status,
    rank,
    family_common_name,
    genus_id,
    family,
    genus,
  } = props.location.userPlant;
  const [details, setDetails] = useState({
    commonName: common_name,
    scientificName: scientific_name,
    flowerColor: '',
    avgHeight: '',
    light: '',
    soilNutrients: '',
    soilHumidity: '',
    minPrecipitation: '',
    maxPrecipitation: '',
    growthMonths: '',
    bloomMonths: '',
    slug,
    plantId: id,
    year,
    bibliography,
    author,
    status,
    rank,
    familyCommonName: family_common_name,
    genus_id,
    image: image_url,
    family,
    genus,
  });
  const {
    commonName,
    scientificName,
    flowerColor,
    avgHeight,
    light,
    soilNutrients,
    soilHumidity,
    minPrecipitation,
    maxPrecipitation,
    growthMonths,
    bloomMonths,
    plantId,
  } = details;

  // const plantId = 'a number from url param - coming from plant item component';
  // useEffect(() => {
  //   fetch(`/api/userplants/${plantId}`) // '/api/useplants/:id'
  //     .then((resp) => resp.json())
  //     .then((data) => setDetails(data));
  // },[]);

  useEffect(() => {
    console.log('component mounted');
    const fetchData = async (e) => {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/122263?token=PM3BHHsn1BYggmzwVudKgtHVtS5yD-szFUEvt-VQ06I&q=${plantId}`
      );
      let itemInfo = response.data.data;
      console.log('itemInfo', itemInfo);

      // setPlants(response.data.data);
    };
    fetchData();
  }, []);

  // on mount: fetch plant details from database using passed in props as url search param? plant name??

  const savePlantHandler = () => {
    console.log(props);
    const plant = {};
    plant.commonName = props.location.userPlant.common_name;
    plant.scientificName = props.location.userPlant.scientific_name;
    plant.image_url = props.location.userPlant.img_url;

    fetch('/api/plantInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    });
  };

  return (
    <div id='outerDiv2'>
      <div id='innerDiv2'>
        <img src={image_url} />
      </div>
      <div id='innerDiv2'>
        Common Name: {commonName}
        <br></br>
        Scientific Name: {scientificName}
        <br></br>
        Flower Color:{flowerColor}
        <br></br>
        Average Height: {plantId}
        <br></br>
        Light: {light}
        <br></br>
        Soil Nutrients: {soilNutrients}
        <br></br>
        Soil Humidity: {soilHumidity}
        <br></br>
        Minimun Precipitation: {minPrecipitation}
        <br></br>
        Maximun Precipitation: {maxPrecipitation}
        <br></br>
        Growth Months:{growthMonths}
        <br></br>
        Bloom Months: {bloomMonths}
        <br></br>
      </div>
      <button id='savePlant' onClick={savePlantHandler}>
        Save Plant
      </button>
    </div>
  );
};

export default Plant;
