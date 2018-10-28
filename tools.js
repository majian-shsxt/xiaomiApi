exports.success = (result) => {
    return {
        status: 'success',
        result: result
    }
};

exports.error = (message) => {
    return {
        status: 'error',
        result: message
    }
};

// exports.getIndex = (id) => {
//     for(let i = 0; i < devices.length; i++) {
//         if (devices[i].id == id)
//             return i;
//     }
//     return 'wrong id';
// };