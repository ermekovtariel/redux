import { uuid } from "uuid/dist/v4";

const initialState = [
    {
        id: 1,
        name: 'Tariel',
        duration: '2 hours'
    },
    {
        id: 2,
        name: 'Tora',
        duration: '5 hours'
    }
];

export const activitiesReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'CREATE_ACTIVITY':
            return [...state, {
                id: uuid,
                name: payload.name,
                duration: payload.duration,
            }]
        default:
            return state
    }

    return state;
}