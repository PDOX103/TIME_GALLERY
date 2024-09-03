const backendDomain = "https://time-gallery-backend.vercel.app";

const SummaryApi = {
    signUP: {
        url: `${backendDomain}/api/signup`, 
        method: "post"
    },
    signIN: {
        url: `${backendDomain}/api/signin`, 
        method: "post"
    },
    current_user: {
        url: `${backendDomain}/api/user-details`, // Correct endpoint
        method: "get"
    },
    updateUserDetails: {
        url: `${backendDomain}/api/userupdate-details`,
        method: 'PUT'
    },
    signOut: {
        url: `${backendDomain}/api/signout`,
        method: "post"
    }
};


export default SummaryApi;
