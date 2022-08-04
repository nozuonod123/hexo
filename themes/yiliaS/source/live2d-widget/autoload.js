// 注意：live2d_path 参数应使用绝对路径
const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";
//const live2d_path = "/live2d-widget/";
const live2d_path = "https://cdn.jsdelivr.net/gh/PFiS1737/live2d-widget@latest/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
@@ -11,6 +10,7 @@ function loadExternalResource(url, type) {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
			tag.id = "live2d_css";
		}
		else if (type === "js") {
			tag = document.createElement("script");
@@ -26,14 +26,15 @@ function loadExternalResource(url, type) {

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
	// "768"为最低显示宽度
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "waifu_left.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]).then(() => {
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			//apiPath: "https://live2d.fghrsh.net/api/",
			// apiPath: "https://live2d.fghrsh.net/api/",
			cdnPath: "https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"
		});
	});
