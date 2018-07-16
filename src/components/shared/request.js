import axios from 'axios';


const getItem = (page, career, purpose, type, base) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: '/api/getitems',
            data: {
                page: page,
                adcareerID: career,
                adpurposeID: purpose,
                adtypeID: type,
                adbaseID: base,
            }
        }).then((data) => {
            resolve(data.data);
        }).catch(err => {
            reject(err);
        })
    })
}

export default getItem;