

export const switchToFew = (active) => {
    return {
        type: "ACTIVE_FEW",
        payload: {active}
    };
}

export const switchToMore = (active) => {
    return {
        type: "ACTIVE_MORE",
        payload: {active}
    };
}

