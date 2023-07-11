import service from "@/utils/request";


export function getSearchResult(keyword, pageSize) {
    return service({
        url: `/article/search?keyword=${keyword}&pageSize=${pageSize}`,
        method: 'GET'
    })
}

export function getArticleBriefList(pageNumber, pageSize) {
    return service({
        url: `/article/briefList?pageNumber=${pageNumber}&pageSize=${pageSize}`,
        method: 'GET'
    })
}

export function getPageCount(size) {
    return service({
        url: `/article/pageCount/${size}`,
        method: 'GET'
    })
}

export function getArticle(id) {
    return service({
        url: `/article/info/${id}`,
        method: 'GET'
    })
}


// Admin


export function getEditInfo(id) {
    return service({
        url: `/article/edit/${id}`,
        method: 'GET',
    })
}

export function addArticle(article) {
    return service({
        url: '/article/info',
        method: 'POST',
        data: article
    })
}

export function updateArticle(article) {
    return service({
        url: '/article/info',
        method: 'PUT',
        data: article
    })
}

export function deleteArticle(id) {
    return service({
        url: `/info/${id}`,
        method: 'DELETE',
    })
}