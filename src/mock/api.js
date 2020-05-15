import Mock from 'mockjs'
Mock.mock('/api/user/login',{
    "status": 0,
    "data": {
        "id": 12,
        "username": "admin",
        "email": "865216496@qq.com",
        "phone": null,
        "role": 0,
        "createTime": 14788456465646,
        "updataTime": 46554151453140
    }
});