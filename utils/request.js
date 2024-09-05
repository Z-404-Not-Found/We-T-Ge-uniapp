export function request(config = {}) {
    let {
        url,
        method = "GET",
        data = {},
        header = {},
    } = config;
    return new Promise((resolve, reject) => {
        uni.request({
            url,
            method,
            data,
            header,
            success:res => {
                resolve(res.data)
            },
            fail:err => {
                reject(err)
            }
        })
    })
}