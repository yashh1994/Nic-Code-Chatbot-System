
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, ExternalLink, Database, FileText, User, Link as LinkIcon } from 'lucide-react';

export const DeveloperInsights: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs defaultValue="project" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="project" className="data-[state=active]:bg-nic-accent text-nic-primary data-[state=active]:text-nic-primary">
            Project
          </TabsTrigger>
          <TabsTrigger value="dataset" className="data-[state=active]:bg-nic-accent text-nic-primary data-[state=active]:text-nic-primary">
            Datasets
          </TabsTrigger>
          <TabsTrigger value="developer" className="data-[state=active]:bg-nic-accent text-nic-primary data-[state=active]:text-nic-primary">
            Developer
          </TabsTrigger>
          <TabsTrigger value="connect" className="data-[state=active]:bg-nic-accent text-nic-primary data-[state=active]:text-nic-primary">
            Connect
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="project" className="space-y-6 animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="text-nic-secondary" size={20} />
                NIC Code Resource Project
              </CardTitle>
              <CardDescription>
                A comprehensive platform for understanding and utilizing National Industrial Classification codes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-nic-muted mb-1">Project Description</h3>
                <p className="text-nic-primary">
                  This project aims to simplify the understanding and application of NIC codes through 
                  an intuitive interface, comprehensive information, and an AI-powered assistant. It serves 
                  as a valuable resource for businesses, researchers, and government entities requiring 
                  accurate industrial classification.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-nic-muted mb-1">Key Features</h3>
                <ul className="list-disc list-inside text-nic-primary">
                  <li>Interactive NIC code explorer</li>
                  <li>AI-powered classification assistant</li>
                  <li>Comprehensive documentation on code structure</li>
                  <li>Use-case examples for various industries</li>
                  <li>Regular updates aligned with official classifications</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="gap-2">
                <Github size={16} />
                View on GitHub
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="dataset" className="space-y-6 animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="text-nic-secondary" size={20} />
                NIC Code Datasets
              </CardTitle>
              <CardDescription>
                Data sources and references used in this project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-panel rounded-lg p-4">
                  <h3 className="font-medium text-nic-primary mb-2">NIC 2008</h3>
                  <p className="text-sm text-nic-muted mb-4">
                    The complete National Industrial Classification of 2008, aligned with ISIC Rev. 4
                  </p>
                  <Button variant="outline" size="sm" className="gap-1 w-full">
                    <ExternalLink size={14} />
                    Access Dataset
                  </Button>
                </div>
                
                <div className="glass-panel rounded-lg p-4">
                  <h3 className="font-medium text-nic-primary mb-2">NIC-ISIC Concordance</h3>
                  <p className="text-sm text-nic-muted mb-4">
                    Mapping between NIC codes and International Standard Industrial Classification
                  </p>
                  <Button variant="outline" size="sm" className="gap-1 w-full">
                    <ExternalLink size={14} />
                    Access Dataset
                  </Button>
                </div>
                
                <div className="glass-panel rounded-lg p-4">
                  <h3 className="font-medium text-nic-primary mb-2">Sector Analysis</h3>
                  <p className="text-sm text-nic-muted mb-4">
                    Statistical data organized by industrial sectors based on NIC
                  </p>
                  <Button variant="outline" size="sm" className="gap-1 w-full">
                    <ExternalLink size={14} />
                    Access Dataset
                  </Button>
                </div>
                
                <div className="glass-panel rounded-lg p-4">
                  <h3 className="font-medium text-nic-primary mb-2">Classification Updates</h3>
                  <p className="text-sm text-nic-muted mb-4">
                    Changes and amendments to NIC codes over different versions
                  </p>
                  <Button variant="outline" size="sm" className="gap-1 w-full">
                    <ExternalLink size={14} />
                    Access Dataset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="developer" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="text-nic-secondary" size={20} />
                Developer Profile
              </CardTitle>
              <CardDescription>
                About the team behind the NIC Code Resource
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 rounded-full bg-nic-accent flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <User size={48} className="text-nic-primary/50" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-xl text-nic-primary">John Developer</h3>
                    <p className="text-nic-muted">Lead Developer & Data Scientist</p>
                  </div>
                  
                  <p className="text-nic-primary">
                    Industrial classification specialist with over 8 years of experience in data analytics
                    and web application development. Passionate about making complex classification systems
                    accessible and user-friendly through technology.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-nic-accent/50 px-2 py-1 rounded text-xs font-medium text-nic-primary">
                      React
                    </span>
                    <span className="bg-nic-accent/50 px-2 py-1 rounded text-xs font-medium text-nic-primary">
                      TypeScript
                    </span>
                    <span className="bg-nic-accent/50 px-2 py-1 rounded text-xs font-medium text-nic-primary">
                      TailwindCSS
                    </span>
                    <span className="bg-nic-accent/50 px-2 py-1 rounded text-xs font-medium text-nic-primary">
                      Data Analysis
                    </span>
                    <span className="bg-nic-accent/50 px-2 py-1 rounded text-xs font-medium text-nic-primary">
                      Industrial Classification
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="connect" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="text-nic-secondary" size={20} />
                Connect With Us
              </CardTitle>
              <CardDescription>
                Have questions or suggestions? Reach out to us
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto p-4 flex items-center justify-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-nic-accent/50 flex items-center justify-center flex-shrink-0">
                    <Github className="text-nic-primary" size={20} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-nic-primary">GitHub</h3>
                    <p className="text-sm text-nic-muted">Follow our open source projects</p>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 flex items-center justify-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-nic-accent/50 flex items-center justify-center flex-shrink-0">
                    <User className="text-nic-primary" size={20} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-nic-primary">LinkedIn</h3>
                    <p className="text-sm text-nic-muted">Connect professionally</p>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 flex items-center justify-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-nic-accent/50 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-nic-primary" size={20} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-nic-primary">Discord</h3>
                    <p className="text-sm text-nic-muted">Join our developer community</p>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 flex items-center justify-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-nic-accent/50 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-nic-primary" size={20} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-nic-primary">Email</h3>
                    <p className="text-sm text-nic-muted">Send us a message directly</p>
                  </div>
                </Button>
              </div>
              
              <div className="mt-4 p-4 bg-nic-accent/30 rounded-lg">
                <h3 className="font-medium text-nic-primary mb-2">Contribute to the Project</h3>
                <p className="text-sm text-nic-muted mb-4">
                  We welcome contributions from developers, data scientists, and industry experts to enhance the NIC Code Resource.
                </p>
                <Button className="gap-2 bg-nic-primary hover:bg-nic-primary/90 text-white w-full">
                  <Github size={16} />
                  Contribute on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Import needed for the Mail icon
import { Mail, MessageSquare } from 'lucide-react';
