import createRequest from "./createRequest";

export function update(callback) {
    createRequest({
        url: "http://localhost:7070/notes",
        data: {
            method: "GET",
        },
        callback: callback,
    });
}

export function addCard(content, callback) {
    createRequest({
        url: "http://localhost:7070/notes",
        data: {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: content }),
        },
        callback: callback,
    });
}

export function deleteCard(id, callback) {
    createRequest({
        url: "http://localhost:7070/notes/" + id,
        data: {
            method: "DELETE",
        },
        callback: callback,
    });
}
