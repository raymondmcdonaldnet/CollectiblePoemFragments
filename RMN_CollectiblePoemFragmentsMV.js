/*:
 * @author Raymond McDonald
 * @plugindesc Implement collectibles with associated poem fragments that form a completed poem as you collect them!
 *
 * @param Enable Collectible Poem Fragments
 * @desc Enable or disable the plugin
 * @type boolean
 * @default false
 * @on Enable
 * @off Disable
 *
 * @param Hide uncollected collectibles
 * @desc Choose whether to hide uncollected collectibles or grey them out on the collectibles screen.
 * @type boolean
 * @default true
 * @on Hide uncollected collectibles
 * @off Show uncollected collectibles, greyed out
 *
 * @help
 * This plugin is licensed under Apache 2.0. See the GitHub page for more information:
 *
 * https://github.com/raymondmcdonaldnet/CollectiblePoemFragments
 */

// Plugin object setup
var RMN_CollectiblePoemFragments = RMN_CollectiblePoemFragments || {};

// I want to make really sure developers want the plugin enabled.
RMN_CollectiblePoemFragments.isEnabled = false;
// Hide or show uncollected collectibles on collectibles screen?
RMN_CollectiblePoemFragments.hideUncollectedCollectibles = true;

// The scene used to see collectibles
RMN_CollectiblePoemFragments.collectiblesScene = function() {
	this.initialize.apply(this, arguments);
};
RMN_CollectiblePoemFragments.collectiblesScene.prototype = Object.create(Scene_MenuBase.prototype);
RMN_CollectiblePoemFragments.collectiblesScene.prototype.constructor = RMN_CollectiblePoemFragments.collectiblesScene;

RMN_CollectiblePoemFragments.collectiblesScene.prototype.initialize = function() {
	Scene_MenuBase.prototype.initialize.call(this);
};

RMN_CollectiblePoemFragments.collectiblesScene.prototype.create = function() {
	Scene_MenuBase.prototype.create.call(this);
	this.createWindowLayer();
};

// Add command to navigate to collectibles scene
RMN_CollectiblePoemFragments.Window_MenuCommand_addOriginalCommandsAlias = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
	RMN_CollectiblePoemFragments.Window_MenuCommand_addOriginalCommandsAlias.call(this);
	this.addCommand("Collectibles", "collectibles", true, null);
};

RMN_CollectiblePoemFragments.Scene_Menu_createCommandWindowAlias = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
	RMN_CollectiblePoemFragments.Scene_Menu_createCommandWindowAlias.call(this);
	this._commandWindow.setHandler("collectibles", RMN_CollectiblePoemFragments.commandCollectibles.bind(this));
};

RMN_CollectiblePoemFragments.commandCollectibles = function() {
	SceneManager.push(RMN_CollectiblePoemFragments.collectiblesScene);
};

// Collectibles scene windows
