import axios from 'axios';

export const RECEIVE_CHAPTER = 'RECEIVE_CHAPTER';

function receiveChapter(data) {
    return {
        type: RECEIVE_CHAPTER,
        data
    }
}

export function fetchChapter(chapterId) {
    return dispatch => {
        axios.get(`/chapters/${chapterId}`)
            .then(response => {
                dispatch(receiveChapter(response.data.data));
            })
    }
}