
#!/usr/bin/env node

/**
 * Enhanced City Automation Script
 * Manages new city pages, schema validation, and sitemap updates
 */

const fs = require('fs');
const path = require('path');

// New cities to implement
const newCities = [
  {
    name: 'Owasso',
    slug: 'owasso-process-server',
    county: 'Tulsa/Rogers County',
    population: '36000',
    specialties: ['Northern Tulsa Metro', 'School District Service', 'Suburban Communities'],
    keywords: ['Owasso process server', 'northern Tulsa legal service', 'Owasso court documents']
  },
  {
    name: 'Claremore',
    slug: 'claremore-process-server', 
    county: 'Rogers County',
    population: '19000',
    specialties: ['Rogers County Seat', 'Will Rogers Heritage', 'Rural Areas'],
    keywords: ['Claremore process server', 'Rogers County legal documents', 'rural Oklahoma process serving']
  },
  {
    name: 'Coweta',
    slug: 'coweta-process-server',
    county: 'Wagoner County', 
    population: '10000',
    specialties: ['Wagoner County Service', 'Growing Community', 'Family Businesses'],
    keywords: ['Coweta process server', 'Wagoner County legal service', 'small town process serving']
  },
  {
    name: 'Catoosa',
    slug: 'catoosa-process-server',
    county: 'Rogers/Wagoner County',
    population: '8000',
    specialties: ['Port of Catoosa', 'Transportation Hub', 'Industrial Growth'],
    keywords: ['Catoosa process server', 'port area legal service', 'transportation legal documents']
  }
];

console.log('🚀 Enhanced City Automation Starting...');

// Generate unique FAQ questions for each city
function generateCityFAQs(city) {
  const baseQuestions = [
    `How quickly can you serve papers in ${city.name}?`,
    `What makes ${city.name} process serving unique?`,
    `Do you cover all of ${city.county} from ${city.name}?`,
    `Can you handle emergency service in ${city.name}?`,
    `What's your success rate for ${city.name} process serving?`
  ];

  const baseAnswers = [
    `We typically complete process serving in ${city.name} within 1-3 business days, with same-day service available for urgent documents throughout ${city.county}.`,
    `Our ${city.name} process servers understand the local community dynamics and ${city.specialties.join(', ')}, ensuring effective service delivery.`,
    `Yes, we provide comprehensive coverage of ${city.county} with ${city.name} as a key service area, reaching all residential and business locations.`,
    `Emergency process serving in ${city.name} is available with 2-4 hour service for critical legal deadlines throughout ${city.county}.`,
    `We maintain a 95%+ success rate for process serving in ${city.name} through local knowledge, multiple service attempts, and professional follow-through.`
  ];

  return { questions: baseQuestions, answers: baseAnswers };
}

// Validate schema markup across all pages
function validateSchemaMarkup() {
  console.log('🔍 Validating Schema Markup...');
  
  const schemaFiles = [
    'components/ui/schema.tsx',
    'components/BusinessSchema.tsx', 
    'components/ServiceSchema.tsx',
    'components/FAQSchema.tsx'
  ];

  let validationResults = [];

  schemaFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for required schema elements
      const hasLocalBusiness = content.includes('@type": "LocalBusiness"') || content.includes("@type': 'LocalBusiness'");
      const hasService = content.includes('@type": "Service"') || content.includes("@type': 'Service'");
      const hasFAQ = content.includes('@type": "FAQPage"') || content.includes("@type': 'FAQPage'");
      
      validationResults.push({
        file,
        hasLocalBusiness,
        hasService, 
        hasFAQ,
        valid: hasLocalBusiness || hasService || hasFAQ
      });
    }
  });

  console.log('✅ Schema Validation Results:', validationResults);
  return validationResults;
}

// Update sitemap with new city pages
function updateSitemap() {
  console.log('🗺️ Updating Sitemap...');
  
  const sitemapEntries = newCities.map(city => {
    return {
      url: `https://justlegalsolutions.org/${city.slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8'
    };
  });

  // Log sitemap entries for manual addition
  console.log('📝 New Sitemap Entries Needed:');
  sitemapEntries.forEach(entry => {
    console.log(`  - ${entry.url} (Priority: ${entry.priority})`);
  });

  return sitemapEntries;
}

// Monitor existing automation scripts
function monitorAutomationHealth() {
  console.log('⚕️ Monitoring Automation Health...');
  
  const workflowFiles = [
    '.github/workflows/safe-seo-automation.yml',
    '.github/workflows/seo-bulletproof.yml', 
    '.github/workflows/missing-cities-enhancement.yml'
  ];

  let healthStatus = [];

  workflowFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const hasSchedule = content.includes('schedule:');
      const hasSafeInterval = content.includes('cron:') && !content.includes('* * * * *'); // Not every minute
      
      healthStatus.push({
        workflow: file,
        exists: true,
        hasSchedule,
        hasSafeInterval,
        healthy: hasSchedule && hasSafeInterval
      });
    } else {
      healthStatus.push({
        workflow: file,
        exists: false,
        healthy: false
      });
    }
  });

  console.log('🏥 Automation Health Status:', healthStatus);
  return healthStatus;
}

// Generate performance monitoring config
function generatePerformanceConfig() {
  console.log('📊 Generating Performance Monitoring Config...');
  
  const config = {
    monitoring: {
      enabled: true,
      interval: 'weekly', // Safe interval
      metrics: [
        'Core Web Vitals',
        'Page Load Speed',
        'Mobile Usability',
        'Schema Validation',
        'Internal Link Health'
      ]
    },
    cityPages: newCities.map(city => ({
      name: city.name,
      url: `/${city.slug}`,
      keywords: city.keywords,
      specialFocus: city.specialties
    })),
    alerts: {
      performanceThreshold: 3000, // 3 second load time
      schemaErrors: true,
      brokenLinks: true,
      mobileIssues: true
    }
  };

  console.log('⚙️ Performance Config Generated:', JSON.stringify(config, null, 2));
  return config;
}

// Main execution
async function runEnhancedAutomation() {
  try {
    console.log('🎯 Starting Enhanced City Automation Suite...');
    
    // Step 1: Validate existing schema
    const schemaValidation = validateSchemaMarkup();
    
    // Step 2: Monitor automation health
    const healthStatus = monitorAutomationHealth();
    
    // Step 3: Update sitemap planning
    const sitemapUpdates = updateSitemap();
    
    // Step 4: Generate performance config
    const performanceConfig = generatePerformanceConfig();
    
    // Step 5: Generate FAQ content for each city
    console.log('❓ Generating City-Specific FAQ Content...');
    newCities.forEach(city => {
      const faqs = generateCityFAQs(city);
      console.log(`✅ FAQ Generated for ${city.name}:`, faqs.questions.length, 'questions');
    });

    // Summary Report
    console.log('\n🎉 Enhanced City Automation Complete!');
    console.log('📋 Summary Report:');
    console.log(`  - Cities Processed: ${newCities.length}`);
    console.log(`  - Schema Files Validated: ${schemaValidation.length}`);
    console.log(`  - Automation Workflows Monitored: ${healthStatus.length}`);
    console.log(`  - Sitemap Entries Planned: ${sitemapUpdates.length}`);
    console.log(`  - Performance Monitoring: Configured`);
    
    console.log('\n🚀 Next Steps:');
    console.log('  1. Create city page components (Jenks, Sand Springs completed)');
    console.log('  2. Add routing for new city pages');
    console.log('  3. Update navigation to include city links');
    console.log('  4. Submit sitemap updates to search engines');
    console.log('  5. Monitor performance metrics');

  } catch (error) {
    console.error('❌ Enhanced Automation Error:', error);
    process.exit(1);
  }
}

// Execute if run directly
if (require.main === module) {
  runEnhancedAutomation();
}

module.exports = {
  newCities,
  generateCityFAQs,
  validateSchemaMarkup,
  updateSitemap,
  monitorAutomationHealth,
  generatePerformanceConfig
};
