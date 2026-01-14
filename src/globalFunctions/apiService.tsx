import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../components/string";

export const ApiServicePost = async (api: string, params: string) => {
      const token = await AsyncStorage.getItem('userToken');

  const resp = await fetch(API_URL + api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      accept: '*/*',
      Authorization: `Bearer ${token}`,
    },
    body: params,
  });
  const data = await resp.json();

  return data;
};




export const ApiServiceGet = async (api:string) => {
  const accessToken:any = await AsyncStorage.getItem('userToken');
  const data = await fetch(API_URL + api, {
    method: 'POST',
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(async response => {
        console.log(response,'response---');
        
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    })
    .then(value => {
      return value;
    })
    .catch(error => {
    });

  return data;
};

export const ApiServiceGetWParam = async (api:string, params:any) => {
  let Ack_Token = await AsyncStorage.getItem('userToken');
  const apiUrl = `${API_URL}${api}?${params}`;
  const resp = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      accept: '*/*',
      Authorization: `Bearer ${Ack_Token}`,
    },
  });
  const data = await resp.json();
  return data;
};





