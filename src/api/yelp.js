import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers:{
        Authorization: 
        'Bearer mR52djBIP4H4k6agyuQ8qkl0KgNnoN_SmVG5iw8KoLaYhP25F-EP0g7mr61Umqf2VygwuHQjbu3Sh2-oEm-uxbXcfWanU7timV89rPsrSWDwn1KeaHKw2Bi4sqlUXnYx'
    }
});