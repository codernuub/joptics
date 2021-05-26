const resource = window.location.pathname.split('/')[2];
const form = document.querySelector('form');
const lists = document.querySelector('.lists');
const state = {
    lists: []
}
//Fetch all data
fetch(`/api/v1/${resource}`, {
    method: "GET",
})
    .then(res => res.json())
    .then(res => {
        if (res.status === "success") {
            state["lists"] = res.data[resource];
            appendLists(state["lists"]);
            return;
        }
    })
    .catch(err => console.log(err))


async function createItem(item) {
    const res = await fetch(`/api/v1/${resource}`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(item)
    })
    return res.json();
}

function deleteItem(itemId) {
    fetch(`/api/v1/${resource}/${itemId}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(res => {
           
            if (res.status === "success") {
                window.location.reload();
                return;
            }
            console.log(res);
        }).catch(err => console.log(err.message))
}

form.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const input = e.target.elements.name.value;
        const res = await createItem({ name: input });
        if (res.status === "success") {
            window.location.reload();
            return;
        }
        console.log(res);
    } catch (err) {
        console.log(err)
    }
})

function appendLists(data) {
    let htmlLists = "";
    data.forEach(list => htmlLists += buildHtmlList(list));
    lists.innerHTML = htmlLists;
}

function buildHtmlList(listData) {
    return ` <li>
    <p><span>${listData.name}</span><br /><span>${new Date(listData.createdAt).toLocaleDateString()}</span></p>
    <span onclick="deleteItem('${listData._id}')"><i class="fas fa-window-close"></i></span>
</li>`
}