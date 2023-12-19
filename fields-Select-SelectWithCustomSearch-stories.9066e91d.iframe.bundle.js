"use strict";(self.webpackChunk_mtes_mct_monitor_ui_root=self.webpackChunk_mtes_mct_monitor_ui_root||[]).push([[9651],{"./stories/fields/Select/SelectWithCustomSearch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SelectWithCustomSearch:()=>SelectWithCustomSearch,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_components_Output__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/components/Output.tsx"),_storybook_components_StoryDecorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/components/StoryDecorator.tsx"),_storybook_data_species_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/data/species.json"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const args={disabled:!1,error:"",isCleanable:!0,isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,label:"A select",name:"mySelect",options:[],optionValueKey:"code",placeholder:"Pick an option",value:void 0,virtualized:!0},__WEBPACK_DEFAULT_EXPORT__={title:"Fields/Select",component:_src__WEBPACK_IMPORTED_MODULE_4__.Ph,argTypes:{value:{control:"inline-radio",options:["FIRST_OPTION","SECOND_OPTION","THIRD_OPTION","LOREM_IPSUM"]}},args,decorators:[(0,_storybook_components_StoryDecorator__WEBPACK_IMPORTED_MODULE_2__.N)({hasDarkMode:!0})]};function SelectWithCustomSearch(props){const optionsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_storybook_data_species_json__WEBPACK_IMPORTED_MODULE_3__.map((specy=>({label:`${specy.code} - ${specy.name}`,value:specy})))),customSearchRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new _src__WEBPACK_IMPORTED_MODULE_4__.Ny(optionsRef.current,[{name:"value.code",weight:.9},{name:"value.name",weight:.1}],{isStrict:!0})),[outputValue,setOutputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("∅"),{controlledOnChange,controlledValue}=(0,_src__WEBPACK_IMPORTED_MODULE_4__.J2)(props.value,setOutputValue);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Ph,{...props,customSearch:customSearchRef.current,onChange:controlledOnChange,options:optionsRef.current,value:controlledValue}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("em",{children:["Loads a pre-shuffled list of ",optionsRef.current.length," species in order to check performances."]})}),"∅"!==outputValue&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_components_Output__WEBPACK_IMPORTED_MODULE_1__.r,{value:outputValue})]})}SelectWithCustomSearch.parameters={...SelectWithCustomSearch.parameters,docs:{...SelectWithCustomSearch.parameters?.docs,source:{originalSource:"function SelectWithCustomSearch(props: SelectProps<Specy>) {\n  const optionsRef = useRef((SPECIES as Specy[]).map(specy => ({\n    label: `${specy.code} - ${specy.name}`,\n    value: specy\n  })));\n  const customSearchRef = useRef(new CustomSearch(optionsRef.current, [{\n    name: 'value.code',\n    weight: 0.9\n  }, {\n    name: 'value.name',\n    weight: 0.1\n  }], {\n    isStrict: true\n  }));\n  const [outputValue, setOutputValue] = useState<Specy | undefined | '∅'>('∅');\n  const {\n    controlledOnChange,\n    controlledValue\n  } = useFieldControl(props.value, setOutputValue);\n  return <>\n      <Select {...props} customSearch={customSearchRef.current} onChange={controlledOnChange} options={optionsRef.current} value={controlledValue} />\n      <div>\n        <em>Loads a pre-shuffled list of {optionsRef.current.length} species in order to check performances.</em>\n      </div>\n\n      {outputValue !== '∅' && <Output value={outputValue} />}\n    </>;\n}",...SelectWithCustomSearch.parameters?.docs?.source}}};const __namedExportsOrder=["SelectWithCustomSearch"];try{SelectWithCustomSearch.displayName="SelectWithCustomSearch",SelectWithCustomSearch.__docgenInfo={description:"",displayName:"SelectWithCustomSearch",props:{baseContainer:{defaultValue:null,description:"Used to pass something else than `window.document` as a base container to attach global events listeners.",name:"baseContainer",required:!1,type:{name:"HTMLDivElement | Document | null"}},customSearch:{defaultValue:null,description:"",name:"customSearch",required:!1,type:{name:"CustomSearch<Option<Specy>>"}},customSearchMinQueryLength:{defaultValue:null,description:"Minimum search query length required to trigger custom search filtering.",name:"customSearchMinQueryLength",required:!1,type:{name:"number"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},isCleanable:{defaultValue:null,description:"",name:"isCleanable",required:!1,type:{name:"boolean"}},isErrorMessageHidden:{defaultValue:null,description:"",name:"isErrorMessageHidden",required:!1,type:{name:"boolean"}},isLabelHidden:{defaultValue:null,description:"",name:"isLabelHidden",required:!1,type:{name:"boolean"}},isLight:{defaultValue:null,description:"",name:"isLight",required:!1,type:{name:"boolean"}},isUndefinedWhenDisabled:{defaultValue:null,description:"",name:"isUndefinedWhenDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((nextValue: Specy) => Promisable<void>)"}},optionValueKey:{defaultValue:null,description:"",name:"optionValueKey",required:!1,type:{name:"enum",value:[{value:'"name"'},{value:'"code"'}]}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option<Specy>[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Specy"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/fields/Select/SelectWithCustomSearch.stories.tsx#SelectWithCustomSearch"]={docgenInfo:SelectWithCustomSearch.__docgenInfo,name:"SelectWithCustomSearch",path:"stories/fields/Select/SelectWithCustomSearch.stories.tsx#SelectWithCustomSearch"})}catch(__react_docgen_typescript_loader_error){}}}]);