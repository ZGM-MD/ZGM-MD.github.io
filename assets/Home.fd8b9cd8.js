import{n as _,g as y,i as o,_ as b}from"./index.7fc23838.js";const m={data(){return{tableData:[],tableLabel:{name:"\u8BFE\u7A0B",todayBuy:"\u4ECA\u65E5\u8D2D\u4E70",monthBuy:"\u672C\u6708\u8D2D\u4E70",totalBuy:"\u603B\u8D2D\u4E70"},countData:[{name:"\u4ECA\u65E5\u652F\u4ED8\u8BA2\u5355",value:1234,icon:"success",color:"#2ec7c9"},{name:"\u4ECA\u65E5\u6536\u85CF\u8BA2\u5355",value:210,icon:"star-on",color:"#ffb980"},{name:"\u4ECA\u65E5\u672A\u652F\u4ED8\u8BA2\u5355",value:1234,icon:"s-goods",color:"#5ab1ef"},{name:"\u672C\u6708\u652F\u4ED8\u8BA2\u5355",value:1234,icon:"success",color:"#2ec7c9"},{name:"\u672C\u6708\u6536\u85CF\u8BA2\u5355",value:210,icon:"star-on",color:"#ffb980"},{name:"\u672C\u6708\u672A\u652F\u4ED8\u8BA2\u5355",value:1234,icon:"s-goods",color:"#5ab1ef"}]}},mounted(){y().then(({data:i})=>{const{tableData:t}=i.data;this.tableData=t;const a=o(this.$refs.echarts1);var e={};const{orderData:c,userData:l,videoData:d}=i.data,r=Object.keys(c.data[0]),n={data:r};e.xAxis=n,e.yAxis={},e.tooltip={},e.legend=n,e.series=[],r.forEach(s=>{e.series.push({name:s,data:c.data.map(f=>f[s]),type:"line"})}),a.setOption(e);const p=o(this.$refs.echarts2),u={legend:{textStyle:{color:"#333"}},grid:{left:"20%"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:l.map(s=>s.date),axisLine:{lineStyle:{color:"#17b3a3"}},axisLabel:{interval:0,color:"#333"}},yAxis:[{type:"value",axisLine:{lineStyle:{color:"#17b3a3"}}}],color:["#2ec7c9","#b6a2de"],series:[{name:"\u65B0\u589E\u7528\u6237",data:l.map(s=>s.new),type:"bar"},{name:"\u6D3B\u8DC3\u7528\u6237",data:l.map(s=>s.active),type:"bar"}]};p.setOption(u);const h=o(this.$refs.echarts3),v={tooltip:{trigger:"item"},color:["#0f78f4","#dd536b","#9462e5","#a6a6a6","#e1bb22","#39c362","#3ed1cf"],series:[{data:d,type:"pie"}]};h.setOption(v)})}};var x=function(){var t=this,a=t._self._c;return a("el-row",[a("el-col",{staticStyle:{"padding-right":"10px"},attrs:{span:8}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"user"},[a("img",{attrs:{src:b,alt:""}}),a("div",{staticClass:"userinfo"},[a("p",{staticClass:"name"},[t._v("Admin")]),a("p",{staticClass:"access"},[t._v("\u8D85\u7EA7\u7BA1\u7406\u5458")])])]),a("div",{staticClass:"login-info"},[a("p",[t._v("\u4E0A\u6B21\u767B\u5F55\u7684\u65F6\u95F4\uFF1A"),a("span",[t._v("2021-7-19")])]),a("p",[t._v("\u4E0A\u6B21\u767B\u5F55\u7684\u5730\u70B9\uFF1A"),a("span",[t._v("\u6B66\u6C49")])])])]),a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px",height:"460px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},t._l(t.tableLabel,function(e,c){return a("el-table-column",{attrs:{prop:c,label:e}})}),1)],1)],1),a("el-col",{staticStyle:{"padding-left":"10px"},attrs:{span:16}},[a("div",{staticClass:"num"},t._l(t.countData,function(e){return a("el-card",{key:e.name,attrs:{"body-style":{display:"flex",padding:0}}},[a("i",{staticClass:"icon",class:`el-icon-${e.icon}`,style:{background:e.color}}),a("div",{staticClass:"detail"},[a("p",{staticClass:"price"},[t._v("\uFFE5 "+t._s(e.value))]),a("p",{staticClass:"desc"},[t._v(t._s(e.name))])])])}),1),a("el-card",{staticStyle:{height:"280px"}},[a("div",{ref:"echarts1",staticStyle:{height:"280px"}})]),a("div",{staticClass:"graph"},[a("el-card",[a("div",{ref:"echarts2",staticStyle:{height:"260px"}})]),a("el-card",[a("div",{ref:"echarts3",staticStyle:{height:"230px"}})])],1)],1)],1)},g=[],C=_(m,x,g,!1,null,"86a8dfa3",null,null);const S=C.exports;export{S as default};
