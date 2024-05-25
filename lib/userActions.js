export async function UploadPost(post) {

    const res = await fetch('http://localhost:3000/api/user/post', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'access-token': localStorage.getItem('token'),
        },
    })

    if (res.error) {
        return Error(res.error);
    }


}

export async function UploadImage() {

}