// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ThemeToggle } from "@/components/theme-toggle";

// export default function ResumePage() {
//   return (
//     <main className="min-h-screen bg-background py-10 px-4">
//       <div className="max-w-5xl mx-auto space-y-10">
//         {/* ================= HERO ================= */}
//         <section className="text-center space-y-4">
//           <h1 className="text-4xl font-bold tracking-tight">Satendra Kumar</h1>

//           <p className="text-muted-foreground">
//             Full-Stack Software Engineer • React • Node.js • Next.js
//           </p>

//           <div className="flex flex-wrap justify-center gap-3 text-sm">
//             <Link href="mailto:satendrakm27@gmail.com">
//               <Button variant="outline">Email</Button>
//             </Link>
//             <Link href="https://github.com/SatendraKm" target="_blank">
//               <Button variant="outline">GitHub</Button>
//             </Link>
//             <Link href="https://linkedin.com/in/satendrakm" target="_blank">
//               <Button variant="outline">LinkedIn</Button>
//             </Link>
//           </div>
//           <div className="flex justify-center gap-3">
//             <ThemeToggle />
//           </div>
//         </section>

//         <Separator />

//         {/* ================= SUMMARY ================= */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Professional Summary</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-muted-foreground leading-relaxed">
//               Full-Stack Software Engineer with hands-on experience building
//               scalable React and Node.js applications serving thousands of
//               users. Strong foundation in Data Structures, System Design, and
//               cloud deployments. Seeking an SDE / Full-Stack Engineer role.
//             </p>
//           </CardContent>
//         </Card>

//         {/* ================= EXPERIENCE ================= */}
//         <section className="space-y-6">
//           <h2 className="text-2xl font-semibold">Experience</h2>

//           <Card>
//             <CardHeader>
//               <CardTitle>
//                 Full-Stack Software Developer Intern • ABIS Foods Pvt. Ltd.
//               </CardTitle>
//               <p className="text-sm text-muted-foreground">
//                 May 2025 – Sep 2025
//               </p>
//             </CardHeader>

//             <CardContent className="space-y-3 text-sm">
//               <ul className="list-disc pl-5 space-y-2">
//                 <li>Built 3 full-stack apps serving 4,000+ users</li>
//                 <li>Improved CRM performance with new business modules</li>
//                 <li>Worked in Agile teams with REST APIs & TDD</li>
//               </ul>

//               <div className="flex flex-wrap gap-2 pt-2">
//                 <Badge>React</Badge>
//                 <Badge>Node.js</Badge>
//                 <Badge>MySQL</Badge>
//                 <Badge>IndexedDB</Badge>
//                 <Badge>VoIP</Badge>
//               </div>
//             </CardContent>
//           </Card>
//         </section>

//         {/* ================= PROJECTS ================= */}
//         <section className="space-y-6">
//           <h2 className="text-2xl font-semibold">Projects</h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Technorollix – Event SaaS</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-2 text-sm">
//                 <p>
//                   5,000+ users • 42+ events • RBAC • AWS deployment • shadcn UI
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge>Next.js</Badge>
//                   <Badge>TypeScript</Badge>
//                   <Badge>MongoDB</Badge>
//                   <Badge>AWS</Badge>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle>Network-Next – Alumni Platform</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-2 text-sm">
//                 <p>
//                   8,000+ registrations • real-time chat • video calls • Razorpay
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge>React</Badge>
//                   <Badge>Socket.io</Badge>
//                   <Badge>JWT</Badge>
//                   <Badge>Tailwind</Badge>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </section>

//         {/* ================= SKILLS ================= */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Skills</CardTitle>
//           </CardHeader>
//           <CardContent className="flex flex-wrap gap-2">
//             {[
//               "JavaScript",
//               "TypeScript",
//               "React",
//               "Next.js",
//               "Node.js",
//               "Express",
//               "MySQL",
//               "MongoDB",
//               "Docker",
//               "AWS",
//               "WebSockets",
//               "JWT",
//             ].map((skill) => (
//               <Badge key={skill} variant="secondary">
//                 {skill}
//               </Badge>
//             ))}
//           </CardContent>
//         </Card>

//         {/* ================= EDUCATION ================= */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Education</CardTitle>
//           </CardHeader>
//           <CardContent className="text-sm">
//             B.Tech in Computer Science • CGPA 8.2 • OP Jindal University • 2026
//           </CardContent>
//         </Card>

//         {/* ================= CTA ================= */}
//         <div className="text-center pt-6">
//           <Button size="lg" asChild>
//             <a href="/satendra_resume.pdf" download>
//               Download Resume PDF
//             </a>
//           </Button>
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Download,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Trophy,
  Users,
  Rocket,
} from "lucide-react";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* ================= HERO ================= */}
        <Card className="border-2">
          <CardContent className="pt-8 pb-6">
            <div className="text-center space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Satendra Kumar
                </h1>
                <p className="text-xl font-medium text-muted-foreground">
                  Full-Stack Software Engineer
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Raipur, CG, India
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    +91-9301196473
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Link href="mailto:satendrakm27@gmail.com">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/satendrakm" target="_blank">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </Link>
                <Link href="https://github.com/SatendraKm" target="_blank">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://leetcode.com/SatendraKm27" target="_blank">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Code2 className="h-4 w-4" />
                    LeetCode
                  </Button>
                </Link>
              </div>

              <div className="flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ================= SUMMARY ================= */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Professional Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Software Engineer with hands-on experience building
              scalable React and Node.js applications serving thousands of
              users. Strong foundation in Data Structures & Algorithms, system
              design fundamentals, and cloud deployments. Proven track record of
              delivering production-ready applications with measurable impact on
              user engagement and operational efficiency. Seeking an SDE /
              Full-Stack Engineer role.
            </p>
          </CardContent>
        </Card>

        {/* ================= EXPERIENCE ================= */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Briefcase className="h-7 w-7" />
            Professional Experience
          </h2>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl">
                    Full-Stack Software Developer Intern
                  </CardTitle>
                  <p className="text-base font-semibold text-primary mt-1">
                    ABIS Foods Pvt. Ltd.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Rajnandgaon, CG
                  </p>
                </div>
                <Badge variant="secondary" className="self-start">
                  May 2025 – Sep 2025
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Contributed to the development of 3 full-stack web
                    applications (React.js, Node.js, and MySQL) serving 4,000+
                    users. Added a new business module to an existing CRM
                    system, improving overall project performance.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Collaborated in Agile teams using Git for version control,
                    participated in code reviews, maintained RESTful APIs, and
                    followed test-driven development practices.
                  </span>
                </li>
              </ul>

              <Separator />

              {/* Key Projects Section */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  Key Projects at ABIS:
                </h4>

                {/* Parivartan CRM */}
                <div className="pl-4 border-l-2 border-primary/30 space-y-2">
                  <h5 className="font-semibold text-sm">Parivartan CRM</h5>
                  <p className="text-sm text-muted-foreground">
                    Built a solution with 20+ user roles and a lead management
                    system handling 9,000+ leads daily with automated assignment
                    and tracking.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      20+ User Roles
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      9,000+ Daily Leads
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Automated Assignment
                    </Badge>
                  </div>
                </div>

                {/* Doctor Daily */}
                <div className="pl-4 border-l-2 border-primary/30 space-y-2">
                  <h5 className="font-semibold text-sm">Doctor Daily</h5>
                  <p className="text-sm text-muted-foreground">
                    Implemented an ERP system featuring geo-fencing for location
                    tracking, offline capabilities using IndexedDB with
                    automatic synchronization, and real-time dashboard achieving
                    95% user satisfaction.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Geo-fencing
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      IndexedDB Offline
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      95% Satisfaction
                    </Badge>
                  </div>
                </div>

                {/* ABIS Pro */}
                <div className="pl-4 border-l-2 border-primary/30 space-y-2">
                  <h5 className="font-semibold text-sm">ABIS Pro</h5>
                  <p className="text-sm text-muted-foreground">
                    Integrated VoIP calling and IVR systems into the CRM panel,
                    enabling lead generation and handling 100+ concurrent calls;
                    reduced call time by 30% and improved resolution rates by
                    40%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      VoIP Integration
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      100+ Concurrent Calls
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      30% Faster
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      40% Better Resolution
                    </Badge>
                  </div>
                </div>

                {/* Traders Help Desk */}
                <div className="pl-4 border-l-2 border-primary/30 space-y-2">
                  <h5 className="font-semibold text-sm">Traders Help Desk</h5>
                  <p className="text-sm text-muted-foreground">
                    Integrated B2B solutions including SAP ERP and WhatsApp
                    Business API to streamline business processes; reduced
                    response time by 60% and improved customer satisfaction by
                    35%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      SAP Integration
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      WhatsApp API
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      60% Faster Response
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      35% Higher Satisfaction
                    </Badge>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-semibold">Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>IndexedDB</Badge>
                  <Badge>VoIP</Badge>
                  <Badge>REST APIs</Badge>
                  <Badge>TDD</Badge>
                  <Badge>Git</Badge>
                  <Badge>Agile</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ================= PROJECTS ================= */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Code2 className="h-7 w-7" />
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Technorollix */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Technorollix</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Event Management SaaS Platform
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Mar 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Built and deployed a scalable full-stack application
                      serving 5,000+ active users across 42+ events
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Included features like role-based access control,
                      multi-event team management with invitation workflows,
                      payment tracking with transaction verification
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Implemented server-side pagination and Excel data exports
                      for 2,000+ records, improving dashboard performance; built
                      a responsive React (shadcn/ui) frontend and deployed on
                      AWS
                    </span>
                  </li>
                </ul>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="text-center p-2 bg-primary/5 rounded">
                    <p className="text-2xl font-bold text-primary">5,000+</p>
                    <p className="text-xs text-muted-foreground">
                      Active Users
                    </p>
                  </div>
                  <div className="text-center p-2 bg-primary/5 rounded">
                    <p className="text-2xl font-bold text-primary">42+</p>
                    <p className="text-xs text-muted-foreground">Events</p>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">shadcn/ui</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Network-Next */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Network-Next</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Alumni Networking Platform
                    </p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Dec 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Led front-end development during the Smart India
                      Hackathon, building fully responsive cross-device layouts
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Developed end-to-end onboarding, secure JWT
                      authentication, and analytics-driven admin dashboards
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Scaled to 8,000+ registrations and 250+ events, increasing
                      engagement by 42% and cutting admin time by 50%
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Built a complete alumni ecosystem with real-time chat,
                      video calls, and job postings. Supported 7,000+ MAU,
                      matched 480 mentor pairs, and processed ₹2+ lakh in
                      donations
                    </span>
                  </li>
                </ul>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="text-center p-2 bg-primary/5 rounded">
                    <p className="text-xl font-bold text-primary">7,000+</p>
                    <p className="text-xs text-muted-foreground">MAU</p>
                  </div>
                  <div className="text-center p-2 bg-primary/5 rounded">
                    <p className="text-xl font-bold text-primary">480</p>
                    <p className="text-xs text-muted-foreground">Mentors</p>
                  </div>
                  <div className="text-center p-2 bg-primary/5 rounded">
                    <p className="text-xl font-bold text-primary">₹2L+</p>
                    <p className="text-xs text-muted-foreground">Donations</p>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Context API</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">Socket.io</Badge>
                  <Badge variant="secondary">WebRTC</Badge>
                  <Badge variant="secondary">Razorpay</Badge>
                  <Badge variant="secondary">JWT</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ================= LEADERSHIP ================= */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <Trophy className="h-7 w-7" />
            Leadership Experience
          </h2>

          <Card className="border-l-4 border-l-amber-500">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl">
                    Event Management Lead
                  </CardTitle>
                  <p className="text-base font-semibold text-amber-600 mt-1">
                    Hacksprint 2025
                  </p>
                  <p className="text-sm text-muted-foreground">
                    OP Jindal University
                  </p>
                </div>
                <Badge variant="secondary" className="self-start">
                  Mar 2025
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    Organized a 30-hour in-person hackathon with 120+
                    participants at the annual college fest
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>
                    Managed event planning, logistics, and coordination with
                    judges to ensure smooth execution
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline">Event Planning</Badge>
                <Badge variant="outline">Team Coordination</Badge>
                <Badge variant="outline">Logistics Management</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ================= TECHNICAL SKILLS ================= */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">
                  Languages
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>C/C++</Badge>
                  <Badge>Python</Badge>
                  <Badge>SQL</Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">
                  Frontend
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React.js</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Redux</Badge>
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">
                  Backend
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>REST APIs</Badge>
                  <Badge>WebSockets</Badge>
                  <Badge>JWT</Badge>
                  <Badge>Webhooks</Badge>
                  <Badge>Microservices</Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">
                  Database
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>MySQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Sequelize ORM</Badge>
                  <Badge>IndexedDB</Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">
                  Tools & Platforms
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub</Badge>
                  <Badge>Docker</Badge>
                  <Badge>AWS (EC2)</Badge>
                  <Badge>Postman</Badge>
                  <Badge>VS Code</Badge>
                  <Badge>npm</Badge>
                  <Badge>Jest</Badge>
                  <Badge>WSL (Linux)</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ================= EDUCATION ================= */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <p className="font-semibold text-lg">
                  Bachelor of Technology in Computer Science
                </p>
                <p className="text-muted-foreground">OP Jindal University</p>
                <p className="text-sm text-muted-foreground">Raigarh, CG</p>
              </div>
              <div className="text-left md:text-right">
                <Badge variant="secondary" className="mb-2">
                  CGPA: 8.2/10
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Expected May 2026
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ================= CTA ================= */}
        <div className="text-center pt-6 pb-4">
          <Button size="lg" className="gap-2 text-base px-8" asChild>
            <a href="/satendra_resume.pdf" download>
              <Download className="h-5 w-5" />
              Download Complete Resume PDF
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
