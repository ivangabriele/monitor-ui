import{br as d,j as a}from"./index-0nDB5Zzz.js";import{r as p}from"./index-CBqU2yxZ.js";import{O as f}from"./Output-Sfj1QWTd.js";import{M as O,A as e}from"./constants-D7cOJi0A.js";import{g as c}from"./generateStoryDecorator-jcZX8bPx.js";import"./_baseClone-CBkhujLI.js";import{u as T}from"./useFieldControl-oDxVSMc2.js";import"./isPlainObject-Dl0da9pc.js";import"./_commonjsHelpers-BosuxZz1.js";import"./mapValues-CZXAhdHD.js";import"./index-Ch9hqOxJ.js";import"./toNumber-BGTiNFDU.js";import"./StoryBox-BZYZ6up0.js";import"./fr_FR-CrxT__co.js";const v={...O,title:"Fields/Textarea",component:d,argTypes:{disabled:e.OPTIONAL_BOOLEAN,error:e.OPTIONAL_STRING,isErrorMessageHidden:e.OPTIONAL_BOOLEAN,isLabelHidden:e.OPTIONAL_BOOLEAN,isLight:e.OPTIONAL_BOOLEAN,isTransparent:e.OPTIONAL_BOOLEAN,isUndefinedWhenDisabled:e.OPTIONAL_BOOLEAN,onChange:e.NO_CONTROL_INPUT,readOnly:e.OPTIONAL_BOOLEAN,rows:e.NO_CONTROL,value:e.OPTIONAL_STRING},args:{disabled:!1,error:"",isErrorMessageHidden:!1,isLabelHidden:!1,isLight:!1,isTransparent:!1,isUndefinedWhenDisabled:!1,label:"A textarea",name:"myTextarea",placeholder:"A textarea placeholder",readOnly:!1,value:""},decorators:[c({box:{width:640},withBackgroundButton:!0})]};function n(r){const[t,u]=p.useState("∅"),{controlledOnChange:l,controlledValue:m}=T(r.value,u,"");return a.jsxs(a.Fragment,{children:[a.jsx(d,{...r,onChange:l,value:m}),t!=="∅"&&a.jsx(f,{value:t})]})}n.__docgenInfo={description:"",methods:[],displayName:"_Textarea",props:{disabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},error:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},isErrorMessageHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLabelHidden:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isLight:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isTransparent:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},isUndefinedWhenDisabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string | undefined) => Promisable<void>",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"nextValue"}],return:{name:"Promisable",elements:[{name:"void"}],raw:"Promisable<void>"}}},description:""},readOnly:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}};var i,s,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`function _Textarea(props: TextareaProps) {
  const [outputValue, setOutputValue] = useState<string | undefined | '∅'>('∅');
  const {
    controlledOnChange,
    controlledValue
  } = useFieldControl(props.value, setOutputValue, '');
  return <>
      <Textarea {...props} onChange={controlledOnChange} value={controlledValue} />

      {outputValue !== '∅' && <Output value={outputValue} />}
    </>;
}`,...(o=(s=n.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const V=["_Textarea"];export{n as _Textarea,V as __namedExportsOrder,v as default};
