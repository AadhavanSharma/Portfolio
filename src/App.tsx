import { lazy, Suspense } from 'react'
import LoadingPage from './components/loading-page'
import { AnimatePresence, motion } from 'framer-motion';

function delayForDemo<T>(promise: Promise<T>): Promise<T> {
  return new Promise<void>(resolve => {
    setTimeout(resolve, 500);
  }).then(() => promise);
}

const Layout = lazy(() => delayForDemo(import('./components/layout')));

const App:React.FC =()=> {
  return (
    <Suspense fallback = {<ConditionalPage/>}>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
          <Layout/>
      </motion.div>
    </Suspense>
  )
}

const ConditionalPage = ()=>{
  return (
    <AnimatePresence>
      <LoadingPage/>
    </AnimatePresence>
  )
}

export default App
