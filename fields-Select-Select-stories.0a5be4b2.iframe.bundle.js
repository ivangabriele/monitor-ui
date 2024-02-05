"use strict";(self.webpackChunk_mtes_mct_monitor_ui_root=self.webpackChunk_mtes_mct_monitor_ui_root||[]).push([[9540],{"./stories/fields/Select/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Select:()=>_Select,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_components_Output__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/components/Output.tsx"),_storybook_components_StoryDecorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/components/StoryDecorator.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/constants.ts"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const args={disabled:!1,error:"",isCleanable:!0,isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"A select",name:"mySelect",options:[{label:"First Option",value:"FIRST_OPTION",isDisabled:!0},{label:"Second Option",value:"SECOND_OPTION",isDisabled:!1},{label:"Third Option",value:"THIRD_OPTION",isDisabled:!1},{label:_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.n,value:"LOREM_IPSUM",isDisabled:!1}],placeholder:"Pick an option",searchable:!1,value:void 0,virtualized:!1},__WEBPACK_DEFAULT_EXPORT__={title:"Fields/Select",component:_src__WEBPACK_IMPORTED_MODULE_4__.Ph,argTypes:{value:{control:"inline-radio",options:["FIRST_OPTION","SECOND_OPTION","THIRD_OPTION","LOREM_IPSUM"]}},args,decorators:[(0,_storybook_components_StoryDecorator__WEBPACK_IMPORTED_MODULE_2__.N)({hasDarkMode:!0,withNewWindowButton:!0})]};function _Select(props){const[outputValue,setOutputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("∅"),{controlledOnChange,controlledValue}=(0,_src__WEBPACK_IMPORTED_MODULE_4__.J2)(props.value,setOutputValue);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Ph,{...props,onChange:controlledOnChange,value:controlledValue}),"∅"!==outputValue&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_components_Output__WEBPACK_IMPORTED_MODULE_1__.r,{value:outputValue})]})}_Select.parameters={..._Select.parameters,docs:{..._Select.parameters?.docs,source:{originalSource:"function _Select(props: SelectProps) {\n  const [outputValue, setOutputValue] = useState<any>('∅');\n  const {\n    controlledOnChange,\n    controlledValue\n  } = useFieldControl(props.value, setOutputValue);\n  return <>\n      <Select {...props} onChange={controlledOnChange} value={controlledValue} />\n\n      {outputValue !== '∅' && <Output value={outputValue} />}\n    </>;\n}",..._Select.parameters?.docs?.source}}};const __namedExportsOrder=["_Select"];try{_Select.displayName="_Select",_Select.__docgenInfo={description:"",displayName:"_Select",props:{baseContainer:{defaultValue:null,description:"Used to pass something else than `window.document` as a base container to attach global events listeners.",name:"baseContainer",required:!1,type:{name:"HTMLDivElement | Document | null"}},customSearch:{defaultValue:null,description:"",name:"customSearch",required:!1,type:{name:"CustomSearch<Option<string>>"}},customSearchMinQueryLength:{defaultValue:null,description:"Minimum search query length required to trigger custom search filtering.",name:"customSearchMinQueryLength",required:!1,type:{name:"number"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},isCleanable:{defaultValue:null,description:"",name:"isCleanable",required:!1,type:{name:"boolean"}},isErrorMessageHidden:{defaultValue:null,description:"",name:"isErrorMessageHidden",required:!1,type:{name:"boolean"}},isLabelHidden:{defaultValue:null,description:"",name:"isLabelHidden",required:!1,type:{name:"boolean"}},isLight:{defaultValue:null,description:"",name:"isLight",required:!1,type:{name:"boolean"}},isUndefinedWhenDisabled:{defaultValue:null,description:"",name:"isUndefinedWhenDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((nextValue: string) => Promisable<void>)"}},optionValueKey:{defaultValue:null,description:"",name:"optionValueKey",required:!1,type:{name:'number | unique symbol | "length" | "toString" | "concat" | "slice" | "indexOf" | "lastIndexOf" | "includes" | "at" | "link" | "search" | "big" | "small" | "sub" | "sup" | "charAt" | ... 34 more ...'}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option<string>[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/fields/Select/Select.stories.tsx#_Select"]={docgenInfo:_Select.__docgenInfo,name:"_Select",path:"stories/fields/Select/Select.stories.tsx#_Select"})}catch(__react_docgen_typescript_loader_error){}},"./.storybook/components/Output.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Output});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Output({label="Output",value}){const valueAsString=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>void 0===value?"undefined":JSON.stringify(value,null,2)),[value]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Title,{children:`${label} (type: ${"object"==typeof value?value.constructor.name:typeof value})`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Value,{className:"mui-output","data-cy":label,children:valueAsString})]})}const Title=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h3`
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
`;try{generateStoryDecorator.displayName="generateStoryDecorator",generateStoryDecorator.__docgenInfo={description:"",displayName:"generateStoryDecorator",props:{fixedWidth:{defaultValue:null,description:"",name:"fixedWidth",required:!1,type:{name:"number"}},hasDarkMode:{defaultValue:{value:"false"},description:"",name:"hasDarkMode",required:!1,type:{name:"boolean"}},withNewWindowButton:{defaultValue:{value:"false"},description:"",name:"withNewWindowButton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/StoryDecorator.tsx#generateStoryDecorator"]={docgenInfo:generateStoryDecorator.__docgenInfo,name:"generateStoryDecorator",path:".storybook/components/StoryDecorator.tsx#generateStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./.storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>LOREM_IPSUM});const LOREM_IPSUM=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Vivamus sit amet purus justo.","Sed dapibus, turpis non laoreet consectetur, sapien elit varius lacus, dignissim tincidunt dui metus eget metus.","Etiam commodo, augue at condimentum semper, dui sapien auctor urna, sit amet laoreet felis justo gravida purus.","Maecenas sagittis mollis erat eu pulvinar.","Donec pellentesque commodo mauris, ac lobortis justo vestibulum et.","Donec mattis maximus elit, id euismod leo faucibus hendrerit.","Sed aliquet, purus sed pulvinar cursus, velit dolor pretium est, eu mattis sem libero a nibh.","Curabitur diam urna, lacinia eu nulla at, mattis faucibus ligula.","Proin placerat accumsan placerat.","Etiam eget erat nisi."].join("")}}]);
//# sourceMappingURL=fields-Select-Select-stories.0a5be4b2.iframe.bundle.js.map