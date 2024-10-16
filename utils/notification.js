import chalk from "chalk";

async function notification(message, time, color = "green") {
    return new Promise((res) => {
        if (time !== 0) {
            setTimeout(() => {
                console.log(chalk[color](`${message}`));
                res()
            }, time)
        }
        else {
            console.log(chalk[color](`${message}`));
            res()
        }
    })

}
export default notification