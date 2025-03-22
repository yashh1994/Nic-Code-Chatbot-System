
import React from 'react';
import { Code, Database, FileSearch, BarChart } from 'lucide-react';

const features = [
  {
    icon: <Code className="w-6 h-6 text-nic-secondary" />,
    title: 'Standardized Classification',
    description: 'NIC provides a uniform system for classifying economic activities, enabling standardized data collection and statistical analysis.'
  },
  {
    icon: <Database className="w-6 h-6 text-nic-secondary" />,
    title: 'Hierarchical Structure',
    description: 'Organized in sections, divisions, groups, and classes, allowing classification at various levels of detail for different analytical needs.'
  },
  {
    icon: <FileSearch className="w-6 h-6 text-nic-secondary" />,
    title: 'Regulatory Compliance',
    description: 'Essential for business registration, tax filings, and various statutory requirements across government departments.'
  },
  {
    icon: <BarChart className="w-6 h-6 text-nic-secondary" />,
    title: 'Statistical Analysis',
    description: 'Facilitates economic studies, industry comparisons, and policy planning through consistent classification of business activities.'
  }
];

export const InfoSection: React.FC = () => {
  return (
    <section className="py-20 bg-nic-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-nic-accent px-3 py-1 rounded-full text-xs font-medium text-nic-primary">
            Understanding NIC
          </span>
          <h2 className="mt-4 text-3xl font-bold text-nic-primary">What is NIC Code?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-nic-muted">
            The National Industrial Classification (NIC) is a statistical standard developed for classifying business establishments
            based on their economic activities. It's aligned with the International Standard Industrial Classification (ISIC)
            for global comparability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-nic-accent/50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-nic-primary mb-2">{feature.title}</h3>
              <p className="text-nic-muted">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-nic-primary mb-4">NIC Code Structure</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-nic-muted uppercase tracking-wider">Level</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-nic-muted uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-nic-muted uppercase tracking-wider">Example</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-nic-primary">Section</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-nic-muted">Highest level (alphabetical code)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-nic-muted">C - Manufacturing</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-nic-primary">Division</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-nic-muted">2-digit code</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-nic-muted">26 - Manufacture of computer, electronic and optical products</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-nic-primary">Group</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-nic-muted">3-digit code</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-nic-muted">262 - Manufacture of computers and peripheral equipment</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-nic-primary">Class</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-nic-muted">4-digit code</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-nic-muted">2620 - Manufacture of computers and peripheral equipment</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-nic-primary">Subclass</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-nic-muted">5-digit code (may vary by country)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-nic-muted">26201 - Manufacture of desktop computers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
