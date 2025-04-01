"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1381],{7384:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"frontend/components/layout/intro","title":"Layout","description":"NavBar","source":"@site/docs/frontend/components/layout/intro.md","sourceDirName":"frontend/components/layout","slug":"/frontend/components/layout/intro","permalink":"/itcweeb-Docs/docs/frontend/components/layout/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/components/layout/intro.md","tags":[],"version":"current","frontMatter":{"title":"Layout"}}');var o=t(4848),a=t(8453);const s={title:"Layout"},i="Gu\xeda de Componentes de Layout",c={},d=[{value:"NavBar",id:"navbar",level:2},{value:"Sidebar",id:"sidebar",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,a.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"gu\xeda-de-componentes-de-layout",children:"Gu\xeda de Componentes de Layout"})}),"\n",(0,o.jsx)(e.h2,{id:"navbar",children:"NavBar"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import { NavBar } from '@/components/layout/NavBar'\r\n\r\n// Uso b\xe1sico\r\n<NavBar\r\n  user={currentUser}\r\n  onLogout={handleLogout}\r\n  notifications={userNotifications}\r\n/>\r\n\r\n// Props necesarias\r\ninterface NavBarProps {\r\n  user: {\r\n    name: string\r\n    avatar: string\r\n    role: string\r\n  }\r\n  onLogout: () => void\r\n  notifications?: Notification[]\r\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"sidebar",children:"Sidebar"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import { AppSidebar } from '@/components/layout/sidebar/AppSidebar'\r\n\r\n// Uso b\xe1sico\r\n<AppSidebar\r\n  items={navigationItems}\r\n  currentPath={router.pathname}\r\n  onNavigate={handleNavigation}\r\n/>\r\n\r\n// Estructura de navigationItems\r\ninterface NavigationItem {\r\n  id: string\r\n  label: string\r\n  icon: ReactNode\r\n  path: string\r\n  children?: NavigationItem[]\r\n}\n"})})]})}function l(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>i});var r=t(6540);const o={},a=r.createContext(o);function s(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);