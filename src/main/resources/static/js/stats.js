google.maps.__gjsload__('stats', function(_){var hY=function(){this.b=new _.tk},iY=function(a){var b=0,c=0;a.b.forEach(function(a){b+=a.no;c+=a.Ln});return c?b/c:0},jY=function(a,b,c){var d=[];_.mj(a,function(a,c){d.push(c+b+a)});return d.join(c)},kY=function(a){var b={};_.mj(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return jY(b,":",",")},lY=function(){var a;_.yf[35]?a=_.Q(_.U(_.T),11):a=_.Iq;var b=window.document;this.l=_.gi;this.f=a+"/maps/gen_204";this.j=b},mY=function(a,b,
c,d){var e={};e.host=window.document.location&&window.document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},nY=function(a,b,c,d){var e=_.P(_.T,0,1);this.m=a;this.B=b;this.l=e;this.f=c;this.j=d;this.b=new _.tk;this.A=_.Ra()},pY=function(a,b,c,d,e){var f=_.P(_.T,23,500);var g=_.P(_.T,22,2);this.D=a;this.G=b;this.H=f;this.l=g;this.B=c;this.m=d;this.A=e;this.f=new _.tk;this.b=0;this.j=_.Ra();oY(this)},oY=function(a){window.setTimeout(function(){qY(a);
oY(a)},Math.min(a.H*Math.pow(a.l,a.b),2147483647))},qY=function(a){var b=mY(a.G,a.B,a.m,a.A);b.t=a.b+"-"+(_.Ra()-a.j);a.f.forEach(function(a,d){a=a();0<a&&(b[d]=Number(a.toFixed(2))+(_.ql()?"-if":""))});a.D.b({ev:"api_snap"},b);++a.b},rY=function(a,b,c,d,e){this.A=a;this.B=b;this.m=c;this.j=d;this.l=e;this.f={};this.b=[]},sY=function(a,b,c){var d=_.Zh;this.j=a;_.L.bind(this.j,"set_at",this,this.l);_.L.bind(this.j,"insert_at",this,this.l);this.A=b;this.B=d;this.m=c;this.f=0;this.b={};this.l()},tY=
function(){this.j=_.Q(_.T,6);this.B=_.gf();this.b=new lY;_.Yh&&new sY(_.Yh,(0,_.u)(this.b.b,this.b),!!this.j);var a=_.Q(new _.bf(_.T.data[3]),1);this.D=a.split(".")[1]||a;this.G={};this.A={};this.m={};this.H={};this.V=_.P(_.T,0,1);_.fi&&(this.l=new pY(this.b,this.D,this.V,this.j,this.B))};hY.prototype.f=function(a,b,c){this.b.set(_.Jc(a),{no:b,Ln:c})};
lY.prototype.b=function(a,b){b=b||{};var c=_.Aj().toString(36);b.src="apiv3";b.token=this.l;b.ts=c.substr(c.length-6);a.cad=kY(b);a=jY(a,"=","&");a=this.f+"?target=api&"+a;this.j.createElement("img").src=a;(b=_.C.__gm_captureCSI)&&b(a)};
nY.prototype.D=function(a,b){b=_.q(b)?b:1;this.b.isEmpty()&&window.setTimeout((0,_.u)(function(){var a=mY(this.B,this.l,this.f,this.j);a.t=_.Ra()-this.A;var b=this.b;_.uk(b);for(var e={},f=0;f<b.b.length;f++){var g=b.b[f];e[g]=b.f[g]}_.Ou(a,e);this.b.clear();this.m.b({ev:"api_maprft"},a)},this),500);b=this.b.get(a,0)+b;this.b.set(a,b)};pY.prototype.register=function(a,b){this.f.set(a,b)};rY.prototype.D=function(a){this.f[a]||(this.f[a]=!0,this.b.push(a),2>this.b.length&&_.kv(this,this.G,500))};
rY.prototype.G=function(){for(var a=mY(this.B,this.m,this.j,this.l),b=0,c;c=this.b[b];++b)a[c]="1";a.hybrid=+_.$k();this.b.length=0;this.A.b({ev:"api_mapft"},a)};sY.prototype.l=function(){for(var a;a=this.j.removeAt(0);){var b=a.qn;a=a.timestamp-this.B;++this.f;this.b[b]||(this.b[b]=0);++this.b[b];if(20<=this.f&&!(this.f%5)){var c={};c.s=b;c.sr=this.b[b];c.tr=this.f;c.te=a;c.hc=this.m?"1":"0";this.A({ev:"api_services"},c)}}};tY.prototype.Yb=function(a){a=_.Jc(a);this.G[a]||(this.G[a]=new rY(this.b,this.D,this.V,this.j,this.B));return this.G[a]};tY.prototype.ja=function(a){a=_.Jc(a);this.A[a]||(this.A[a]=new nY(this.b,this.D,this.j,this.B));return this.A[a]};tY.prototype.f=function(a){if(this.l){this.m[a]||(this.m[a]=new _.jw,this.l.register(a,function(){return b.pb()}));var b=this.m[a];return b}};
tY.prototype.ma=function(a){if(this.l){this.H[a]||(this.H[a]=new hY,this.l.register(a,function(){return iY(b)}));var b=this.H[a];return b}};var uY=new tY;_.Ud("stats",uY);});