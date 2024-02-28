import { api } from "./root";

const request = api("https://restcountries.com/v3.1/");

export async function getCountry() {
  const filterList = ["Antarctica", "French Southern and Antarctic Lands", "Heard Island and McDonald Islands", "Saint Helena, Ascension and Tristan da Cunha"]
  const response = await request.get("/all/?fields=name,flags,idd");
  if (response.ok) {
    // filter data
    const filteredData = response.data.filter((data) => {
      if (!filterList.includes(data.name.common)) {
        return data;
      } 
    })

    const sortData = filteredData;
    // sort data
    sortData.sort((a, b) => {
      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
      
    })


    // remove unwanted data from objects
    const data = sortData.map((item) => {
      return {
        name: item.name.common,
        idd: `${item.idd.root}${ item.idd.suffixes[ 0 ].length > 3 && item.idd.suffixes[ 1 ]?.length < 4 ? item.idd.suffixes[ 1 ] : item.idd.suffixes[ 0 ]}`,
        flag: item.flags.svg
      }
    }) 
    
    return data;
  }
  else {
    return null;
  }

}