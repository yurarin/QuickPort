const { execSync } = require("child_process");
const mode = process.argv[2];
const port = process.argv[3];
const hostIp = process.argv[4];
const wslIp = process.argv[5];

switch (mode) {
    case "add":
        const add = `netsh.exe interface portproxy add v4tov4 listenaddress=${hostIp} listenport=${port} connectaddress=${wslIp} connectport=${port}`;
        execSync(add, {"shell": "powershell.exe"}).toString();   
        break;

    case "show":
        const show = "netsh.exe interface portproxy show v4tov4";
        const showResult = execSync(show, {"shell": "powershell.exe"}).toString();
        console.log(showResult);
        break;

    case "remove":
        const remove = `netsh.exe interface portproxy delete v4tov4 listenport=${port} listenaddress=${hostIp}`;
        execSync(remove, {"shell": "powershell.exe"}).toString();
        break;
    
    default:
        console.log(
            `
            エラー: 予約されているコマンドを確認できません。\n
            コマンドが正しくないか、正常に処理できませんでした...
            お手数ですが再度引数の確認 または、実行環境の確認をお願いします。
            `
        )
        break;
} 