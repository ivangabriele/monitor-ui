"use strict";(self.webpackChunk_mtes_mct_monitor_ui_root=self.webpackChunk_mtes_mct_monitor_ui_root||[]).push([[6402],{"./.storybook/components/StoryDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>generateStoryDecorator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_GlobalDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/components/GlobalDecorator.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function generateStoryDecorator({fixedWidth,hasDarkMode=!1,withNewWindowButton=!1}={}){return function StoryDecorator(Story,{args}){const newWindowRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[isNewWindowOpen,setIsNewWindowOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),style=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...fixedWidth?{width:`${fixedWidth}px`}:{},...hasDarkMode?{backgroundColor:args.isLight?_src__WEBPACK_IMPORTED_MODULE_2__.C6.color.gainsboro:_src__WEBPACK_IMPORTED_MODULE_2__.C6.color.white}:{}})),[args.isLight]),{forceUpdate}=(0,_src__WEBPACK_IMPORTED_MODULE_2__.NW)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{forceUpdate()}),[forceUpdate]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[withNewWindowButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowButtonBox,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.zx,{accent:_src__WEBPACK_IMPORTED_MODULE_2__.Le.SECONDARY,onClick:()=>setIsNewWindowOpen(!0),size:_src__WEBPACK_IMPORTED_MODULE_2__.$u.SMALL,children:"OPEN IN NEW WINDOW"})}),!isNewWindowOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StoryBox,{style,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})}),withNewWindowButton&&isNewWindowOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.YO,{features:{height:600,width:800},onUnload:()=>setIsNewWindowOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowStoryWrapper,{ref:newWindowRef,Story,storyArgs:args})})]})}}function NewWindowStoryWrapperWithRef({Story,storyArgs},ref){const wrapperRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[isFirstRender,setIsFirstRender]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,(()=>wrapperRef.current));const newWindowContextProviderValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({newWindowContainerRef:wrapperRef.current?wrapperRef:{current:window.document.createElement("div")}})),[isFirstRender]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsFirstRender(!1)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowStoryBox,{ref:wrapperRef,children:!isFirstRender&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.xo.Provider,{value:newWindowContextProviderValue,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_GlobalDecorator__WEBPACK_IMPORTED_MODULE_1__.yw,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowStory,{Story,storyArgs})})})})}NewWindowStoryWrapperWithRef.displayName="NewWindowStoryWrapperWithRef";const NewWindowStoryWrapper=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(NewWindowStoryWrapperWithRef);function NewWindowStory({Story,storyArgs}){const{newWindowContainerRef}=(0,_src__WEBPACK_IMPORTED_MODULE_2__.dG)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{args:{...storyArgs,baseContainer:newWindowContainerRef.current}})}NewWindowStory.displayName="NewWindowStory";const StoryBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
  height: 100%;
  padding: 16px;
  width: 100%;
`,NewWindowButtonBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
  position: fixed;
  right: 16px;
  top: 16px;
`,NewWindowStoryBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
  height: 100%;
  padding: 16px;
  width: 100%;
`;try{generateStoryDecorator.displayName="generateStoryDecorator",generateStoryDecorator.__docgenInfo={description:"",displayName:"generateStoryDecorator",props:{fixedWidth:{defaultValue:null,description:"",name:"fixedWidth",required:!1,type:{name:"number"}},hasDarkMode:{defaultValue:{value:"false"},description:"",name:"hasDarkMode",required:!1,type:{name:"boolean"}},withNewWindowButton:{defaultValue:{value:"false"},description:"",name:"withNewWindowButton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/StoryDecorator.tsx#generateStoryDecorator"]={docgenInfo:generateStoryDecorator.__docgenInfo,name:"generateStoryDecorator",path:".storybook/components/StoryDecorator.tsx#generateStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./stories/elements/Figure.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Figure:()=>_Figure,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_components_StoryDecorator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/components/StoryDecorator.tsx"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/Figure",component:_src__WEBPACK_IMPORTED_MODULE_1__.Bc,argTypes:{},args:{},decorators:[(0,_storybook_components_StoryDecorator__WEBPACK_IMPORTED_MODULE_0__.N)()]};function _Figure(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"Both numbers should have exactly the same width:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Bc,{...props,children:"0123"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src__WEBPACK_IMPORTED_MODULE_1__.Bc,{...props,children:"4567"})})})]})}_Figure.displayName="_Figure",_Figure.parameters={..._Figure.parameters,docs:{..._Figure.parameters?.docs,source:{originalSource:"function _Figure(props: FigureProps) {\n  return <div>\n      <p>Both numbers should have exactly the same width:</p>\n\n      <p>\n        <code>\n          <Figure {...props}>0123</Figure>\n        </code>\n      </p>\n      <p>\n        <code>\n          <Figure {...props}>4567</Figure>\n        </code>\n      </p>\n    </div>;\n}",..._Figure.parameters?.docs?.source}}};const __namedExportsOrder=["_Figure"];try{_Figure.displayName="_Figure",_Figure.__docgenInfo={description:"",displayName:"_Figure",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/elements/Figure.stories.tsx#_Figure"]={docgenInfo:_Figure.__docgenInfo,name:"_Figure",path:"stories/elements/Figure.stories.tsx#_Figure"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=elements-Figure-stories.bd63a2ad.iframe.bundle.js.map