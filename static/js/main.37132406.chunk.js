(window["webpackJsonpreact-typescript-example"]=window["webpackJsonpreact-typescript-example"]||[]).push([[0],{28:function(e,t,a){e.exports={header:"XxxHeader_header__1_1KF",headerTitle:"XxxHeader_headerTitle__1_81R",logo:"XxxHeader_logo__3G4XE",searchBoxContainer:"XxxHeader_searchBoxContainer__2v2F3"}},3:function(e,t,a){e.exports={mainCard:"XxxSharedStyles_mainCard__3SIRA",page:"XxxSharedStyles_page__27M9s",pageMessageError:"XxxSharedStyles_pageMessageError__cIUGn",pageMessageContainer:"XxxSharedStyles_pageMessageContainer__2aGmj",pageMessageWarning:"XxxSharedStyles_pageMessageWarning__22cCe",pageTitle:"XxxSharedStyles_pageTitle__30m_8"}},33:function(e,t,a){e.exports={pageFooter:"XxxQuestionsPage_pageFooter__22Qw2",pageNavigationPanel:"XxxQuestionsPage_pageNavigationPanel__1riIJ"}},39:function(e,t,a){e.exports={App:"App_App__15LM-","App-logo":"App_App-logo__1GLNd","App-logo-spin":"App_App-logo-spin__1EbLw","App-header":"App_App-header__3nnPn","App-link":"App_App-link__TRj1P"}},4:function(e,t,a){e.exports={answerAccepted:"XxxAnswersPage_answerAccepted__2AF2s",answerCaption:"XxxAnswersPage_answerCaption__2Cwpr",answerInfo:"XxxAnswersPage_answerInfo__1IlQk",answerNotAccepted:"XxxAnswersPage_answerNotAccepted__1EpgF",answerQuestionContainer:"XxxAnswersPage_answerQuestionContainer__3qsqw",answersContainer:"XxxAnswersPage_answersContainer__2xGEk",backToQuestions:"XxxAnswersPage_backToQuestions__1uUFb",questionCaption:"XxxAnswersPage_questionCaption__2P1yB",questionInfo:"XxxAnswersPage_questionInfo__1Ut32",questionTitle:"XxxAnswersPage_questionTitle__1FEzL"}},41:function(e,t,a){e.exports=a.p+"static/media/logo.299e6db5.svg"},42:function(e,t,a){e.exports={searchBox:"XxxSearchBox_searchBox__3MpVo"}},50:function(e,t,a){e.exports=a(74)},55:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(25),r=a.n(i),o=(a(55),a(7)),c=a(8),l=a(10),u=a(9),m=a(11),h=a(30),p=a(22),d=a(39),g=a.n(d),E=a(87),v=a(4),f=a.n(v),y=a(3),x=a.n(y),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).questionId="",a.requestUrl="",a.requestParams={},a.unlisten=void 0,a.state={answers:[],isEmpty:!1,isError:!1,isLoading:!0,question:{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getQuestionId(),this.getQuestion()}},{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen(function(){console.log("url changed"),e.getQuestionId(),e.getQuestion()})}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"getQuestionId",value:function(){var e;return(e=this.props.match.params).hasOwnProperty("id")&&"string"===typeof e.id&&(this.questionId=e.id),""}},{key:"getQuestion",value:function(){this.setState({isEmpty:!1,isError:!1,isLoading:!0}),this.setState({isError:!1,isLoading:!0}),this.requestUrl="https://api.stackexchange.com/2.2/questions/"+this.questionId,this.requestParams={key:"U4DMV*8nvpm3EOpvf69Rxw((",site:"stackoverflow",filter:"withbody",order:"desc",sort:"votes"};var e=this.requestUrl+"?"+this.getQueryString(this.requestParams),t=this;fetch(e).then(function(e){200===e.status?e.json().then(function(e){"object"===typeof e&&e.hasOwnProperty("items")&&Array.isArray(e.items)&&e.items.length>0?(t.setState({question:e.items[0]}),t.getAnswers()):t.setState({isEmpty:!0,isLoading:!1})}):t.setState({isError:!0,isLoading:!1})}).catch(function(){t.setState({isError:!0,isLoading:!1})})}},{key:"getAnswers",value:function(){this.requestUrl+="/answers";var e=this.requestUrl+"?"+this.getQueryString(this.requestParams),t=this;fetch(e).then(function(e){200===e.status?e.json().then(function(e){"object"===typeof e&&e.hasOwnProperty("items")&&Array.isArray(e.items)&&e.items.length>0?t.setState({answers:e.items,isLoading:!1}):t.setState({isEmpty:!0,isLoading:!1})}):t.setState({isError:!0,isLoading:!1})}).catch(function(){t.setState({isError:!0,isLoading:!1})})}},{key:"getQueryString",value:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}},{key:"decodeHtmlEntities",value:function(e){if(void 0===e||""===e)return"";var t=(new DOMParser).parseFromString(e,"text/html"),a="";return"string"===typeof t.documentElement.textContent&&(a=t.documentElement.textContent),a=a.replace("&quot;",'"')}},{key:"timeToShortDate",value:function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"numeric",day:"numeric"})}},{key:"render",value:function(){var e=this,t=null;return this.state.isLoading&&(t=n.createElement("div",{className:x.a.pageMessageContainer},n.createElement(E.a,null))),this.state.isError&&(t=n.createElement("div",{className:x.a.pageMessageContainer},n.createElement("div",{className:x.a.pageMessageError},"Error Occurred Getting Questions"))),this.state.isEmpty&&(t=n.createElement("div",{className:x.a.pageMessageContainer},n.createElement("div",{className:x.a.pageMessageWarning},"No Questions Found"))),this.state.isEmpty||this.state.isError||this.state.isLoading||(t=n.createElement("div",{className:f.a.answersContainer},n.createElement("div",{className:f.a.answerQuestionContainer},n.createElement("div",{className:f.a.questionTitle},this.decodeHtmlEntities(this.state.question.title)),n.createElement("div",null,n.createElement("span",{className:f.a.questionCaption},"Number of Views: "),n.createElement("span",{className:f.a.questionInfo},this.state.question.view_count)),n.createElement("div",null,n.createElement("span",{className:f.a.questionCaption},"Score: "),n.createElement("span",{className:f.a.questionInfo},this.state.question.score)),n.createElement("div",null,n.createElement("span",{className:f.a.questionCaption},"Tags: "),n.createElement("span",{className:f.a.questionInfo},this.state.question.tags.join())),n.createElement("div",null,n.createElement("span",{className:f.a.questionCaption},"Asked: "),n.createElement("span",{className:f.a.questionInfo},this.timeToShortDate(this.state.question.creation_date))),n.createElement("div",{className:f.a.questionBody,dangerouslySetInnerHTML:{__html:this.state.question.body}||""})),this.state.answers.map(function(t){return n.createElement("div",{className:t.is_accepted?f.a.answerAccepted:f.a.answerNotAccepted,key:t.answer_id},n.createElement("div",null,n.createElement("span",{className:f.a.answerCaption},"Score: "),n.createElement("span",{className:f.a.answerInfo},t.score)),n.createElement("div",null,n.createElement("span",{className:f.a.answerCaption},"Answered: "),n.createElement("span",{className:f.a.answerInfo},e.timeToShortDate(t.creation_date))),n.createElement("div",{className:f.a.answerCaption},"Answer:"),n.createElement("div",{className:f.a.answerBody,dangerouslySetInnerHTML:{__html:t.body}||""}))}))),n.createElement("div",{className:x.a.page},n.createElement("div",{className:x.a.pageTitle},"Stack Exchange Answers"),n.createElement("div",{className:x.a.mainCard},t))}}]),t}(n.Component),b=a(41),w=a.n(b),S=a(28),P=a.n(S),N=a(18),k=a(88),C=a(43),q=a.n(C),j=a(42),O=a.n(j),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isSearchButtonDisabled:!0,previousSearchText:null,searchText:""},a.handleChange=a.handleChange.bind(Object(N.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=this,a=e.target.value;this.setState({searchText:a},function(){t.setState(function(e){return{isSearchButtonDisabled:0===e.searchText.length||e.searchText===e.previousSearchText}})})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.isSearchButtonDisabled||(this.setState({isSearchButtonDisabled:!0,previousSearchText:this.state.searchText}),this.props.history.push({pathname:"/questions",search:"?title="+encodeURIComponent(this.state.searchText)}))}},{key:"render",value:function(){return n.createElement("div",null,n.createElement("form",{className:O.a.searchBox,onSubmit:this.handleSubmit},n.createElement("input",{autoFocus:!0,type:"search",value:this.state.searchText,onChange:this.handleChange}),n.createElement(k.a,{"aria-label":"search",color:"primary",disabled:this.state.isSearchButtonDisabled,href:"#",onClick:this.handleSubmit},n.createElement(q.a,null))))}}]),t}(n.Component),T=Object(p.f)(A),M=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:P.a.header},n.createElement("img",{src:w.a,className:P.a.logo,alt:"logo"}),n.createElement("div",{className:P.a.headerTitle},"React TypeScript Example"),n.createElement("div",{className:P.a.searchBoxContainer},n.createElement(T,null)))}}]),t}(n.Component),Q=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:x.a.page},n.createElement("div",{className:x.a.pageTitle},"Stack Exchange Search"),n.createElement("div",{className:x.a.mainCard},n.createElement("p",null,"This will search Stack Exchange questions for given title text."),n.createElement("p",null,"Enter your search text and click the icon or press the Enter key. A list of matching questions will be shown."),n.createElement("p",null,"After that, you can click on a question to see the answers."),n.createElement("p",null,"Full source available at"," ",n.createElement("a",{href:"https://github.com/reactjsexample/react-typescript-example"},"https://github.com/reactjsexample/react-typescript-example")),n.createElement("h3",null,"Written in React 16.9.0 with TypeScript"),n.createElement("h4",null,"By JC Lango")))}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:x.a.page},n.createElement("div",{className:x.a.pageTitle},"Page Not Found"),n.createElement("div",{className:x.a.mainCard},n.createElement("p",null,"The requested page at this address is not found."," ",n.createElement("a",{href:"/"},"Home Page"))))}}]),t}(n.Component),L=a(48),X=a.n(L),U=a(47),F=a.n(U),B=a(46),D=a.n(B),R=a(45),H=a.n(R),W=a(33),G=a.n(W),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).pageBaseUrl="/questions",a.requestedPage="",a.title="",a.unlisten=void 0,a.state={currentPage:"",isEmpty:!1,isError:!1,isLoading:!0,isMorePages:!1,questions:[]},a.handleFirstPage=a.handleFirstPage.bind(Object(N.a)(a)),a.handleNextPage=a.handleNextPage.bind(Object(N.a)(a)),a.handlePreviousPage=a.handlePreviousPage.bind(Object(N.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.readUrlQueryString(this.props.location.search),this.getQuestions()}},{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen(function(t){e.readUrlQueryString(t.search),e.getQuestions()})}},{key:"readUrlQueryString",value:function(e){var t=H.a.parse(e);"string"===typeof t.title&&(this.title=t.title),"string"===typeof t.page&&(this.requestedPage=t.page)}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"getQuestions",value:function(){this.setState({isEmpty:!1,isError:!1,isLoading:!0});var e={key:"U4DMV*8nvpm3EOpvf69Rxw((",title:this.title||"",answers:"1",site:"stackoverflow",filter:"withbody",page:this.requestedPage||"1",order:"desc",sort:"votes"},t="https://api.stackexchange.com/2.2/search/advanced?"+this.getQueryString(e),a=this;fetch(t).then(function(t){200===t.status?t.json().then(function(t){"object"===typeof t&&t.hasOwnProperty("items")&&Array.isArray(t.items)&&t.items.length>0?a.setState({currentPage:e.page,isLoading:!1,isMorePages:t.has_more,questions:t.items}):a.setState({isEmpty:!0,isLoading:!1})}):a.setState({isError:!0,isLoading:!1})}).catch(function(){a.setState({isError:!0,isLoading:!1})})}},{key:"getQueryString",value:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}},{key:"decodeHtmlEntities",value:function(e){if(void 0===e||""===e)return"";var t=(new DOMParser).parseFromString(e,"text/html"),a="";return"string"===typeof t.documentElement.textContent&&(a=t.documentElement.textContent),a=a.replace("&quot;",'"')}},{key:"handleFirstPage",value:function(){this.requestedPage="1",this.navigateToPage()}},{key:"handleNextPage",value:function(){this.requestedPage=(parseInt(this.state.currentPage,10)+1).toString(),this.navigateToPage()}},{key:"handlePreviousPage",value:function(){this.requestedPage=(parseInt(this.state.currentPage,10)-1).toString(),this.navigateToPage()}},{key:"navigateToPage",value:function(){var e={title:this.title,page:this.requestedPage};this.props.history.push(this.pageBaseUrl+"?"+this.getQueryString(e))}},{key:"render",value:function(){var e=this,t=null;return this.state.isLoading&&(t=n.createElement("div",{className:x.a.pageMessageContainer},n.createElement(E.a,null))),this.state.isError&&(t=n.createElement("div",{className:x.a.pageMessageContainer},n.createElement("div",{className:x.a.pageMessageError},"Error Occurred Getting Questions"))),this.state.isEmpty&&(t=n.createElement("div",{className:x.a.pageMessageContainer},n.createElement("div",{className:x.a.pageMessageWarning},"No Questions Found"))),this.state.isEmpty||this.state.isError||this.state.isLoading||(t=n.createElement("div",null,n.createElement("ul",null,this.state.questions.map(function(t){return n.createElement("li",{key:t.question_id},n.createElement("a",{href:"/react-typescript-example/#/answers/"+t.question_id,className:G.a.dummy,key:t.question_id},e.decodeHtmlEntities(t.title)))})),n.createElement("div",{className:G.a.pageFooter},n.createElement("div",{className:G.a.pageNavigationPanel},n.createElement("span",null,"Page ",this.state.currentPage),n.createElement(k.a,{disabled:"1"===this.state.currentPage,onClick:this.handleFirstPage,href:"#",title:"Go to First Page"},n.createElement(D.a,null)),n.createElement(k.a,{disabled:"1"===this.state.currentPage,onClick:this.handlePreviousPage,href:"#",title:"Go to Previous Page"},n.createElement(F.a,null)),n.createElement(k.a,{disabled:!this.state.isMorePages,onClick:this.handleNextPage,href:"#",title:"Go to Next Page"},n.createElement(X.a,null)))))),n.createElement("div",{className:x.a.page},n.createElement("div",{className:x.a.pageTitle},"Stack Exchange Questions"),n.createElement("div",{className:x.a.mainCard},t))}}]),t}(n.Component),V=Object(p.f)(J),z=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:g.a.App},n.createElement(h.a,{basename:"/react-typescript-example"},n.createElement(M,null),n.createElement("div",null,n.createElement(p.c,null,n.createElement(p.a,{exact:!0,path:"/",component:Q}),n.createElement(p.a,{path:"/answers/:id",component:_}),n.createElement(p.a,{path:"/questions",component:V}),n.createElement(p.a,{component:I})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.37132406.chunk.js.map