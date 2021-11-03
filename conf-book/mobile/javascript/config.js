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
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.googleAnalyticsID="UA-105430096-2";bookConfig.MidBgColor="#227949";bookConfig.totalPageCount=88;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2553;;bookConfig.securityType="1";bookConfig.CreatedTime ="211101173336";bookConfig.bookTitle="Conference Book ICIRAD 2021";bookConfig.bookmarkCR="0e8e8e0687fb216e6b97fd2b5aa717720b8c0cde";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388255","y":"0.302418","width":"0.213169","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:kurnia.widiastuti@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388798","y":"0.323385","width":"0.207726","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:kadek.suranata@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388813","y":"0.269353","width":"0.230446","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:gustiayumahayukti@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.607624","y":"0.285079","width":"0.248870","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:sanusi.mulyadiharja@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388921","y":"0.285079","width":"0.203621","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:nyoman.wijana@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388908","y":"0.273385","width":"0.203287","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:desak.mardani@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388525","y":"0.250402","width":"0.185806","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:dewioktofa.r@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.416317","y":"0.292740","width":"0.165955","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:gunamantha@yahoo.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388727","y":"0.269353","width":"0.213084","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:chandra.adinata@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388718","y":"0.269353","width":"0.168804","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:yodaketut@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.581980","y":"0.288708","width":"0.200601","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:hemy.ekayani@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389094","y":"0.288708","width":"0.177455","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:masdarini@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388930","y":"0.250402","width":"0.196322","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:adnyanaputra@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388802","y":"0.265724","width":"0.207853","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:antara.kesiman@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388900","y":"0.250402","width":"0.157936","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:ketutrapi658@gmail.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388676","y":"0.308063","width":"0.211606","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:igedearisgunadi@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388337","y":"0.269353","width":"0.201775","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:rai.wisudariani@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388618","y":"0.242337","width":"0.188207","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:budi.yasmini@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388563","y":"0.269353","width":"0.179603","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:gede.aditra@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.609804","y":"0.273385","width":"0.197968","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:yudha.martin@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388993","y":"0.273385","width":"0.205582","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:agus.dharmadi@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388598","y":"0.269353","width":"0.202145","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:rudi.irwansyah@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388509","y":"0.265724","width":"0.163994","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:krisnasanjaya@unhi.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388556","y":"0.250402","width":"0.186591","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:ib.putrayasa@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388511","y":"0.242337","width":"0.199696","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:nimatul.istiqomah.fe@um.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389141","y":"0.250402","width":"0.186288","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:igdewawans@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389141","y":"0.250402","width":"0.186288","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:igdewawans@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388664","y":"0.265724","width":"0.196691","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wayan.sukerti@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388664","y":"0.288708","width":"0.196691","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wayan.sukerti@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389241","y":"0.250402","width":"0.180824","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:asevilleja@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389123","y":"0.296369","width":"0.154878","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wayankertih@gmail.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388339","y":"0.315724","width":"0.194887","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:niketut.suarni@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389008","y":"0.269353","width":"0.183097","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:ekawahyuni@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388658","y":"0.292740","width":"0.203819","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:era.adnyayanti@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.379110","y":"0.305240","width":"0.201484","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:hadi.saputra@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177625","y":"0.305240","width":"0.185985","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wmyartawan@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.618736","y":"0.289918","width":"0.192853","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:eka.agustini@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388796","y":"0.289918","width":"0.215105","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:karina.wedhanti@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388619","y":"0.250402","width":"0.209968","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:rahayu.budiarta@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389206","y":"0.250402","width":"0.148716","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:adiputu108@gmail.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389141","y":"0.269353","width":"0.178515","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:agung2056@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388958","y":"0.269353","width":"0.227368","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:yudha.paramartha@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.365933","y":"0.250402","width":"0.185850","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wijaya.madeagus@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388971","y":"0.250402","width":"0.235358","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:nugraha.sudarsana@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.522118","y":"0.261692","width":"0.167769","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:made.suriani@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.367254","y":"0.261692","width":"0.135506","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:damiati@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.175449","y":"0.281047","width":"0.117040","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:damiati@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.571665","y":"0.265724","width":"0.166432","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:panca.adi@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.390761","y":"0.265724","width":"0.159196","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wahjoedi@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388681","y":"0.265724","width":"0.226369","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:novita.puspa.dewi@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.177101","y":"0.281047","width":"0.151721","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:damiati@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.591350","y":"0.265724","width":"0.171088","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wahjoedi@undiksha.ac.id"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389156","y":"0.265724","width":"0.186641","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:drsputupancaadi@gmail.com"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.393232","y":"0.242337","width":"0.165122","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:agus.aan@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388639","y":"0.288708","width":"0.196029","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:gede.sudirtha@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388903","y":"0.250402","width":"0.157996","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wsutaya@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388775","y":"0.250402","width":"0.192290","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:putu.arnyana@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388968","y":"0.227014","width":"0.204904","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:astra.wesnawa@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388968","y":"0.250402","width":"0.204904","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:astra.wesnawa@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388309","y":"0.273385","width":"0.187119","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:putu.santiari@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388396","y":"0.315724","width":"0.196472","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:arie.suwastini@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388396","y":"0.315724","width":"0.196472","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:arie.suwastini@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388858","y":"0.283869","width":"0.179319","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:gede.aditra@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.390074","y":"0.273385","width":"0.199995","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:rmasangkay@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389658","y":"0.227014","width":"0.173859","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:kballada@dmmmsu.edu.ph"}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.390077","y":"0.288708","width":"0.165258","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:mlopez@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389319","y":"0.265724","width":"0.166749","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:horpilla@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389995","y":"0.250402","width":"0.172313","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:skupsch@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389812","y":"0.265724","width":"0.177089","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:ecabrera@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.390249","y":"0.250402","width":"0.159656","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:wgayo@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389449","y":"0.273385","width":"0.185617","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:aordianrio@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389658","y":"0.265724","width":"0.173859","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:cjucutan@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.388738","y":"0.260885","width":"0.191337","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:yudha.martin@undiksha.ac.id"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389905","y":"0.283869","width":"0.153465","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:jaban@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.389888","y":"0.260885","width":"0.178692","height":"-0.015275"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:rsanchez@dmmmsu.edu.ph"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.407416","y":"0.322982","width":"0.171410","height":"-0.015276"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:mpinay-an@dmmmsu.edu.ph"}}],[]]}; bookConfig.isFlipPdf=true; var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
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