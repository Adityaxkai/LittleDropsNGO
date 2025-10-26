import { MainLayout } from "@/components/layout/main-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactFormModal } from "@/components/shared/contact-form-modal";
import Link from "next/link";
import { ArrowRight, Users, Heart, Building, Globe, Calendar, MapPin, Clock, Mail, MessageCircle } from "lucide-react";

const volunteerOpportunities = [
  {
    title: "Field Volunteer",
    description: "Join our teams on the ground in various countries to directly support our programs.",
    duration: "2-12 months",
    location: "Multiple countries",
    requirements: ["Age 18+", "Physical fitness", "Adaptability", "Team spirit"],
    icon: Users,
  },
  {
    title: "Medical Volunteer",
    description: "Provide healthcare services in underserved communities through our mobile clinics.",
    duration: "1-6 months",
    location: "Rural areas worldwide",
    requirements: ["Medical degree", "License to practice", "Experience", "Cultural sensitivity"],
    icon: Heart,
  },
  {
    title: "Education Volunteer",
    description: "Teach and mentor children in our educational programs and schools.",
    duration: "3-12 months",
    location: "Schools in developing countries",
    requirements: ["Teaching experience", "Patience", "Creativity", "Language skills"],
    icon: Building,
  },
  {
    title: "Remote Volunteer",
    description: "Support our programs from anywhere through virtual volunteering opportunities.",
    duration: "Flexible",
    location: "Remote",
    requirements: ["Computer skills", "Reliable internet", "Time commitment", "Communication skills"],
    icon: Globe,
  },
];

const partnershipTypes = [
  {
    title: "Corporate Partnerships",
    description: "Partner with us to create meaningful social impact while achieving your CSR goals.",
    benefits: ["Brand visibility", "Employee engagement", "Impact measurement", "Tax benefits"],
    icon: Building,
  },
  {
    title: "Foundation Grants",
    description: "Support specific programs or general operations through foundation partnerships.",
    benefits: ["Program funding", "Long-term impact", "Transparency", "Reporting"],
    icon: Heart,
  },
  {
    title: "Academic Partnerships",
    description: "Collaborate on research, training programs, and knowledge sharing initiatives.",
    benefits: ["Research opportunities", "Student programs", "Knowledge exchange", "Innovation"],
    icon: Users,
  },
  {
    title: "Government Partnerships",
    description: "Work together on large-scale development projects and policy initiatives.",
    benefits: ["Scale impact", "Policy influence", "Resource sharing", "Sustainability"],
    icon: Globe,
  },
];

const faqs = [
  {
    question: "How can I volunteer with HopeBridge?",
    answer: "You can apply to volunteer through our online application form. We have opportunities for both field volunteers and remote volunteers. The process includes an application, interview, and training period.",
  },
  {
    question: "What skills do I need to volunteer?",
    answer: "Skills vary by position, but generally include adaptability, cultural sensitivity, teamwork, and relevant experience in your field. We provide training for all volunteers.",
  },
  {
    question: "How long are volunteer commitments?",
    answer: "Volunteer commitments range from 1 month to 12 months, depending on the position and location. Remote volunteering can be more flexible.",
  },
  {
    question: "Do you provide accommodation and meals?",
    answer: "For field volunteers, we typically provide basic accommodation and meals. Remote volunteers are responsible for their own arrangements.",
  },
  {
    question: "How can my organization partner with HopeBridge?",
    answer: "We welcome partnerships with corporations, foundations, academic institutions, and government agencies. Contact us to discuss potential collaboration opportunities.",
  },
  {
    question: "What types of donations do you accept?",
    answer: "We accept monetary donations, in-kind donations, and planned giving. All donations are tax-deductible and used to support our programs.",
  },
];

export default function GetInvolvedPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Get Involved
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-purple-100">
            Join us in making a difference. Whether through volunteering, donating, or partnering, 
            there are many ways to support our mission.
          </p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Make a direct impact by volunteering your time and skills in communities around the world.
            </p>
            <ContactFormModal
              trigger={
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enquiry
                </Button>
              }
              title="Volunteer Enquiry"
              description="Have questions about volunteering? Send us your enquiry and we'll get back to you with more information."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 flex-shrink-0">
                      <opportunity.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {opportunity.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {opportunity.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {opportunity.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {opportunity.location}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {opportunity.requirements.map((req, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <ContactFormModal
                        trigger={
                          <Button className="w-full bg-red-500 text-white hover:bg-red-600 font-bold shadow-lg">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        }
                        title={`Apply for ${opportunity.title}`}
                        description={`Apply to become a ${opportunity.title} and make a difference in communities around the world.`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join forces with us to create greater impact through strategic partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((partnership, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <partnership.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {partnership.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {partnership.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-medium text-gray-900 text-sm">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {partnership.benefits.map((benefit, idx) => (
                        <li key={idx}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">
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

      {/* Ways to Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Other Ways to Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There are many ways to contribute to our mission, even if you can&apos;t volunteer or partner with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate</h3>
                <p className="text-gray-600 mb-6">
                  Your financial support directly funds our programs and helps us reach more communities in need.
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href="/donate">
                    Donate Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Spread the Word</h3>
                <p className="text-gray-600 mb-6">
                  Share our mission with your network and help us raise awareness about our programs.
                </p>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Events</h3>
                <p className="text-gray-600 mb-6">
                  Attend our fundraising events, awareness campaigns, and community gatherings.
                </p>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="/contact">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about getting involved with HopeBridge.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full" suppressHydrationWarning>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left" suppressHydrationWarning>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our community of changemakers and help us create lasting positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/donate">
                Donate Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
