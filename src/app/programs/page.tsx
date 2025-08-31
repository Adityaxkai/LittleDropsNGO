import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ArrowRight, BookOpen, Droplets, Heart, Users, MapPin, Users2 } from "lucide-react";

const programs = [
  {
    id: "education",
    title: "Education for All",
    description: "Providing quality education to underprivileged children in rural communities.",
    longDescription: "Our Education for All program focuses on breaking the cycle of poverty through education. We build schools, train teachers, provide learning materials, and offer scholarships to children who would otherwise not have access to education.",
    icon: BookOpen,
    color: "blue",
    stats: {
      children: "5,000+",
      schools: "25",
      teachers: "150",
      countries: "8",
    },
    projects: [
      {
        name: "Rural School Construction",
        location: "Kenya, Tanzania, Uganda",
        status: "Active",
        beneficiaries: "2,500 children",
      },
      {
        name: "Teacher Training Program",
        location: "India, Bangladesh",
        status: "Active",
        beneficiaries: "300 teachers",
      },
      {
        name: "Digital Learning Centers",
        location: "Ghana, Nigeria",
        status: "Planning",
        beneficiaries: "1,000 children",
      },
    ],
  },
  {
    id: "water",
    title: "Clean Water Initiative",
    description: "Building sustainable water systems in communities without access to clean water.",
    longDescription: "Access to clean water is a fundamental human right. Our Clean Water Initiative installs wells, water purification systems, and sanitation facilities in communities that lack these essential resources.",
    icon: Droplets,
    color: "cyan",
    stats: {
      communities: "150+",
      wells: "200",
      people: "50,000+",
      countries: "10",
    },
    projects: [
      {
        name: "Community Well Installation",
        location: "Ethiopia, Somalia",
        status: "Active",
        beneficiaries: "15,000 people",
      },
      {
        name: "Water Purification Systems",
        location: "Haiti, Dominican Republic",
        status: "Active",
        beneficiaries: "20,000 people",
      },
      {
        name: "Sanitation Facilities",
        location: "Nepal, India",
        status: "Completed",
        beneficiaries: "10,000 people",
      },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare Access",
    description: "Delivering essential healthcare services to remote and underserved areas.",
    longDescription: "Our Healthcare Access program brings medical care to communities that are often overlooked by traditional healthcare systems. We provide mobile clinics, train local healthcare workers, and establish sustainable healthcare infrastructure.",
    icon: Heart,
    color: "red",
    stats: {
      patients: "25,000+",
      clinics: "12",
      doctors: "45",
      countries: "6",
    },
    projects: [
      {
        name: "Mobile Health Clinics",
        location: "Rural India, Pakistan",
        status: "Active",
        beneficiaries: "15,000 patients",
      },
      {
        name: "Maternal Health Program",
        location: "Afghanistan, Yemen",
        status: "Active",
        beneficiaries: "5,000 mothers",
      },
      {
        name: "Community Health Workers",
        location: "Myanmar, Cambodia",
        status: "Planning",
        beneficiaries: "10,000 people",
      },
    ],
  },
  {
    id: "community",
    title: "Community Development",
    description: "Empowering communities through skills training and economic development.",
    longDescription: "Sustainable development requires economic empowerment. Our Community Development program provides vocational training, microfinance opportunities, and infrastructure development to help communities become self-sufficient.",
    icon: Users,
    color: "green",
    stats: {
      entrepreneurs: "2,000+",
      businesses: "500",
      jobs: "5,000+",
      countries: "8",
    },
    projects: [
      {
        name: "Vocational Training Centers",
        location: "Philippines, Indonesia",
        status: "Active",
        beneficiaries: "1,500 people",
      },
      {
        name: "Microfinance Program",
        location: "Bangladesh, Sri Lanka",
        status: "Active",
        beneficiaries: "2,000 entrepreneurs",
      },
      {
        name: "Infrastructure Development",
        location: "Vietnam, Laos",
        status: "Planning",
        beneficiaries: "50,000 people",
      },
    ],
  },
];

export default function ProgramsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Our Programs
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-green-100">
            Comprehensive initiatives that address the most pressing needs in communities 
            around the world, creating lasting positive change.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We focus on four key areas that address the fundamental needs of communities 
              and create sustainable, long-term impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {programs.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 bg-${program.color}-100 rounded-full flex items-center justify-center text-${program.color}-600`}>
                      <program.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {program.description}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`#${program.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {programs.map((program) => (
                <TabsTrigger key={program.id} value={program.id} className="text-sm">
                  {program.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {programs.map((program) => (
              <TabsContent key={program.id} value={program.id} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {program.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {program.longDescription}
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {Object.entries(program.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-white rounded-lg shadow">
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild size="lg" className="bg-red-500 text-white hover:bg-red-600 font-bold shadow-lg">
                      <Link href="/get-involved">
                        Get Involved
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Current Projects
                    </h4>
                    <div className="space-y-4">
                      {program.projects.map((project, index) => (
                        <Card key={index} className="border-0 shadow">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-semibold text-gray-900">{project.name}</h5>
                              <Badge 
                                className={
                                  project.status === "Active" ? "bg-green-100 text-green-800" :
                                  project.status === "Completed" ? "bg-blue-100 text-blue-800" :
                                  "bg-yellow-100 text-yellow-800"
                                }
                              >
                                {project.status}
                              </Badge>
                            </div>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                {project.location}
                              </div>
                              <div className="flex items-center">
                                <Users2 className="h-4 w-4 mr-2" />
                                {project.beneficiaries}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Support Our Programs
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Your donation helps us continue these vital programs and reach more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              <Link href="/donate">
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-red-500 text-white hover:bg-red-600 font-bold shadow-lg">
              <Link href="/get-involved">
                Volunteer With Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
