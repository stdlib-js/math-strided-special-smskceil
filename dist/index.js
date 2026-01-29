"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=n(function(C,c){
var x=require('@stdlib/strided-base-smskmap/dist'),R=require('@stdlib/math-base-special-ceilf/dist');function _(e,r,i,a,s,t,u){return x(e,r,i,a,s,t,u,R)}c.exports=_
});var o=n(function(D,m){
var E=require('@stdlib/strided-base-smskmap/dist').ndarray,O=require('@stdlib/math-base-special-ceilf/dist');function b(e,r,i,a,s,t,u,k,y,j){return E(e,r,i,a,s,t,u,k,y,j,O)}m.exports=b
});var f=n(function(F,l){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=q(),h=o();g(p,"ndarray",h);l.exports=p
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=f(),v,d=z(w(__dirname,"./native.js"));d instanceof Error?v=A:v=d;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
