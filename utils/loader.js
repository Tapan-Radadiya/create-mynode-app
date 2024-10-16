const loadingArray = ["☁️🚀    🖥️", "☁️ 🚀   🖥️", "☁️  🚀  🖥️", "☁️   🚀 🖥️", "☁️    🚀🖥️"];
export const loaderEffect = () => {
    let index = 0
    const loadingInterval = setInterval(() => {
        process.stdout.write("\r" + loadingArray[index++])
        index = index % loadingArray.length
    }, 250)

    return () => {
        clearInterval(loadingInterval);
        process.stdout.write("\r");
    };
}