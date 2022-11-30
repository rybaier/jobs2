import axios from 'axios'
// import reverseGeocode from 'latlng-to-zip' DEPRECEATED
import { geo2zip } from 'geo2zip'
import qs from 'qs'
import { FETCH_JOBS, LIKE_JOBS } from './types'
import DeckScreen from '../screens/DeckScreen'
import store from '../store'

const JOB_ROOT__URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
    publisher: '1303284387458115',//publisher source from Lecture QA Sehajbir
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascipt'
}
const buildJobsURL = (zip) => {
    const query = qs.stringify({...JOB_QUERY_PARAMS, l: zip })
    return `${JOB_ROOT__URL}${query}`
}


export const fetchJobs = async (region, callback) => {
        try{
            let zip = await geo2zip(region)
            const url = buildJobsURL(zip._z)
            let result = await axios.get(url)
            // console.log(result.data) // use result.data.results to access data later
            store.dispatch({ type: FETCH_JOBS, payload: result.data })
            console.log('complete')
            
        } catch(error){
            console.log(error)
        }
    
} 

export const likeJob = (job) => {
    return {
        payload: job,
        type: LIKE_JOBS
    }
}

// DEPRECEATED BELOW
// const fetchJobs = (region) => async ( dispatch ) => {
    //when dispatch is in function it keeps it from being used on MapScreen, have no idea why
//     try {
//         let zip = await reverseGeocode(region)
//         const url = buildJobsURL(zip)
//         let { data } = await axios.get(url)
//         dispatch({ type: FETCH_JOBS, paylaod: data })
//         console.log(url)
//         console.log(data)
//     } catch (e) {
//         console.error(e)
//     }
// }

// found solution in QA on lecture 
// import axios from 'axios' 
// import {geo2zip} from 'geo2zip' 
// import {FETCH_JOBS} from './types' 
// export const fetchJobs = (region) =>{     
//     return async(dispatch) => {        
//          try {             
//             let zip = await geo2zip(region)        
//             let result = await axios.get(`http://api.indeed.com/ads/apisearch?publisher=1303284387458115&l=${zip}&q=javascript&radius=20&latlong=1&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2&format=json`)        
//             console.log(result.data)         } 
//             catch (error) {                     }             } }

