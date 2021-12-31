import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '878b4fcbf9mshe6ea7a8848b8216p19e73cjsnac01723d0799'
          }
            
        
    })
    return data;
}