// /:id는 express에서 자동으로 바뀌는 값이라고 인지하고 처리하는 것이다.

//Global
const HOME      = "/";
const JOIN      = "/join";
const LOGIN     = "/login";
const LOGOUT    = "/logout";
const SEARCH    = "/search";

//Users
const USERS             = "/users";
const USERS_DETAIL      = "/:id";
const EDIT_PROFILE      = "/edit-profile";
const CHANGE_PASSWORD   = "/change-password";

//Video
const VIDEOS        = "/videos";
const UPLOAD        = "/upload";
const VIDEO_DETAIL  = "/:id";
const EDIT_VIDEO    = "/:id/edit";
const DELETE_VIDEO  = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USERS_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS, 
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;