import * as types from '../constants/ActionTypes';

var initialState = [
    {
        "_id": "5f1e351a32f32a2a70ae2fd6",
        "title": "Lỗ hổng khiến đại dịch Covid-19 có nguy cơ trở lại Việt Nam",
        "content": "Điều đáng lo ngại là cho đến nay, mặc dù ca lây nhiễm đầu tiên sau 99 ngày không có ca nhiễm mới từ cộng đồng đã tiếp xúc với hàng trăm người nhưng cơ quan y tế, cơ quan quản lý vẫn chưa thể xác định được ca nhiễm có số 416 này lây nhiễm từ ai. Nói đơn giản là đến nay, vẫn chưa thể tìm được F0.",
        "view": 0,
        "thumb" : "newpost.png",
        "idUser": "5f1e3341ea74861e18ece806",
        "createdAt": "2020-07-27T01:59:54.748Z",
        "updatedAt": "2020-07-27T01:59:54.748Z",
        "__v": 0
    },
    {
        "_id": "5f1e355d32f32a2a70ae2fd7",
        "title": "C.Ronaldo lập công, Juventus chính thức vô địch Serie A",
        "content": "Juventus đã có cơ hội lên ngôi vô địch Serie A ngay ở vòng đấu trước nhưng họ đã lỡ hẹn khi để thua 1-2 trước Udinese. Tuy nhiên, tới vòng đấu này, họ không thể trì hoãn niềm vui thêm được nữa.",
        "view": 0,
        "thumb" : "image-relate-post.png",
        "idUser": "5f1e3341ea74861e18ece806",
        "createdAt": "2020-07-27T02:01:01.518Z",
        "updatedAt": "2020-07-27T02:01:01.518Z",
        "__v": 0
    },
    {
        "_id": "5f1e357f32f32a2a70ae2fd8",
        "title": "Nỗi buồn tuổi xế chiều của vợ chồng thương binh nghèo",
        "content": "Những ngày cuối tháng 7, chúng tôi đến thăm làng thương binh nặng tại ấp 1 xã Nhị Thành, huyện Thủ Thừa, tỉnh Long An. Nơi đây có 15 thương binh đang sinh sống và đều là những thương binh nặng. Người bị cụt hai chân, người bị cụt tay, người bị chấn thương sọ não, người bị thương dẫn đến liệt nửa người...",
        "view": 0,
        "thumb" : "image-relate-post2.png",
        "idUser": "5f1e3341ea74861e18ece806",
        "createdAt": "2020-07-27T02:01:35.844Z",
        "updatedAt": "2020-07-27T02:01:35.844Z",
        "__v": 0
    },
    {
        "_id": "5f1e359f32f32a2a70ae2fd9",
        "title": "Văn Hậu khoe thân hình vạm vỡ giữa biển, chờ ngày về nước",
        "content": "Như đã biết, Văn Hậu sẽ lên chuyến bay nhân đạo từ Pháp trở về Việt Nam cùng với 275 công dân khác. Dự kiến, chuyến bay chở Văn Hậu sẽ hạ cánh ở sân bay Vân Đồn (Quảng Ninh) vào lúc 06h35 ngày 2/8 theo giờ Việt Nam. Sau đó, hậu vệ sinh năm 1999 sẽ tiến hành cách ly 14 ngày theo đúng quy định.",
        "view": 0,
        "thumb" : "image-relate-post3.png",
        "idUser": "5f1e3341ea74861e18ece806",
        "createdAt": "2020-07-27T02:02:07.713Z",
        "updatedAt": "2020-07-27T02:02:07.713Z",
        "__v": 0
    }
];

const post = (state = initialState,action)=>{
    switch(action.type){
        case types.GET_LIST_POST: 
            return [...state];
        case types.FETCH_DATA_POST: 
            state = action.posts;
            return [...state];
        default : 
            return [...state];
    }
}
export default post;