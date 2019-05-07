
const item = (itemNum) => {
    return {
        type: "SWITCH_ITEM",
        payload: {itemNum}
    };
}

export default item;