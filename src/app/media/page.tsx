import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ExternalLink, Calendar, Newspaper, Video, Radio, Award } from "lucide-react";

const mediaCategories = [
  {
    id: "news",
    title: "News Articles",
    description: "Print and online news coverage",
    icon: Newspaper,
    count: 12,
  },
  {
    id: "video",
    title: "Video Coverage",
    description: "TV interviews and documentary features",
    icon: Video,
    count: 8,
  },
  {
    id: "radio",
    title: "Radio Interviews",
    description: "Radio programs and interviews",
    icon: Radio,
    count: 5,
  },
  {
    id: "awards",
    title: "Awards & Recognition",
    description: "Awards and honors received",
    icon: Award,
    count: 3,
  },
];

const recentMedia = [
  {
    id: 1,
    title: "Little Drops: Serving Humanity in Rural Jharkhand",
    source: "The Times of India",
    date: "2024-01-15",
    category: "News",
    description: "Feature article on our educational initiatives in rural Jharkhand and their impact on local communities.",
    link: "#",
    type: "news",
  },
  {
    id: 2,
    title: "Healthcare Access in Remote Villages",
    source: "DD News",
    date: "2024-01-10",
    category: "Video",
    description: "Documentary feature on our mobile healthcare services reaching remote villages in Jharkhand.",
    link: "#",
    type: "video",
  },
  {
    id: 3,
    title: "Community Development Through Education",
    source: "All India Radio",
    date: "2024-01-05",
    category: "Radio",
    description: "Radio interview discussing our approach to community development through education.",
    link: "#",
    type: "radio",
  },
  {
    id: 4,
    title: "Excellence in Social Service Award",
    source: "Jharkhand Government",
    date: "2023-12-20",
    category: "Award",
    description: "Recognition for outstanding contribution to social service and community development.",
    link: "#",
    type: "award",
  },
  {
    id: 5,
    title: "Water Conservation Projects Making Impact",
    source: "Hindustan Times",
    date: "2023-12-15",
    category: "News",
    description: "Coverage of our clean water initiatives and their positive impact on rural communities.",
    link: "#",
    type: "news",
  },
  {
    id: 6,
    title: "Empowering Rural Women Through Education",
    source: "BBC Hindi",
    date: "2023-12-10",
    category: "Video",
    description: "Feature story on our women empowerment programs through education and skill development.",
    link: "#",
    type: "video",
  },
];

const pressReleases = [
  {
    id: 1,
    title: "Little Drops Launches New Education Program in Ranchi",
    date: "2024-01-20",
    summary: "New initiative to provide quality education to 500 children in rural Ranchi district.",
  },
  {
    id: 2,
    title: "Healthcare Camp Serves 1000+ Patients in Rural Jharkhand",
    date: "2024-01-15",
    summary: "Free medical camp provides healthcare services to underserved communities.",
  },
  {
    id: 3,
    title: "Partnership Announced for Clean Water Project",
    date: "2024-01-10",
    summary: "Collaboration with local government to provide clean water to 10 villages.",
  },
];

export default function MediaPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Media & Press
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-purple-100">
            Stay updated with our latest news, press coverage, and media mentions.
          </p>
        </div>
      </section>

      {/* Media Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Media Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our media presence across different platforms and formats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaCategories.map((category) => (
              <Card key={category.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                      <category.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-sm text-gray-500">{category.count} items</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`#${category.id}`}>
                      View All
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Media Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Media Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Latest news articles, interviews, and media features about our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentMedia.map((item) => (
              <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={
                      item.type === "news" ? "bg-blue-100 text-blue-800" :
                      item.type === "video" ? "bg-red-100 text-red-800" :
                      item.type === "radio" ? "bg-green-100 text-green-800" :
                      "bg-purple-100 text-purple-800"
                    }>
                      {item.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Source:</strong> {item.source}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={item.link}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Read More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Press Releases
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Official announcements and updates from Little Drops.
            </p>
          </div>
          
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <Card key={release.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {release.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {release.summary}
                      </p>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{release.date}</span>
                      </div>
                    </div>
                    <Button asChild variant="outline">
                      <Link href={`#press-${release.id}`}>
                        Read Full Release
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Media Contact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For media inquiries, press releases, or interview requests, please contact our media team.
            </p>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Media Relations
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">media@littledrops.org</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 9431146633</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Response Time</p>
                      <p className="text-gray-600">Within 24 hours</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    What We Can Provide
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• High-resolution photos</li>
                    <li>• Video footage</li>
                    <li>• Expert interviews</li>
                    <li>• Background information</li>
                    <li>• Press releases</li>
                    <li>• Fact sheets</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Contact Media Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Follow us for the latest updates and stories of impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/gallery">
                View Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
