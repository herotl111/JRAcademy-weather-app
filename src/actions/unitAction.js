// export let TO_CELSIUS = "TO_CELSIUS";
// export let TO_FAHRENHEIT= "TO_FAHRENHEIT";

const switchUnit = (unit) => {
    return {
        type: "SWITCH_UNIT",
        payload: {unit}
    };
}

export default switchUnit;
