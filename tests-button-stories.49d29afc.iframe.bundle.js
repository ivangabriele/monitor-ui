"use strict";(self.webpackChunk_mtes_mct_monitor_ui_root=self.webpackChunk_mtes_mct_monitor_ui_root||[]).push([[5189],{"./stories/tests/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_components_Output__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/components/Output.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Tests/Button",parameters:{options:{showPanel:!1}}};function Template(){const[outputValue,setOutputValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("∅");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:()=>setOutputValue("A button"),children:"A button"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.zx,{"aria-label":"A button aria label",onClick:()=>setOutputValue("A button aria label"),children:"A button with an aria label"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:()=>setOutputValue("A button title"),title:"A button title",children:"A button with a title"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("table",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tbody",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr",{"data-id":"0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:()=>setOutputValue("The first line button"),children:"The first line button"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr",{"data-id":"1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.zx,{"aria-label":"The second line button aria label",onClick:()=>setOutputValue("The second line button aria label"),children:"A second line button with an aria label"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr",{"data-id":"2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.zx,{onClick:()=>setOutputValue("The third line button title"),title:"The third line button title",children:"A third line button with a title"})})})]})}),"∅"!==outputValue&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_components_Output__WEBPACK_IMPORTED_MODULE_1__.r,{value:outputValue})]})}Template.parameters={...Template.parameters,docs:{...Template.parameters?.docs,source:{originalSource:"function Template() {\n  const [outputValue, setOutputValue] = useState<any>('∅');\n  return <>\n      <Button onClick={() => setOutputValue('A button')}>A button</Button>\n      <Button aria-label=\"A button aria label\" onClick={() => setOutputValue('A button aria label')}>\n        A button with an aria label\n      </Button>\n      <Button onClick={() => setOutputValue('A button title')} title=\"A button title\">\n        A button with a title\n      </Button>\n\n      <table>\n        <tbody>\n          <tr data-id=\"0\">\n            <td>\n              <Button onClick={() => setOutputValue('The first line button')}>The first line button</Button>\n            </td>\n          </tr>\n          <tr data-id=\"1\">\n            <td>\n              <Button aria-label=\"The second line button aria label\" onClick={() => setOutputValue('The second line button aria label')}>\n                A second line button with an aria label\n              </Button>\n            </td>\n          </tr>\n          <tr data-id=\"2\">\n            <td>\n              <Button onClick={() => setOutputValue('The third line button title')} title=\"The third line button title\">\n                A third line button with a title\n              </Button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      {outputValue !== '∅' && <Output value={outputValue} />}\n    </>;\n}",...Template.parameters?.docs?.source}}};const __namedExportsOrder=["Template"]},"./.storybook/components/Output.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Output});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Output({label="Output",value}){const valueAsString=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>void 0===value?"undefined":JSON.stringify(value,null,2)),[value]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Title,{children:`${label} (type: ${"object"==typeof value?value.constructor.name:typeof value})`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Value,{className:"mui-output","data-cy":label,children:valueAsString})]})}const Title=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h3`
  font-size: 100%;
  line-height: 1.3846;
  margin: 16px 0 8px 0;
`,Value=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.pre`
  background-color: #1e1e1e;
  color: #ffffff;
  margin: 0;
  padding: 8px;
`;try{Output.displayName="Output",Output.__docgenInfo={description:"",displayName:"Output",props:{label:{defaultValue:{value:"Output"},description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/components/Output.tsx#Output"]={docgenInfo:Output.__docgenInfo,name:"Output",path:".storybook/components/Output.tsx#Output"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=tests-button-stories.49d29afc.iframe.bundle.js.map