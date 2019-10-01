(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{45:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));n(0);var a=n(61);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={id:"recipes",title:"Recipes",sidebar_label:"Recipes"},i=[{value:"Recipes for createContainer",id:"recipes-for-createcontainer",children:[{value:"useReducer (props)",id:"usereducer-props",children:[]},{value:"useReducer (embedded)",id:"usereducer-embedded",children:[]},{value:"useState (props)",id:"usestate-props",children:[]},{value:"useState (empty object)",id:"usestate-empty-object",children:[]},{value:"useState (custom actions)",id:"usestate-custom-actions",children:[]}]},{value:"Recipes for useTracked and useTrackedState",id:"recipes-for-usetracked-and-usetrackedstate",children:[{value:"useTrackedSelector",id:"usetrackedselector",children:[]},{value:"useTrackedByName (based on useState)",id:"usetrackedbyname-based-on-usestate",children:[]},{value:"useTrackedWithImmer (based on useState)",id:"usetrackedwithimmer-based-on-usestate",children:[]}]}],o={rightToc:i},u="wrapper";function d(e){var t=e.components,n=c(e,["components"]);return Object(a.b)(u,r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"React Tracked provides a primitive API,\nand there are various ways to use it for apps."),Object(a.b)("h2",{id:"recipes-for-createcontainer"},"Recipes for createContainer"),Object(a.b)("p",null,"The argument ",Object(a.b)("inlineCode",{parentName:"p"},"useValue")," in ",Object(a.b)("inlineCode",{parentName:"p"},"createContainer")," is so flexible\nand there are various usages."),Object(a.b)("h3",{id:"usereducer-props"},"useReducer (props)"),Object(a.b)("p",null,"This is the most typical usage.\nYou define a generic reducer and pass ",Object(a.b)("inlineCode",{parentName:"p"},"reducer")," and ",Object(a.b)("inlineCode",{parentName:"p"},"initialState")," as props."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(({ reducer, initialState, init }) => useReducer(reducer, initialState, init));\n\nconst reducer = ...;\n\nconst App = ({ initialState }) => (\n  <Provider reducer={reducer} initialState={initialState}>\n    ...\n  </Provider>\n);\n")),Object(a.b)("h3",{id:"usereducer-embedded"},"useReducer (embedded)"),Object(a.b)("p",null,"For most cases, you would have a static reducer.\nIn this case, define useValue with the reducer in advance.\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"initialState")," can be defined in useValue like the following example,\nor can be taken from props: ",Object(a.b)("inlineCode",{parentName:"p"},"({ initialState }) => useReducer(...)")),Object(a.b)("p",null,"This is good for TypeScript because the hooks returned by ",Object(a.b)("inlineCode",{parentName:"p"},"createContainer")," is already typed."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const reducer = ...;\nconst initialState = ...;\n\nconst {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(() => useReducer(reducer, initialState));\n\n\nconst App = () => (\n  <Provider>\n    ...\n  </Provider>\n);\n")),Object(a.b)("h3",{id:"usestate-props"},"useState (props)"),Object(a.b)("p",null,"If you don't need reducer, useState would be simpler."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(({ initialState }) => useState(initialState);\n\n\nconst App = ({ initialState }) => (\n  <Provider initialState={initialState}>\n    ...\n  </Provider>\n);\n")),Object(a.b)("h3",{id:"usestate-empty-object"},"useState (empty object)"),Object(a.b)("p",null,"You could even start with completely an empty object."),Object(a.b)("p",null,"This might not be TypeScript friendly. Although, you could do this: ",Object(a.b)("inlineCode",{parentName:"p"},"useState<State>({})")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(() => useState({});\n\n\nconst App = () => (\n  <Provider>\n    ...\n  </Provider>\n);\n")),Object(a.b)("h3",{id:"usestate-custom-actions"},"useState (custom actions)"),Object(a.b)("p",null,"Finally, you can use a custom hook.\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"update")," can be anything, so for example it can be a set of action functions."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const useValue = () => {\n  const [state, setState] = useState({ count1: 0, count2: 0 });\n  const increment1 = () => {\n    setCount(s => ({ ...s, count1: s.count1 + 1 });\n  };\n  const increment2 = () => {\n    setCount(s => ({ ...s, count2: s.count2 + 2 });\n  };\n  return [count, { increment1, increment2 }];\n};\n\nconst {\n  Provider,\n  useTracked,\n  // ...\n} = createContainer(useValue);\n\n\nconst App = () => (\n  <Provider>\n    ...\n  </Provider>\n);\n")),Object(a.b)("h2",{id:"recipes-for-usetracked-and-usetrackedstate"},"Recipes for useTracked and useTrackedState"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useTracked")," and ",Object(a.b)("inlineCode",{parentName:"p"},"useTrackedState")," hooks are useful as is,\nbut new hooks can also be created based on them."),Object(a.b)("h3",{id:"usetrackedselector"},"useTrackedSelector"),Object(a.b)("p",null,"Selector interface is useful to share selection logic.\nYou can create a selector hook with state usage tracking very easily."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const useTrackedSelector = selector => selector(useTrackedState());\n")),Object(a.b)("p",null,"Note: This is different from ",Object(a.b)("inlineCode",{parentName:"p"},"useSelector")," which has no tracking support\nand triggers re-render based on the ref equality of selected value."),Object(a.b)("h3",{id:"usetrackedbyname-based-on-usestate"},"useTrackedByName (based on useState)"),Object(a.b)("p",null,"Sometimes, you might want to select a state by its property name.\nHere's a custom hook to return a tuple ",Object(a.b)("inlineCode",{parentName:"p"},"[value, setValue]")," selected by a name."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const useTrackedByName = (name) => {\n  const [state, setState] = useTracked();\n  const update = useCallback((newVal) => {\n    setState(oldVal => ({\n      ...oldVal,\n      [name]: typeof newVal === 'function' ? newVal(oldVal[name]) : newVal,\n    }));\n  }, [name]);\n  return [state[name], update];\n};\n")),Object(a.b)("h3",{id:"usetrackedwithimmer-based-on-usestate"},"useTrackedWithImmer (based on useState)"),Object(a.b)("p",null,"Updating a property deep in a state object is troublesome.\nHere's a custom hook to use ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/immerjs/immer"}),"immer")," for setState."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import produce from 'immer';\n\nconst useTrackedWithImmer = () => {\n  const [state, setState] = useTracked();\n  const update = useCallback((updater) => {\n    setState(oldVal => produce(oldVal, updater));\n  }, []);\n  return [state, update];\n};\n")),Object(a.b)("p",null,"Note: This can also be done at ",Object(a.b)("inlineCode",{parentName:"p"},"createContainer"),"."))}d.isMDXComponent=!0}}]);