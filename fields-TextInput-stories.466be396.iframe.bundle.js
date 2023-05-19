"use strict";(self.webpackChunk_mtes_mct_monitor_ui_root=self.webpackChunk_mtes_mct_monitor_ui_root||[]).push([[6600],{"./.storybook/components/Output.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Output});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Output({value}){const valueAsString=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>void 0===value?"undefined":JSON.stringify(value,null,2)),[value]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Title,{children:`Output (type: ${"object"==typeof value?value.constructor.name:typeof value})`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Value,{className:"mui-output",children:valueAsString})]})}const Title=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h3`
  font-size: 100%;
  line-height: 1.3846;
  margin: 16px 0 8px 0;
`,Value=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.pre`
  background-color: #1e1e1e;
  color: #ffffff;
  margin: 0;
  padding: 8px;
`;try{Output.displayName="Output",Output.__docgenInfo={description:"",displayName:"Output",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/Output.tsx#Output"]={docgenInfo:Output.__docgenInfo,name:"Output",path:".storybook/components/Output.tsx#Output"})}catch(__react_docgen_typescript_loader_error){}},"./.storybook/components/Showcase/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Showcase});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Subtitle=styled_components_browser_esm.ZP.h3`
  color: ${p=>p.theme.color.gunMetal};
  font-size: 13px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
`;try{Subtitle.displayName="Subtitle",Subtitle.__docgenInfo={description:"",displayName:"Subtitle",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/Showcase/Subtitle.tsx#Subtitle"]={docgenInfo:Subtitle.__docgenInfo,name:"Subtitle",path:".storybook/components/Showcase/Subtitle.tsx#Subtitle"})}catch(__react_docgen_typescript_loader_error){}const Table=styled_components_browser_esm.ZP.table`
  font-size: 13px;

  > thead > tr {
    > td {
      border-right: solid 1px ${p=>p.theme.color.lightGray};
    }
    > th {
      color: ${p=>p.theme.color.gunMetal};
      font-weight: 500;
      padding: 0 28px 0 28px;
      text-align: left;
    }
  }
  > tbody > tr {
    > th {
      border-right: solid 1px ${p=>p.theme.color.lightGray};
      color: ${p=>p.theme.color.slateGray};
      font-weight: 400;
      padding: 12px 28px 0 0;
      text-align: left;
    }
    > td {
      padding: 12px 28px 0 28px;
    }
  }
`;try{Table.displayName="Table",Table.__docgenInfo={description:"",displayName:"Table",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLTableElement | null) => void) | RefObject<HTMLTableElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/Showcase/Table.tsx#Table"]={docgenInfo:Table.__docgenInfo,name:"Table",path:".storybook/components/Showcase/Table.tsx#Table"})}catch(__react_docgen_typescript_loader_error){}const Title=styled_components_browser_esm.ZP.h2`
  color: ${p=>p.theme.color.gunMetal};
  font-size: 22px;
  font-weight: bold;
  margin: 0;
`;try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/Showcase/Title.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:".storybook/components/Showcase/Title.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Line=styled_components_browser_esm.ZP.hr`
  margin: 20px 0 0;
`,Box=styled_components_browser_esm.ZP.div`
  > h2:not(:first-child),
  > h3:not(:first-child) {
    margin-top: 32px;
  }
`,Showcase=Object.assign((function RawShowcase(nativeProps){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Line,{}),(0,jsx_runtime.jsx)(Title,{children:"Showcase"}),(0,jsx_runtime.jsx)(Box,{...nativeProps})]})}),{Subtitle,Table});try{Showcase.displayName="Showcase",Showcase.__docgenInfo={description:"",displayName:"Showcase",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/Showcase/index.tsx#Showcase"]={docgenInfo:Showcase.__docgenInfo,name:"Showcase",path:".storybook/components/Showcase/index.tsx#Showcase"})}catch(__react_docgen_typescript_loader_error){}},"./.storybook/components/StoryDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>generateStoryDecorator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_GlobalDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/components/GlobalDecorator.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function generateStoryDecorator({fixedWidth,hasDarkMode=!1,withNewWindowButton=!1}={}){return function StoryDecorator(Story,{args}){const newWindowRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),[isNewWindowOpen,setIsNewWindowOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),style=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({...fixedWidth?{width:`${fixedWidth}px`}:{},...hasDarkMode?{backgroundColor:args.isLight?_src__WEBPACK_IMPORTED_MODULE_2__.C6.color.gainsboro:_src__WEBPACK_IMPORTED_MODULE_2__.C6.color.white}:{}})),[args.isLight]),{forceUpdate}=(0,_src__WEBPACK_IMPORTED_MODULE_2__.NW)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{forceUpdate()}),[forceUpdate]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[withNewWindowButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowButtonBox,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.zx,{accent:_src__WEBPACK_IMPORTED_MODULE_2__.Le.SECONDARY,onClick:()=>setIsNewWindowOpen(!0),size:_src__WEBPACK_IMPORTED_MODULE_2__.$u.SMALL,children:"OPEN IN NEW WINDOW"})}),!isNewWindowOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StoryBox,{style,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{})}),withNewWindowButton&&isNewWindowOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.YO,{features:{height:600,width:800},onUnload:()=>setIsNewWindowOpen(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowStoryWrapper,{ref:newWindowRef,Story})})]})}}function NewWindowStoryWrapperWithRef({Story},ref){const wrapperRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),[isFirstRender,setIsFirstRender]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,(()=>wrapperRef.current));const newWindowContextProviderValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({newWindowContainerRef:wrapperRef.current?wrapperRef:{current:window.document.createElement("div")}})),[isFirstRender]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsFirstRender(!1)}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowStoryBox,{ref:wrapperRef,children:!isFirstRender&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.xo.Provider,{value:newWindowContextProviderValue,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_GlobalDecorator__WEBPACK_IMPORTED_MODULE_1__.yw,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(NewWindowStory,{Story})})})})}NewWindowStoryWrapperWithRef.displayName="NewWindowStoryWrapperWithRef";const NewWindowStoryWrapper=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(NewWindowStoryWrapperWithRef);function NewWindowStory({Story}){const{newWindowContainerRef}=(0,_src__WEBPACK_IMPORTED_MODULE_2__.dG)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{args:{baseContainer:newWindowContainerRef.current}})}NewWindowStory.displayName="NewWindowStory";const StoryBox=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
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
`;try{generateStoryDecorator.displayName="generateStoryDecorator",generateStoryDecorator.__docgenInfo={description:"",displayName:"generateStoryDecorator",props:{fixedWidth:{defaultValue:null,description:"",name:"fixedWidth",required:!1,type:{name:"number"}},hasDarkMode:{defaultValue:{value:"false"},description:"",name:"hasDarkMode",required:!1,type:{name:"boolean"}},withNewWindowButton:{defaultValue:{value:"false"},description:"",name:"withNewWindowButton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/StoryDecorator.tsx#generateStoryDecorator"]={docgenInfo:generateStoryDecorator.__docgenInfo,name:"generateStoryDecorator",path:".storybook/components/StoryDecorator.tsx#generateStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./stories/fields/TextInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_TextInput:()=>_TextInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_components_Output__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/components/Output.tsx"),_storybook_components_Showcase__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/components/Showcase/index.tsx"),_storybook_components_StoryDecorator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/components/StoryDecorator.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const args={disabled:!1,error:"",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"A text input",name:"myTextInput",placeholder:"A text input placeholder",value:void 0},__WEBPACK_DEFAULT_EXPORT__={title:"Fields/TextInput",component:_src__WEBPACK_IMPORTED_MODULE_4__.oi,argTypes:{size:{control:"inline-radio",options:_src__WEBPACK_IMPORTED_MODULE_4__.$u},value:{control:"text"}},args,decorators:[(0,_storybook_components_StoryDecorator__WEBPACK_IMPORTED_MODULE_3__.N)({hasDarkMode:!0})]};function _TextInput(props){const[outputValue,setOutputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("∅"),{controlledOnChange,controlledValue}=(0,_src__WEBPACK_IMPORTED_MODULE_4__.J2)(props.value,setOutputValue,"");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.oi,{...props,onChange:controlledOnChange,value:controlledValue}),"∅"!==outputValue&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_components_Output__WEBPACK_IMPORTED_MODULE_1__.r,{value:outputValue}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_components_Showcase__WEBPACK_IMPORTED_MODULE_2__.$,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.oi,{Icon:_src__WEBPACK_IMPORTED_MODULE_4__.JO.Search,label:"A text input with an icon",name:"myTextInputWithAnIcon",placeholder:"A text input placeholder",size:_src__WEBPACK_IMPORTED_MODULE_4__.$u.LARGE})})]})}_TextInput.parameters={..._TextInput.parameters,docs:{..._TextInput.parameters?.docs,source:{originalSource:"function _TextInput(props: TextInputProps) {\n  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅');\n  const {\n    controlledOnChange,\n    controlledValue\n  } = useFieldControl(props.value, setOutputValue, '');\n  return <>\n      <TextInput {...props} onChange={controlledOnChange} value={controlledValue} />\n\n      {outputValue !== '∅' && <Output value={outputValue} />}\n\n      <Showcase>\n        <TextInput Icon={Icon.Search} label=\"A text input with an icon\" name=\"myTextInputWithAnIcon\" placeholder=\"A text input placeholder\" size={Size.LARGE} />\n      </Showcase>\n    </>;\n}",..._TextInput.parameters?.docs?.source}}};const __namedExportsOrder=["_TextInput"];try{_TextInput.displayName="_TextInput",_TextInput.__docgenInfo={description:"",displayName:"_TextInput",props:{Icon:{defaultValue:null,description:"",name:"Icon",required:!1,type:{name:"FunctionComponent<IconProps>"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},isErrorMessageHidden:{defaultValue:null,description:"",name:"isErrorMessageHidden",required:!1,type:{name:"boolean"}},isLabelHidden:{defaultValue:null,description:"",name:"isLabelHidden",required:!1,type:{name:"boolean"}},isLight:{defaultValue:null,description:"",name:"isLight",required:!1,type:{name:"boolean"}},isUndefinedWhenDisabled:{defaultValue:null,description:"",name:"isUndefinedWhenDisabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((nextValue: string) => Promisable<void>)"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"LARGE"'},{value:'"NORMAL"'},{value:'"SMALL"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/fields/TextInput.stories.tsx#_TextInput"]={docgenInfo:_TextInput.__docgenInfo,name:"_TextInput",path:"stories/fields/TextInput.stories.tsx#_TextInput"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=fields-TextInput-stories.466be396.iframe.bundle.js.map