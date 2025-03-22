
import React from 'react';
import { Layout } from '@/components/Layout';
import { DeveloperInsights } from '@/components/DeveloperInsights';

const DeveloperInsightsPage = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-b from-nic-accent/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="bg-nic-accent px-3 py-1 rounded-full text-xs font-medium text-nic-primary">
              Behind The Project
            </span>
            <h1 className="mt-4 text-3xl font-bold text-nic-primary">Developer Insights</h1>
            <p className="mt-4 text-nic-muted">
              Learn about the project, the datasets used, and the team behind the NIC Code Resource.
            </p>
          </div>
          
          <DeveloperInsights />
        </div>
      </section>
    </Layout>
  );
};

export default DeveloperInsightsPage;
