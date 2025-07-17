
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Import existing pages
import HomePage from '../app/(main)/page'
import PricingPage from '../app/(main)/pricing/page'
import ServicesPage from '../app/(main)/services/page'
import TulsaProcessServer from '../app/(main)/tulsa-process-server/page'

// Import existing SEO-optimized city pages
import GlenpoolProcessServer from '../app/(main)/seo/glenpool-process-server/page'
import BixbyProcessServer from '../app/(main)/seo/bixby-process-server/page'
import BrokenArrowProcessServer from '../app/(main)/seo/broken-arrow-process-server/page'

// Import NEW SEO-optimized city pages
import JenksProcessServer from '../app/(main)/seo/jenks-process-server/page'
import SandSpringsProcessServer from '../app/(main)/seo/sand-springs-process-server/page'
import OwassoProcessServer from '../app/(main)/seo/owasso-process-server/page'

// Import optimization components
import AdvancedAutomationMonitor from '../components/ui/advanced-automation-monitor'
import CloudflarePagesOptimizer from '../components/ui/cloudflare-pages-optimizer'
import ComprehensiveSEOAutomation from '../components/ui/comprehensive-seo-automation'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Advanced Optimization Components */}
        <AdvancedAutomationMonitor />
        <CloudflarePagesOptimizer 
          enableEdgeOptimization={true}
          enableCDNPrefetch={true}
          enableBuildOptimization={true}
        />
        <ComprehensiveSEOAutomization 
          enableSchemaMonitoring={true}
          enableContentFreshness={true}
          enablePerformanceTracking={true}
          enableKeywordTracking={true}
        />
        
        <Routes>
          {/* Main business pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tulsa-process-server" element={<TulsaProcessServer />} />
          
          {/* SEO-optimized city pages */}
          <Route path="/seo/glenpool-process-server" element={<GlenpoolProcessServer />} />
          <Route path="/seo/bixby-process-server" element={<BixbyProcessServer />} />
          <Route path="/seo/broken-arrow-process-server" element={<BrokenArrowProcessServer />} />
          
          {/* NEW SEO-optimized city pages for 50-mile radius coverage */}
          <Route path="/seo/jenks-process-server" element={<JenksProcessServer />} />
          <Route path="/seo/sand-springs-process-server" element={<SandSpringsProcessServer />} />
          <Route path="/seo/owasso-process-server" element={<OwassoProcessServer />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
