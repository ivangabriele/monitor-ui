"use strict";(self.webpackChunk_mtes_mct_monitor_ui_root=self.webpackChunk_mtes_mct_monitor_ui_root||[]).push([[6337],{"./stories/formiks/FormikMultiRadio.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_FormikMultiRadio:()=>_FormikMultiRadio,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var formik__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),lodash_fp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/fp.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_storybook_components_Output__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/components/Output.tsx"),_storybook_components_StoryDecorator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/components/StoryDecorator.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Formiks/FormikMultiRadio",component:_src__WEBPACK_IMPORTED_MODULE_4__.Z,argTypes:{},args:{disabled:!1,isErrorMessageHidden:!1,isInline:!1,isLabelHidden:!1,isLight:!1,label:"Pick an option",name:"myMultiRadio",options:[{label:"First Option",value:"FIRST_OPTION"},{label:"Second Option",value:"SECOND_OPTION"},{label:"Third Option",value:"THIRD_OPTION"},{label:"A Very Very Long Option",value:"A_VERY_VERY_LONG_OPTION"}]},decorators:[(0,_storybook_components_StoryDecorator__WEBPACK_IMPORTED_MODULE_3__.N)({hasDarkMode:!0})]};function _FormikMultiRadio(props){const[outputValue,setOutputValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("∅"),key=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>props.name),[props.name]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_6__.J9,{initialValues:{},onSubmit:lodash_fp__WEBPACK_IMPORTED_MODULE_0__.noop,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__._K,{onChange:setOutputValue}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Z,{...props})]})},key),"∅"!==outputValue&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_components_Output__WEBPACK_IMPORTED_MODULE_2__.r,{value:outputValue})]})}_FormikMultiRadio.parameters={..._FormikMultiRadio.parameters,docs:{..._FormikMultiRadio.parameters?.docs,source:{originalSource:"function _FormikMultiRadio(props: FormikMultiRadioProps) {\n  const [outputValue, setOutputValue] = useState<{\n    mySelect?: string;\n  } | '∅'>('∅');\n  const key = useMemo(() => props.name, [props.name]);\n  return <>\n      <Formik key={key} initialValues={{}} onSubmit={noop}>\n        <>\n          <FormikEffect onChange={setOutputValue} />\n\n          <FormikMultiRadio {...props} />\n        </>\n      </Formik>\n\n      {outputValue !== '∅' && <Output value={outputValue} />}\n    </>;\n}",..._FormikMultiRadio.parameters?.docs?.source}}};const __namedExportsOrder=["_FormikMultiRadio"];try{_FormikMultiRadio.displayName="_FormikMultiRadio",_FormikMultiRadio.__docgenInfo={description:"",displayName:"_FormikMultiRadio",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isErrorMessageHidden:{defaultValue:null,description:"",name:"isErrorMessageHidden",required:!1,type:{name:"boolean"}},isLabelHidden:{defaultValue:null,description:"",name:"isLabelHidden",required:!1,type:{name:"boolean"}},isLight:{defaultValue:null,description:"",name:"isLight",required:!1,type:{name:"boolean"}},isUndefinedWhenDisabled:{defaultValue:null,description:"",name:"isUndefinedWhenDisabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option<string>[]"}},isInline:{defaultValue:null,description:"",name:"isInline",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/formiks/FormikMultiRadio.stories.tsx#_FormikMultiRadio"]={docgenInfo:_FormikMultiRadio.__docgenInfo,name:"_FormikMultiRadio",path:"stories/formiks/FormikMultiRadio.stories.tsx#_FormikMultiRadio"})}catch(__react_docgen_typescript_loader_error){}},"./.storybook/components/Output.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Output});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Output({label="Output",value}){const valueAsString=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>void 0===value?"undefined":JSON.stringify(value,null,2)),[value]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Title,{children:`${label} (type: ${"object"==typeof value?value.constructor.name:typeof value})`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Value,{className:"mui-output","data-cy":label,children:valueAsString})]})}const Title=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h3`
  font-size: 100%;
  line-height: 1.3846;
  margin: 16px 0 8px 0;
`,Value=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.pre`
  background-color: #1e1e1e;
  color: #ffffff;
  margin: 0;
  padding: 8px;
`;try{Output.displayName="Output",Output.__docgenInfo={description:"",displayName:"Output",props:{label:{defaultValue:{value:"Output"},description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/Output.tsx#Output"]={docgenInfo:Output.__docgenInfo,name:"Output",path:".storybook/components/Output.tsx#Output"})}catch(__react_docgen_typescript_loader_error){}},"./.storybook/components/StoryDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>generateStoryDecorator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_GlobalDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/components/GlobalDecorator.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function generateStoryDecorator({fixedWidth,hasDarkMode=!1,withNewWindowButton=!1}={}){return function StoryDecorator(Story,{args}){const newWindowRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[isNewWindowOpen,setIsNewWindowOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),style=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...fixedWidth?{width:`${fixedWidth}px`}:{},...hasDarkMode?{backgroundColor:args.isLight?_src__WEBPACK_IMPORTED_MODULE_2__.C6.color.gainsboro:_src__WEBPACK_IMPORTED_MODULE_2__.C6.color.white}:{}})),[args.isLight]),{forceUpdate}=(0,_src__WEBPACK_IMPORTED_MODULE_2__.NW)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{forceUpdate()}),[forceUpdate]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[withNewWindowButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowButtonBox,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.zx,{accent:_src__WEBPACK_IMPORTED_MODULE_2__.Le.SECONDARY,onClick:()=>setIsNewWindowOpen(!0),size:_src__WEBPACK_IMPORTED_MODULE_2__.$u.SMALL,children:"OPEN IN NEW WINDOW"})}),!isNewWindowOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StoryBox,{style,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})}),withNewWindowButton&&isNewWindowOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.YO,{features:{height:600,width:800},onUnload:()=>setIsNewWindowOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowStoryWrapper,{ref:newWindowRef,Story,storyArgs:args})})]})}}function NewWindowStoryWrapperWithRef({Story,storyArgs},ref){const wrapperRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[isFirstRender,setIsFirstRender]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,(()=>wrapperRef.current));const newWindowContextProviderValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({newWindowContainerRef:wrapperRef.current?wrapperRef:{current:window.document.createElement("div")}})),[isFirstRender]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsFirstRender(!1)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowStoryBox,{ref:wrapperRef,children:!isFirstRender&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.xo.Provider,{value:newWindowContextProviderValue,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_GlobalDecorator__WEBPACK_IMPORTED_MODULE_1__.y,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowStory,{Story,storyArgs})})})})}NewWindowStoryWrapperWithRef.displayName="NewWindowStoryWrapperWithRef";const NewWindowStoryWrapper=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(NewWindowStoryWrapperWithRef);function NewWindowStory({Story,storyArgs}){const{newWindowContainerRef}=(0,_src__WEBPACK_IMPORTED_MODULE_2__.dG)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{args:{...storyArgs,baseContainer:newWindowContainerRef.current}})}NewWindowStory.displayName="NewWindowStory";const StoryBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
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
`;try{generateStoryDecorator.displayName="generateStoryDecorator",generateStoryDecorator.__docgenInfo={description:"",displayName:"generateStoryDecorator",props:{fixedWidth:{defaultValue:null,description:"",name:"fixedWidth",required:!1,type:{name:"number"}},hasDarkMode:{defaultValue:{value:"false"},description:"",name:"hasDarkMode",required:!1,type:{name:"boolean"}},withNewWindowButton:{defaultValue:{value:"false"},description:"",name:"withNewWindowButton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/StoryDecorator.tsx#generateStoryDecorator"]={docgenInfo:generateStoryDecorator.__docgenInfo,name:"generateStoryDecorator",path:".storybook/components/StoryDecorator.tsx#generateStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=formiks-FormikMultiRadio-stories.b8890dba.iframe.bundle.js.map