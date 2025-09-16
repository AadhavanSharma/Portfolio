import {motion} from 'framer-motion'
import { createPortal } from 'react-dom'

const LoadingPage: React.FC = () => {
  const loadingElement = (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className='bg-blue-900 border-4 min-w-screen min-h-screen flex items-center justify-center z-5000'>
        
        LoadingPage</div>
    </motion.div>
  );

  return createPortal(loadingElement, document.body as HTMLElement);
};

export default LoadingPage