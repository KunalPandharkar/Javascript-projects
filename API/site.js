

const get_btn = document.getElementById("get_btn")

const createbtn = document.getElementById("createbtn")

const putbtn = document.getElementById("putbtn")

const patchbtn = document.getElementById("patchbtn")

const deletebtn = document.getElementById("deletebtn")


let getpost = async (ApiEndpoint) => {
    try {
        const response = await fetch(ApiEndpoint)
        const data = await response.json()
        if (response.ok) {
            return data
        }
    } catch (error) {
        console.log("error is", error)
    }

}



get_btn.addEventListener("click", async () => {


    try {

        const data = await getpost("https://jsonplaceholder.typicode.com/posts/")

        const tablebody = document.getElementById("tablebody")

        let str = ""
        data.forEach(element => {
            str += `
            <tr>
            <td>${element.id}</td>
            <td>${element.userId}</td>
            <td>${element.title}</td>
           </tr>`
        });

        tablebody.innerHTML = str
    } catch (error) {
        console.log("erros ", error)
    }

})


let createpost = async (post) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        if (response.status === 201) {
            const data = await response.json()
            return data
        } else {
            throw Error("Error Occured Status Code : ", response.status)
        }
    } catch (error) {
        console.log("erros is", error)
    }
}

let updatepost = async (post, id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })

        if (response.status === 200) {
            const data = await response.json()
            return data
        } else {
            throw Error("Error Occured Status Code : ", response.status)
        }
    } catch (error) {
        console.log("erros is", error)
    }
}

let patchpost = async (post, id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })

        if (response.status === 200) {
            const data = await response.json()
            return data
        } else {
            throw Error("Error Occured Status Code : ", response.status)
        }
    } catch (error) {
        console.log("erros is", error)
    }
}

let deletepost = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",
        })
        if (response.status === 200) {
            const data = await response.json()
            return data
        } else {
            throw Error("Error Occured Status Code : ", response.status)
        }
    } catch (error) {
        console.log("erros is", error)
    }
}

createbtn.addEventListener("click", async () => {
    post = {
        userId: 1,
        title: "Kunal Pandharkar Post",
        body: "hello there this is the body"
    }

    console.log(await createpost(post))

})


putbtn.addEventListener("click", async () => {
    post = {
        title: "updated Kunal Pandharkar Post",
        body: "updated hello there this is the body"
    }

    console.log(await updatepost(post, 1))
})

patchbtn.addEventListener("click", async () => {
    post = {
        title: "Patch Kunal Pandharkar Post",
    }

    console.log(await patchpost(post, 1))
})

deletebtn.addEventListener("click", async () => {
    console.log(await deletepost(1))
})