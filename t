warning: in the working copy of 'public/index.html', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/public/index.html b/public/index.html[m
[1mindex aa069f2..fd8322d 100644[m
[1m--- a/public/index.html[m
[1m+++ b/public/index.html[m
[36m@@ -29,6 +29,7 @@[m
   <body>[m
     <noscript>You need to enable JavaScript to run this app.</noscript>[m
     <div id="root"></div>[m
[32m+[m[32m    <div id="root-portal"></div>[m
     <!--[m
       This HTML file is a template.[m
       If you open it directly in the browser, you will see an empty page.[m
[1mdiff --git a/src/App.tsx b/src/App.tsx[m
[1mindex 4bfc592..3157efe 100644[m
[1m--- a/src/App.tsx[m
[1m+++ b/src/App.tsx[m
[36m@@ -15,6 +15,8 @@[m [mimport Calendar from '@components/sections/Calendar'[m
 import Map from '@components/sections/Map'[m
 import Contact from '@components/sections/Contact'[m
 import Share from '@components/sections/Share'[m
[32m+[m[32mimport Modal from '@shared/Modal'[m
[32m+[m[32mimport AttendCountModal from './components/AttendCountModal'[m
 [m
 const cx = classNames.bind(styles)[m
 [m
[36m@@ -83,9 +85,10 @@[m [mfunction App() {[m
       <Invitation message={invitation} />[m
       <ImageGallery images={galleryImages} />[m
       <Calendar date={date} />[m
[31m-      <Map location={location} />[m
[32m+[m[32m      {/* <Map location={location} /> */}[m
       <Contact groom={groom} bride={bride} />[m
       <Share gromeName={groom.name} brideName={bride.name} date={date} />[m
[32m+[m[32m      <AttendCountModal wedding={wedding} />[m
     </div>[m
   )[m
 }[m
[1mdiff --git a/src/components/shared/Modal.tsx b/src/components/shared/Modal.tsx[m
[1mindex 09f998b..225dd32 100644[m
[1m--- a/src/components/shared/Modal.tsx[m
[1m+++ b/src/components/shared/Modal.tsx[m
[36m@@ -6,7 +6,7 @@[m [mconst cx = classNames.bind(styles)[m
 [m
 interface ModalProps {[m
   open: boolean[m
[31m-  title: string[m
[32m+[m[32m  title?: string[m
   body: React.ReactNode[m
   rightButtonLabel?: string[m
   onRightButtonClick: () => void[m
[36m@@ -18,8 +18,8 @@[m [mexport default function Modal({[m
   open,[m
   title,[m
   body,[m
[31m-  rightButtonLabel = '닫기',[m
[31m-  leftButtonLabel = '확인',[m
[32m+[m[32m  rightButtonLabel = '확인',[m
[32m+[m[32m  leftButtonLabel = '닫기',[m
   onRightButtonClick,[m
   onLeftButtonClick,[m
 }: ModalProps) {[m
[1mdiff --git a/src/index.tsx b/src/index.tsx[m
[1mindex fd663d6..03ad8a0 100644[m
[1m--- a/src/index.tsx[m
[1m+++ b/src/index.tsx[m
[36m@@ -1,6 +1,7 @@[m
 import React from 'react'[m
 import ReactDOM from 'react-dom/client'[m
 import App from './App'[m
[32m+[m[32mimport { ModalContext } from './contexts/ModalContext'[m
 import reportWebVitals from './reportWebVitals'[m
 [m
 import './scss/global.scss'[m
[36m@@ -8,7 +9,9 @@[m [mimport './scss/global.scss'[m
 const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)[m
 root.render([m
   <React.StrictMode>[m
[31m-    <App />[m
[32m+[m[32m    <ModalContext>[m
[32m+[m[32m      <App />[m
[32m+[m[32m    </ModalContext>[m
   </React.StrictMode>,[m
 )[m
 [m
[1mdiff --git a/tsconfig.paths.json b/tsconfig.paths.json[m
[1mindex e31455e..54159db 100644[m
[1m--- a/tsconfig.paths.json[m
[1m+++ b/tsconfig.paths.json[m
[36m@@ -6,7 +6,8 @@[m
             "@components/*": ["src/components/*"],[m
             "@shared/*": ["src/components/shared/*"],[m
             "@models/*": ["src/models/*"],[m
[31m-            "@scss/*": ["src/scss/*"][m
[32m+[m[32m            "@scss/*": ["src/scss/*"],[m
[32m+[m[32m            "@contexts/*": ["src/contexts/*"][m
         }[m
     }[m
 }[m
\ No newline at end of file[m
