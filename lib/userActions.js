export async function UploadPost(post) {
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('content', post.content);
    formData.append('image', post.image);
    formData.append('user_id', localStorage.getItem('user_id'));


    console.log("formData: ", formData)

    const res = await fetch('http://localhost:3000/api/user/post', {
        method: 'POST',
        body: formData,
        headers: {
            'access-token': localStorage.getItem('token'),
        },
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
    }

    return await res.json();
}