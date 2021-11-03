	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.googleAnalyticsID="UA-105430096-2";bookConfig.MidBgColor="#127068";bookConfig.totalPageCount=88;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2554;;bookConfig.securityType="1";bookConfig.CreatedTime ="211101110618";bookConfig.bookTitle="Conference Book ICIRAD 2021";bookConfig.bookmarkCR="8917e4ac0a00c802328c0bfdc4966d9bc2019676";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387157","y":"0.301535","width":"0.213195","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:kurnia.widiastuti@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387700","y":"0.322498","width":"0.207752","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:kadek.suranata@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387715","y":"0.268479","width":"0.230475","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:gustiayumahayukti@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.606553","y":"0.284201","width":"0.248900","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:sanusi.mulyadiharja@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387822","y":"0.284201","width":"0.203645","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:nyoman.wijana@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387810","y":"0.272510","width":"0.203312","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:desak.mardani@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387427","y":"0.249532","width":"0.185829","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:dewioktofa.r@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.415222","y":"0.291860","width":"0.165975","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:gunamantha@yahoo.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387629","y":"0.268479","width":"0.213110","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:chandra.adinata@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387620","y":"0.268479","width":"0.168825","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:yodaketut@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.580905","y":"0.287829","width":"0.200625","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:hemy.ekayani@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387996","y":"0.287829","width":"0.177476","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:masdarini@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387832","y":"0.249532","width":"0.196345","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:adnyanaputra@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387704","y":"0.264851","width":"0.207879","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:antara.kesiman@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387802","y":"0.249532","width":"0.157955","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:ketutrapi658@gmail.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387578","y":"0.307179","width":"0.211632","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:igedearisgunadi@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387239","y":"0.268479","width":"0.201801","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:rai.wisudariani@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387520","y":"0.241470","width":"0.188230","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:budi.yasmini@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387467","y":"0.268479","width":"0.179676","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:gede.aditra@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.608732","y":"0.272510","width":"0.197992","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:yudha.martin@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387895","y":"0.272510","width":"0.205607","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:agus.dharmadi@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387500","y":"0.268479","width":"0.202170","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:rudi.irwansyah@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387411","y":"0.264851","width":"0.164014","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:krisnasanjaya@unhi.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387457","y":"0.249532","width":"0.186614","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:ib.putrayasa@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387413","y":"0.241470","width":"0.199721","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:nimatul.istiqomah.fe@um.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388043","y":"0.249532","width":"0.186311","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:igdewawans@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388043","y":"0.249532","width":"0.186311","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:igdewawans@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387566","y":"0.264851","width":"0.196715","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wayan.sukerti@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387566","y":"0.287829","width":"0.196715","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wayan.sukerti@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388143","y":"0.249532","width":"0.180846","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:asevilleja@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388025","y":"0.295488","width":"0.154897","height":"-0.015271"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wayankertih@gmail.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387241","y":"0.314838","width":"0.194911","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:niketut.suarni@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387910","y":"0.268479","width":"0.183119","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:ekawahyuni@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387560","y":"0.291860","width":"0.203844","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:era.adnyayanti@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.378011","y":"0.304357","width":"0.201508","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:hadi.saputra@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.176502","y":"0.304357","width":"0.186008","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wmyartawan@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.617666","y":"0.289038","width":"0.192876","height":"-0.015271"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:eka.agustini@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387698","y":"0.289038","width":"0.215131","height":"-0.015271"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:karina.wedhanti@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387521","y":"0.249532","width":"0.209995","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:rahayu.budiarta@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388108","y":"0.249532","width":"0.148734","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:adiputu108@gmail.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388042","y":"0.268479","width":"0.178537","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:agung2056@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387860","y":"0.268479","width":"0.227396","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:yudha.paramartha@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.364833","y":"0.249532","width":"0.185872","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wijaya.madeagus@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387873","y":"0.249532","width":"0.235387","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:nugraha.sudarsana@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.521036","y":"0.260820","width":"0.167789","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:made.suriani@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.366154","y":"0.260820","width":"0.135522","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:damiati@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.174326","y":"0.280170","width":"0.117054","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:damiati@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.570590","y":"0.264851","width":"0.166452","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:panca.adi@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389663","y":"0.264851","width":"0.159215","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wahjoedi@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387583","y":"0.264851","width":"0.226396","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:novita.puspa.dewi@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.175978","y":"0.280170","width":"0.151740","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:damiati@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.590277","y":"0.264851","width":"0.171109","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wahjoedi@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388058","y":"0.264851","width":"0.186664","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:drsputupancaadi@gmail.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.392134","y":"0.241470","width":"0.165142","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:agus.aan@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387541","y":"0.287829","width":"0.196053","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:gede.sudirtha@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387805","y":"0.249532","width":"0.158015","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wsutaya@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387677","y":"0.249532","width":"0.192315","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:putu.arnyana@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387870","y":"0.226151","width":"0.204929","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:astra.wesnawa@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387870","y":"0.249532","width":"0.204929","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:astra.wesnawa@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387211","y":"0.272510","width":"0.187143","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:putu.santiari@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387298","y":"0.314838","width":"0.196497","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:arie.suwastini@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387298","y":"0.314838","width":"0.196497","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:arie.suwastini@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387790","y":"0.282992","width":"0.179365","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:gede.aditra@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388977","y":"0.272510","width":"0.200020","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:rmasangkay@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388560","y":"0.226151","width":"0.173881","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:kballada@dmmmsu.edu.ph"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388979","y":"0.287829","width":"0.165279","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:mlopez@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388221","y":"0.264851","width":"0.166769","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:horpilla@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388897","y":"0.249532","width":"0.172334","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:skupsch@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388714","y":"0.264851","width":"0.177111","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:ecabrera@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389151","y":"0.249532","width":"0.159676","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wgayo@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388351","y":"0.272510","width":"0.185639","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:aordianrio@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388560","y":"0.264851","width":"0.173881","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:cjucutan@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.387640","y":"0.260013","width":"0.191361","height":"-0.015271"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:yudha.martin@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388807","y":"0.282992","width":"0.153484","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:jaban@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388790","y":"0.260013","width":"0.178714","height":"-0.015271"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:rsanchez@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.406320","y":"0.322095","width":"0.171430","height":"-0.015272"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:mpinay-an@dmmmsu.edu.ph"}}],[]]}; bookConfig.isFlipPdf=true; var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}