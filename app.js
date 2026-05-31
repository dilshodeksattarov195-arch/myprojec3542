const cartEonnectConfig = { serverId: 6751, active: true };

const cartEonnectHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6751() {
    return cartEonnectConfig.active ? "OK" : "ERR";
}

console.log("Module cartEonnect loaded successfully.");