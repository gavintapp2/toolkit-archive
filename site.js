window.mwPerformance=(window.performance&&performance.mark)?performance:{mark:function(){}};window.mwNow=(function(){var perf=window.performance,navStart=perf&&perf.timing&&perf.timing.navigationStart;return navStart&&typeof perf.now==='function'?function(){return navStart+perf.now();}:function(){return Date.now();};}());window.isCompatible=function(str){var ua=str||navigator.userAgent;return!!((function(){'use strict';return!this&&!!Function.prototype.bind&&!!window.JSON;}())&&'querySelector'in document&&'localStorage'in window&&'addEventListener'in window&&!(ua.match(/MSIE 10|webOS\/1\.[0-4]|SymbianOS|Series60|NetFront|Opera Mini|S40OviBrowser|MeeGo|Android.+Glass|^Mozilla\/5\.0 .+ Gecko\/$|googleweblight/)||ua.match(/PlayStation/i)));};(function(){var NORLQ,script;if(!isCompatible()){document.documentElement.className=document.documentElement.className.replace(/(^|\s)client-js(\s|$)/,'$1client-nojs$2');NORLQ=window.NORLQ||[];while(NORLQ.length){NORLQ.shift()();}window.NORLQ={push:
function(fn){fn();}};window.RLQ={push:function(){}};return;}function startUp(){mw.config=new mw.Map(true);mw.loader.addSource({"local":"/load.php"});mw.loader.register([["site","00ztgzd",[1]],["site.styles","0fgk6bv",[],"site"],["noscript","01mpe3c",[],"noscript"],["filepage","1ts6m9r"],["user.groups","1xsdcix",[5]],["user","042qzp3",[6],"user"],["user.styles","1qvyur9",[],"user"],["user.defaults","0xmhbap"],["user.options","0r5ungb",[7],"private"],["user.tokens","0c1bg6f",[],"private"],["mediawiki.language.data","1pox0t6",[177]],["mediawiki.skinning.elements","0aoxkof"],["mediawiki.skinning.content","1y0ryaw"],["mediawiki.skinning.interface","0u1rv1r"],["mediawiki.skinning.content.parsoid","138rhko"],["mediawiki.skinning.content.externallinks","0m8p7kh"],["jquery.accessKeyLabel","0463jll",[22,130]],["jquery.async","1v6q43w"],["jquery.byteLength","172jypf",[131]],["jquery.byteLimit","1xsdcix",[37]],["jquery.checkboxShiftClick","0l6hmd0"],["jquery.chosen","18ccq4v"],["jquery.client",
"01q7e4n"],["jquery.color","1j73rlq",[24]],["jquery.colorUtil","02w2o9h"],["jquery.confirmable","0gyie2k",[178]],["jquery.cookie","0tc9edd"],["jquery.expandableField","1yebp2x"],["jquery.farbtastic","1yv11t4",[24]],["jquery.footHovzer","15i2cb9"],["jquery.form","1sdawqw"],["jquery.fullscreen","0zp2sz8"],["jquery.getAttrs","0n4nn0b"],["jquery.hidpi","1f1btw1"],["jquery.highlightText","17gj3e1",[130]],["jquery.hoverIntent","0ixmku0"],["jquery.i18n","095crj5",[176]],["jquery.lengthLimit","0svmps1",[131]],["jquery.localize","0wdrpyi"],["jquery.makeCollapsible","174fpsw"],["jquery.mockjax","16wy3cz"],["jquery.mw-jump","1lyyy4h"],["jquery.qunit","1qzf97t"],["jquery.spinner","0twtag4"],["jquery.jStorage","1domnks"],["jquery.suggestions","0arwid7",[34]],["jquery.tabIndex","0zubrae"],["jquery.tablesorter","0e4plmd",[130,179]],["jquery.textSelection","197933k",[22]],["jquery.throttle-debounce","0c4gn31"],["jquery.xmldom","1pwa8ia"],["jquery.tipsy","14gd5k8"],["jquery.ui.core","099haqs",[53],
"jquery.ui"],["jquery.ui.core.styles","0666uu8",[],"jquery.ui"],["jquery.ui.accordion","0mf6fg9",[52,72],"jquery.ui"],["jquery.ui.autocomplete","0z6oz8c",[61],"jquery.ui"],["jquery.ui.button","1uuzed1",[52,72],"jquery.ui"],["jquery.ui.datepicker","10frr99",[52],"jquery.ui"],["jquery.ui.dialog","1i48uhx",[56,59,63,65],"jquery.ui"],["jquery.ui.draggable","1op6yi1",[52,62],"jquery.ui"],["jquery.ui.droppable","06b3amc",[59],"jquery.ui"],["jquery.ui.menu","1twf15j",[52,63,72],"jquery.ui"],["jquery.ui.mouse","0w4tes1",[72],"jquery.ui"],["jquery.ui.position","0cyxjim",[],"jquery.ui"],["jquery.ui.progressbar","0x71isd",[52,72],"jquery.ui"],["jquery.ui.resizable","19v3n1w",[52,62],"jquery.ui"],["jquery.ui.selectable","0hjgv27",[52,62],"jquery.ui"],["jquery.ui.slider","1rcg8b3",[52,62],"jquery.ui"],["jquery.ui.sortable","0zbx03r",[52,62],"jquery.ui"],["jquery.ui.spinner","05e9893",[56],"jquery.ui"],["jquery.ui.tabs","04xm1yw",[52,72],"jquery.ui"],["jquery.ui.tooltip","1l85ymo",[52,63,72],
"jquery.ui"],["jquery.ui.widget","0h08d3t",[],"jquery.ui"],["jquery.effects.core","1k0zp6s",[],"jquery.ui"],["jquery.effects.blind","15gsrkx",[73],"jquery.ui"],["jquery.effects.bounce","11xlhyn",[73],"jquery.ui"],["jquery.effects.clip","18h9kp2",[73],"jquery.ui"],["jquery.effects.drop","1yf27s2",[73],"jquery.ui"],["jquery.effects.explode","0csu00v",[73],"jquery.ui"],["jquery.effects.fade","00j597f",[73],"jquery.ui"],["jquery.effects.fold","0uq2f3j",[73],"jquery.ui"],["jquery.effects.highlight","06spabz",[73],"jquery.ui"],["jquery.effects.pulsate","0ktt7v7",[73],"jquery.ui"],["jquery.effects.scale","10tgs6b",[73],"jquery.ui"],["jquery.effects.shake","0yutnto",[73],"jquery.ui"],["jquery.effects.slide","1c7erlf",[73],"jquery.ui"],["jquery.effects.transfer","1qu17zr",[73],"jquery.ui"],["json","1xsdcix"],["moment","08a5zkf",[174]],["mediawiki.apihelp","0ybtg0g"],["mediawiki.template","165woj8"],["mediawiki.template.mustache","1e2fvo0",[90]],["mediawiki.template.regexp","18h04lw",[90]],[
"mediawiki.apipretty","06tts3u"],["mediawiki.api","0shrdlz",[148,9]],["mediawiki.api.category","0srcn1v",[136,94]],["mediawiki.api.edit","12zwa4g",[146]],["mediawiki.api.login","15kd1nt",[94]],["mediawiki.api.options","1pvlr57",[94]],["mediawiki.api.parse","1wv9j81",[94]],["mediawiki.api.upload","0cjd9sd",[96]],["mediawiki.api.user","09wfbnd",[94]],["mediawiki.api.watch","0v6ggxv",[94]],["mediawiki.api.messages","0h1dy24",[94]],["mediawiki.api.rollback","1d5l6qb",[94]],["mediawiki.content.json","1cgp74m"],["mediawiki.confirmCloseWindow","0oqhqkc"],["mediawiki.debug","1a8ugq4",[29,273]],["mediawiki.diff.styles","13ntlgz"],["mediawiki.feedback","1dgyx84",[136,124,277]],["mediawiki.feedlink","16flbam"],["mediawiki.filewarning","16kwsff",[273]],["mediawiki.ForeignApi","02b2nzv",[113]],["mediawiki.ForeignApi.core","0ef7fgb",[94,269]],["mediawiki.helplink","0jh2d4m"],["mediawiki.hidpi","0wycvxr",[33],null,null,"return'srcset'in new Image();"],["mediawiki.hlist","1kltf1w"],[
"mediawiki.htmlform","12vui9c",[37,130]],["mediawiki.htmlform.checker","138eyzu",[49]],["mediawiki.htmlform.ooui","1turcr4",[273]],["mediawiki.htmlform.styles","0660boy"],["mediawiki.htmlform.ooui.styles","1jfwgbb"],["mediawiki.icon","0h2zn7k"],["mediawiki.inspect","1nuppge",[130,131]],["mediawiki.messagePoster","0b4r5ma",[112]],["mediawiki.messagePoster.wikitext","07asrqj",[96,124]],["mediawiki.notification","06dxyet",[148,156]],["mediawiki.notify","1bxc941"],["mediawiki.notification.convertmessagebox","1uur930",[126]],["mediawiki.notification.convertmessagebox.styles","1pv8j2l"],["mediawiki.RegExp","0sfx41l"],["mediawiki.String","15ofhvr"],["mediawiki.pager.tablePager","1pxd8ry"],["mediawiki.searchSuggest","01jiyt1",[32,45,94]],["mediawiki.sectionAnchor","14qshad"],["mediawiki.storage","162vhok"],["mediawiki.Title","1h7l55i",[131,148]],["mediawiki.Upload","1ckoxit",[100]],["mediawiki.ForeignUpload","1utb8vb",[112,137]],["mediawiki.ForeignStructuredUpload.config","0msydx9"],[
"mediawiki.ForeignStructuredUpload","1wuuyjk",[139,138]],["mediawiki.Upload.Dialog","0brne9k",[142]],["mediawiki.Upload.BookletLayout","0kqu0sv",[136,137,178,266,88,275,277]],["mediawiki.ForeignStructuredUpload.BookletLayout","0c01hpp",[140,142,103,182,256,251]],["mediawiki.toc","0irerk5",[152]],["mediawiki.Uri","1ji2u3x",[148,92]],["mediawiki.user","10wgwuj",[101,135,8]],["mediawiki.userSuggest","0fxpz58",[45,94]],["mediawiki.util","1hwa75w",[16,127]],["mediawiki.viewport","05daxkq"],["mediawiki.checkboxtoggle","0nqieex"],["mediawiki.checkboxtoggle.styles","1xzg55y"],["mediawiki.cookie","0sx7dcr",[26]],["mediawiki.toolbar","0ijjz93",[48]],["mediawiki.experiments","0gjtk14"],["mediawiki.editfont.styles","0lrv86i"],["mediawiki.visibleTimeout","1moewlc"],["mediawiki.action.delete","0kzn5eo",[37,273]],["mediawiki.action.delete.file","16cskax",[37]],["mediawiki.action.edit","0bmf8d8",[48,160,94,155,254]],["mediawiki.action.edit.styles","1fqa9r6"],["mediawiki.action.edit.collapsibleFooter",
"1bbxd5q",[39,122,135]],["mediawiki.action.edit.preview","050b19l",[43,48,94,108,178,273]],["mediawiki.action.history","07zq82d"],["mediawiki.action.history.styles","0rayj8f"],["mediawiki.action.view.dblClickEdit","0kbs6o6",[148,8]],["mediawiki.action.view.metadata","0q0kup1",[173]],["mediawiki.action.view.categoryPage.styles","1nu0k1i"],["mediawiki.action.view.postEdit","130ica7",[178,126]],["mediawiki.action.view.redirect","0xzedqi",[22]],["mediawiki.action.view.redirectPage","15gwdl3"],["mediawiki.action.view.rightClickEdit","13ajiq0"],["mediawiki.action.edit.editWarning","1omaysf",[48,106,178]],["mediawiki.action.view.filepage","149gqwp"],["mediawiki.language","1um2hvw",[175,10]],["mediawiki.cldr","1wbkw8y",[176]],["mediawiki.libs.pluralruleparser","183fods"],["mediawiki.language.init","07egz7e"],["mediawiki.jqueryMsg","1xsckp9",[174,148,8]],["mediawiki.language.months","0eg610r",[174]],["mediawiki.language.names","0cfo43y",[177]],["mediawiki.language.specialCharacters","0meovla",[
174]],["mediawiki.libs.jpegmeta","0qlr8q3"],["mediawiki.page.gallery","0jq9cza",[49,184]],["mediawiki.page.gallery.styles","1fsgpj7"],["mediawiki.page.gallery.slideshow","0sxrbt2",[136,94,275,290]],["mediawiki.page.ready","0tevpx3",[16,20,41]],["mediawiki.page.startup","1ghkk30"],["mediawiki.page.patrol.ajax","19axrom",[43,136,94]],["mediawiki.page.watch.ajax","11qe9mo",[136,102,178]],["mediawiki.page.rollback","1p6paze",[43,104]],["mediawiki.page.image.pagination","15ck7i7",[43,148]],["mediawiki.rcfilters.filters.base.styles","0eu1cwt"],["mediawiki.rcfilters.highlightCircles.seenunseen.styles","0x2h7lx"],["mediawiki.rcfilters.filters.dm","0j2dq6h",[131,145,98,178,146,269]],["mediawiki.rcfilters.filters.ui","0ge6oc2",[39,194,249,284,286,288,290]],["mediawiki.special","1tqiwr4"],["mediawiki.special.apisandbox.styles","0rmzm3c"],["mediawiki.special.apisandbox","14i08eq",[39,94,178,255,272]],["mediawiki.special.block","0bqt2fw",[117,148,257]],["mediawiki.special.changecredentials.js",
"15elhcv",[94,119]],["mediawiki.special.changeslist","19ulacy"],["mediawiki.special.changeslist.enhanced","05dadx8"],["mediawiki.special.changeslist.legend","08xn7fg"],["mediawiki.special.changeslist.legend.js","023oeg3",[39,152]],["mediawiki.special.changeslist.visitedstatus","1e8sr4c"],["mediawiki.special.comparepages.styles","1nixchr"],["mediawiki.special.contributions","0kjlq1e",[178,251]],["mediawiki.special.edittags","0na6sbh",[21,37]],["mediawiki.special.edittags.styles","18wzlyi"],["mediawiki.special.import","18feist"],["mediawiki.special.movePage","1gi5rsk",[249,254]],["mediawiki.special.movePage.styles","0dfovi6"],["mediawiki.special.pageLanguage","1obzz40",[273]],["mediawiki.special.pagesWithProp","14krl3z"],["mediawiki.special.preferences","0zjwvcz",[106,174,128]],["mediawiki.special.preferences.styles","0q23a4a"],["mediawiki.special.recentchanges","1he5rsd"],["mediawiki.special.revisionDelete","10x4we1",[37]],["mediawiki.special.search","0vyec07",[264]],[
"mediawiki.special.search.commonsInterwikiWidget","0bho3bg",[145,94,178]],["mediawiki.special.search.interwikiwidget.styles","15hozbj"],["mediawiki.special.search.styles","05fbb2k"],["mediawiki.special.undelete","0hzl1ud",[249,254]],["mediawiki.special.unwatchedPages","0elumfd",[136,102]],["mediawiki.special.upload","1fgs3wc",[43,136,99,106,178,182,226,90]],["mediawiki.special.upload.styles","143gbww"],["mediawiki.special.userlogin.common.styles","0cq2qob"],["mediawiki.special.userlogin.login.styles","1vzpkcd"],["mediawiki.special.userlogin.signup.js","0egxo3u",[94,118,178]],["mediawiki.special.userlogin.signup.styles","1crrduk"],["mediawiki.special.userrights","15ra5oy",[37,128]],["mediawiki.special.watchlist","0zmj1uy",[136,102,178,273]],["mediawiki.special.watchlist.styles","1w9adev"],["mediawiki.special.version","00gfzq1"],["mediawiki.legacy.config","14wjffl"],["mediawiki.legacy.commonPrint","05d62na"],["mediawiki.legacy.protect","1x373db",[37]],["mediawiki.legacy.shared","0k9r4di"
],["mediawiki.legacy.oldshared","0wnnnjq"],["mediawiki.legacy.wikibits","02ctddr"],["mediawiki.ui","1ozh1bu"],["mediawiki.ui.checkbox","0fgvwz1"],["mediawiki.ui.radio","0es7fsd"],["mediawiki.ui.anchor","1eq7njq"],["mediawiki.ui.button","0q9lozz"],["mediawiki.ui.input","1ds9zlf"],["mediawiki.ui.icon","18yie50"],["mediawiki.ui.text","11pospj"],["mediawiki.widgets","0bbb92n",[136,94,250,275]],["mediawiki.widgets.styles","0gp1v66"],["mediawiki.widgets.DateInputWidget","0jsxr2d",[252,88,275]],["mediawiki.widgets.DateInputWidget.styles","0x3cvbc"],["mediawiki.widgets.visibleByteLimit","1xsdcix",[254]],["mediawiki.widgets.visibleLengthLimit","04n948e",[37,273]],["mediawiki.widgets.datetime","00y1g1l",[273,291,292]],["mediawiki.widgets.CategoryMultiselectWidget","0airftz",[112,136,275]],["mediawiki.widgets.SelectWithInputWidget","1qeqhin",[258,275]],["mediawiki.widgets.SelectWithInputWidget.styles","0b6w88g"],["mediawiki.widgets.SizeFilterWidget","151k7zs",[260,275]],[
"mediawiki.widgets.SizeFilterWidget.styles","1b9i7bz"],["mediawiki.widgets.MediaSearch","1jz6mm7",[112,136,275]],["mediawiki.widgets.UserInputWidget","1ijs41p",[94,275]],["mediawiki.widgets.UsersMultiselectWidget","1nmv3nl",[94,275]],["mediawiki.widgets.SearchInputWidget","1ckb0gs",[133,249]],["mediawiki.widgets.SearchInputWidget.styles","0iztxfm"],["mediawiki.widgets.StashedFileWidget","145nu9w",[94,273]],["es5-shim","1xsdcix"],["dom-level2-shim","1xsdcix"],["oojs","0b7sa15"],["mediawiki.router","0e3nyls",[271]],["oojs-router","1k16t3a",[269]],["oojs-ui","1xsdcix",[276,275,277]],["oojs-ui-core","1lxemyb",[174,269,274,281,282,287,278,279]],["oojs-ui-core.styles","1o5syo6"],["oojs-ui-widgets","162sami",[273,283,291,292]],["oojs-ui-toolbars","0dc2d2l",[273,292]],["oojs-ui-windows","1vccipy",[273,292]],["oojs-ui.styles.indicators","11qg2l1"],["oojs-ui.styles.textures","0xfcbw3"],["oojs-ui.styles.icons-accessibility","0thfqws"],["oojs-ui.styles.icons-alerts","0dnua80"],[
"oojs-ui.styles.icons-content","0gbhrs4"],["oojs-ui.styles.icons-editing-advanced","0cird77"],["oojs-ui.styles.icons-editing-core","0ey2nba"],["oojs-ui.styles.icons-editing-list","1nvtcne"],["oojs-ui.styles.icons-editing-styling","0x6ews7"],["oojs-ui.styles.icons-interactions","0x3ay3b"],["oojs-ui.styles.icons-layout","11g6e44"],["oojs-ui.styles.icons-location","14hxznk"],["oojs-ui.styles.icons-media","01g1k2v"],["oojs-ui.styles.icons-moderation","1n934od"],["oojs-ui.styles.icons-movement","10p83by"],["oojs-ui.styles.icons-user","0m8erhy"],["oojs-ui.styles.icons-wikimedia","0qijrnw"],["skins.monobook.styles","10hevmv"],["skins.vector.styles","1b2h330"],["skins.vector.styles.responsive","0t9qqkg"],["skins.vector.js","1738qyt",[46,49]]]);;mw.config.set({"wgLoadScript":"/load.php","debug":!1,"skin":"vector","stylepath":"/skins","wgUrlProtocols":
"bitcoin\\:|ftp\\:\\/\\/|ftps\\:\\/\\/|geo\\:|git\\:\\/\\/|gopher\\:\\/\\/|http\\:\\/\\/|https\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|magnet\\:|mailto\\:|mms\\:\\/\\/|news\\:|nntp\\:\\/\\/|redis\\:\\/\\/|sftp\\:\\/\\/|sip\\:|sips\\:|sms\\:|ssh\\:\\/\\/|svn\\:\\/\\/|tel\\:|telnet\\:\\/\\/|urn\\:|worldwind\\:\\/\\/|xmpp\\:|\\/\\/","wgArticlePath":"/index.php/$1","wgScriptPath":"","wgScript":"/index.php","wgSearchType":null,"wgVariantArticlePath":!1,"wgActionPaths":{},"wgServer":"https://toolkit.data.gov.au","wgServerName":"toolkit.data.gov.au","wgUserLanguage":"en","wgContentLanguage":"en","wgTranslateNumerals":!0,"wgVersion":"1.31.0","wgEnableAPI":!0,"wgEnableWriteAPI":!0,"wgMainPageTitle":"Main Page","wgFormattedNamespaces":{"-2":"Media","-1":"Special","0":"","1":"Talk","2":"User","3":"User talk","4":"Data.gov.au","5":"Data.gov.au talk","6":"File","7":"File talk","8":"MediaWiki","9":"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category"
,"15":"Category talk"},"wgNamespaceIds":{"media":-2,"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"data.gov.au":4,"data.gov.au_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"image":6,"image_talk":7,"project":4,"project_talk":5},"wgContentNamespaces":[0],"wgSiteName":"Data.gov.au","wgDBname":"mediawiki_db","wgExtraSignatureNamespaces":[],"wgAvailableSkins":{"monobook":"MonoBook","vector":"Vector","fallback":"Fallback","apioutput":"ApiOutput"},"wgExtensionAssetsPath":"/extensions","wgCookiePrefix":"mediawiki_db","wgCookieDomain":"","wgCookiePath":"/","wgCookieExpiration":2592000,"wgResourceLoaderMaxQueryLength":2000,"wgCaseSensitiveNamespaces":[],"wgLegalTitleChars":" %!\"$&'()*,\\-./0-9:;=?@A-Z\\\\\\^_`a-z~+\\u0080-\\uFFFF","wgIllegalFileChars":":/\\\\","wgResourceLoaderStorageVersion":1,"wgResourceLoaderStorageEnabled":!0,"wgForeignUploadTargets":["local"],
"wgEnableUploads":!0,"wgCommentByteLimit":255,"wgCommentCodePointLimit":null});var RLQ=window.RLQ||[];while(RLQ.length){RLQ.shift()();}window.RLQ={push:function(fn){fn();}};window.NORLQ={push:function(){}};}window.mediaWikiLoadStart=mwNow();mwPerformance.mark('mwLoadStart');script=document.createElement('script');script.src="/load.php?debug=false&lang=en&modules=jquery%2Cmediawiki&only=scripts&skin=vector&version=089nv5m";script.onload=function(){script.onload=null;script=null;startUp();};document.head.appendChild(script);}());
