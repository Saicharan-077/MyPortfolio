import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://saicharan.dev';
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/projects/fire-smoke-detection`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/projects/smart-parking-management`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/projects/voxscholar`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/experience`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/experience/server-management-intern`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/experience/innovision-ai-ml-intern`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/skills`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/achievements`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/achievements/solution-sprint-2`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/achievements/webathon-2`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/achievements/startup-premier-league`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/achievements/iste-core-member`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/achievements/wing-master-vjstartups`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/certifications`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
