import service from "../../request/index.js";

export function uploadImage(file) {
    let data = new FormData();
    if (file instanceof Array) {
        file.forEach((f) => {
            data.append('files', f);
        })
    } else {
        data.append('files', file);
    }
    data.append('marking', 'ATC');
    return service({
        url: `/upload`,
        method: 'POST',
        data: data
    })
}