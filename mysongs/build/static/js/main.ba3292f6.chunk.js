(this.webpackJsonpmysongs=this.webpackJsonpmysongs||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),l=n.n(o),i=(n(17),n(11)),s=n(6),c=n.n(s),u=n(7),g=n(2),m=n(3),h=n(1),d=n(5),p=n(4),f=function(){return r.a.createElement("section",null,r.a.createElement("h1",{className:"Header"},"Rama's lil' Playlist"))},E=n(10),b=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(g.a)(this,n),(e=t.call(this)).state={title:"",artist:"",genre:"",rating:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(m.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(E.a)({},n,a))}},{key:"handleSubmit",value:function(){var e=this.state,t=e.title,n=e.artist,a=e.genre,r=e.rating;""!==t&&""!==n&&""!==a&&""!==r&&(this.props.addSong(this.state),this.setState({title:"",artist:"",genre:"",rating:""}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Songform"},r.a.createElement("input",{type:"text",placeholder:"Title...",name:"title",required:"true",value:this.state.title,onChange:this.handleChange}),r.a.createElement("input",{type:"text",placeholder:"Artist...",name:"artist",value:this.state.artist,onChange:this.handleChange}),r.a.createElement("input",{type:"text",placeholder:"Genre...",name:"genre",value:this.state.genre,onChange:this.handleChange}),r.a.createElement("select",{id:"rating",name:"rating",value:this.state.rating,onChange:this.handleChange},r.a.createElement("option",{value:""},"--Rating--"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement("button",{id:"add-song-btn",onClick:this.handleSubmit},"Add Song"))}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props.song;return r.a.createElement("tr",{className:"song-row"},r.a.createElement("td",null,t.title),r.a.createElement("td",null,t.artist),r.a.createElement("td",null,t.genre),r.a.createElement("td",{className:"del-btn-col"},t.rating,r.a.createElement("button",{className:"del-btn",onClick:function(){return e.props.deleteSong(t.id)}},r.a.createElement("span",null,"-"))))}}]),n}(r.a.Component),S=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(e){var t=this,n=[];return this.props.songs.forEach((function(e){n.push(r.a.createElement(v,{deleteSong:t.props.handleDeleteSong,song:e,id:e.id,key:e.id}))})),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"song-header"},r.a.createElement("th",{className:"song-row__item"},r.a.createElement("span",null,"Title"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t.props.sortSongs("titleA")}},"A"),r.a.createElement("button",{onClick:function(){return t.props.sortSongs("titleZ")}},"Z"))),r.a.createElement("th",{className:"song-row__item"},r.a.createElement("span",null,"Artist"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t.props.sortSongs("artistA")}},"A"),r.a.createElement("button",{onClick:function(){return t.props.sortSongs("artistZ")}},"Z"))),r.a.createElement("th",{className:"song-row__item"},r.a.createElement("span",null,"Genre"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t.props.sortSongs("genreA")}},"A"),r.a.createElement("button",{onClick:function(){return t.props.sortSongs("genreZ")}},"Z"))),r.a.createElement("th",{className:"song-row__item"},r.a.createElement("span",{className:"rating-header"},"Rating"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t.props.sortSongs("rating5")}},"5"),r.a.createElement("button",{onClick:function(){return t.props.sortSongs("rating1")}},"1"))))),r.a.createElement("tbody",null,n))}}]),n}(a.Component);function j(){return r.a.createElement("section",null,r.a.createElement("p",{className:"Footer"},"created by R Sabajo 2020"))}var C="https://rama-sabajo.firebaseio.com/songs",O=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(g.a)(this,n),(e=t.call(this)).state={songs:[]},e.handleAddSong=e.handleAddSong.bind(Object(h.a)(e)),e.handleSort=e.handleSort.bind(Object(h.a)(e)),e.handleDeleteSong=e.handleDeleteSong.bind(Object(h.a)(e)),e.getSongs=e.getSongs.bind(Object(h.a)(e)),e}return Object(m.a)(n,[{key:"getSongs",value:function(){var e=Object(u.a)(c.a.mark((function e(){var t=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(C,".json"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){var n=Object.keys(e).map((function(t){return{id:t,title:e[t].title,artist:e[t].artist,genre:e[t].genre,rating:e[t].rating}}));t.setState({songs:n})})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getSongs();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleAddSong",value:function(e){var t=this,n={title:e.title,artist:e.artist,genre:e.genre,rating:e.rating},a={method:"POST",body:JSON.stringify(n)};fetch("".concat(C,".json"),a).then((function(e){return e.json()})).then((function(e){t.getSongs()})).catch((function(e){return console.log(e)}))}},{key:"handleDeleteSong",value:function(e){var t=this,n="".concat("https://rama-sabajo.firebaseio.com","/songs/").concat(e,".json");fetch(n,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){t.getSongs()})).catch((function(e){return console.log(e)}))}},{key:"handleSort",value:function(e){var t=Object(i.a)(this.state.songs),n="titleA"===e?t.sort((function(e,t){return e.title.localeCompare(t.title)})):"titleZ"===e?t.sort((function(e,t){return t.title.localeCompare(e.title)})):"artistA"===e?t.sort((function(e,t){return e.artist.localeCompare(t.artist)})):"artistZ"===e?t.sort((function(e,t){return t.artist.localeCompare(e.artist)})):"genreA"===e?t.sort((function(e,t){return e.genre.localeCompare(t.genre)})):"genreZ"===e?t.sort((function(e,t){return t.genre.localeCompare(e.genre)})):"rating1"===e?t.sort((function(e,t){return e.rating.localeCompare(t.rating)})):"rating5"===e?t.sort((function(e,t){return t.rating.localeCompare(e.rating)})):null;this.setState({songs:n})}},{key:"render",value:function(){return r.a.createElement("div",{className:"song-overview"},r.a.createElement(f,null),r.a.createElement(b,{addSong:this.handleAddSong}),r.a.createElement(S,{handleDeleteSong:this.handleDeleteSong,songs:this.state.songs,sortSongs:this.handleSort}),r.a.createElement(j,null))}}]),n}(a.Component);n(19);var y=function(){return r.a.createElement("section",null,r.a.createElement(O,null))};l.a.render(r.a.createElement("section",null,r.a.createElement(y,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ba3292f6.chunk.js.map