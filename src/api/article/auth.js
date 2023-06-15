import service from '@/utils/request/index.js';

export function GetAuth(Signature) {
    let params = new URLSearchParams()
    params.set('signature', Signature);
    return service({
        url: `/auth/signature`,
        method: 'POST',
        data: params.toString()
    })
}

export function Auth(certificate) {
    let params = new URLSearchParams()
    params.set('certificate', certificate);
    return service({
        url: `/auth/certificate`,
        method: 'POST',
        data: params
    })
}
