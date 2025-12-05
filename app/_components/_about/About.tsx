// import React from 'react';

// const AboutUs = () => {
//   // Team members data
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Alex Johnson",
//       role: "Lead Developer",
//       description: "Full-stack developer with 8+ years experience in EdTech solutions",
//       // In a real app, you would use actual image URLs
//       // imageUrl: "/team/alex.jpg"
//     },
//     {
//       id: 2,
//       name: "Dr. Sarah Miller",
//       role: "Education Advisor",
//       description: "Former exam board director with 15 years teaching experience",
//     },
//     {
//       id: 3,
//       name: "Michael Chen",
//       role: "UX Designer",
//       description: "Specializes in creating intuitive learning interfaces",
//     },
//     {
//       id: 4,
//       name: "Priya Sharma",
//       role: "Data Analyst",
//       description: "Expert in learning analytics and performance metrics",
//     },
//   ];

//   // Stats data
//   const stats = [
//     { value: "10K+", label: "Active Students" },
//     { value: "95%", label: "Success Rate" },
//     { value: "50K+", label: "MCQs Analyzed" },
//     { value: "4.9/5", label: "User Rating" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-sans">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
//               <span className="text-2xl font-bold text-gray-800">MCQMaster</span>
//             </div>
//             <nav className="hidden md:flex space-x-8">
//               <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
//               <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600">About</a>
//               <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Features</a>
//               <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
//             </nav>
//             <button className="md:hidden">
//               <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-12 md:py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">MCQMaster</span>
//             </h1>
//             <p className="text-xl text-gray-600 mb-10">
//               We're revolutionizing how students prepare for competitive exams through intelligent analysis and data-driven insights.
//             </p>
            
//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
//               {stats.map((stat, index) => (
//                 <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
//                   <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
//                   <div className="text-gray-600 mt-2">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 pb-20">
//         {/* Our Mission Section */}
//         <section className="mb-20">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="md:w-1/2">
//               <div className="relative">
//                 <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full"></div>
//                 <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full"></div>
//                 <div className="relative bg-white rounded-2xl p-8 shadow-xl">
//                   <div className="text-5xl text-blue-100 font-bold mb-4">01</div>
//                   <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
//                   <p className="text-gray-600 text-lg leading-relaxed">
//                     "Empowering students through smart MCQ analysis to help them identify weaknesses, improve accuracy, and succeed in competitive exams."
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="md:w-1/2">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
//                 <h3 className="text-2xl font-bold mb-6">Why We Do It</h3>
//                 <ul className="space-y-4">
//                   <li className="flex items-start">
//                     <svg className="w-6 h-6 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     <span>Level the playing field for all students</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg className="w-6 h-6 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     <span>Make exam preparation efficient and effective</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg className="w-6 h-6 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                     <span>Transform data into actionable insights</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Our Story Section */}
//         <section className="mb-20">
//           <div className="flex flex-col md:flex-row-reverse items-center gap-12">
//             <div className="md:w-1/2">
//               <div className="relative">
//                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full"></div>
//                 <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full"></div>
//                 <div className="relative bg-white rounded-2xl p-8 shadow-xl">
//                   <div className="text-5xl text-blue-100 font-bold mb-4">02</div>
//                   <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
//                   <p className="text-gray-600 text-lg leading-relaxed">
//                     "Born out of the need for better performance tracking, our platform was created by educators and developers who understand the challenges students face. What started as a simple tool is now helping thousands streamline their preparation."
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="md:w-1/2">
//               <div className="bg-white rounded-2xl p-8 shadow-xl">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Journey</h3>
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
//                       <span className="text-blue-600 font-bold">2019</span>
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900">Concept Born</h4>
//                       <p className="text-gray-600">Identified the gap in effective MCQ analysis tools</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
//                       <span className="text-blue-600 font-bold">2020</span>
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900">First Prototype</h4>
//                       <p className="text-gray-600">Launched MVP with basic analytics features</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
//                       <span className="text-blue-600 font-bold">2023</span>
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-gray-900">Platform Launch</h4>
//                       <p className="text-gray-600">Full-featured platform with AI-powered insights</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Meet the Team Section */}
//         <section>
//           <div className="text-center mb-12">
//             <div className="inline-block">
//               <div className="text-5xl text-blue-100 font-bold mb-2">03</div>
//               <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
//               <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//                 The passionate individuals behind MCQMaster who are dedicated to transforming exam preparation
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {teamMembers.map((member) => (
//               <div key={member.id} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
//                 <div className="mb-6">
//                   <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
//                     {member.name.charAt(0)}
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
//                 <div className="text-blue-600 font-medium text-center mb-4">{member.role}</div>
//                 <p className="text-gray-600 text-center">{member.description}</p>
//                 <div className="flex justify-center mt-6 space-x-4">
//                   <a href="#" className="text-gray-400 hover:text-blue-600">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-blue-600">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="mt-20">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
//             <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Exam Preparation?</h2>
//             <p className="text-xl mb-8 max-w-2xl mx-auto">
//               Join thousands of successful students who have improved their scores with MCQMaster
//             </p>
//             <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 text-lg">
//               Get Started Now
//             </button>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-6 md:mb-0">
//               <div className="flex items-center space-x-2">
//                 <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg"></div>
//                 <span className="text-2xl font-bold">MCQMaster</span>
//               </div>
//               <p className="text-gray-400 mt-4">Smart MCQ analysis for competitive success</p>
//             </div>
//             <div className="flex space-x-6">
//               <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
//               <a href="#" className="text-gray-400 hover:text-white">Contact</a>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; {new Date().getFullYear()} MCQMaster. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AboutUs;









// components/AboutPage.tsx
import { TeamMemberCard } from '@/app/_components/TeamCards';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rahim Ahmed",
      role: "Founder & Lead Developer",
      desc: "Full-stack developer with 8+ years building ed-tech platforms",
      img: "/team/rahim.jpg", // optional
    },
    {
      name: "Dr. Fatima Khan",
      role: "Education Advisor",
      desc: "Former BCS examiner & curriculum designer for competitive exams",
      img: "/team/fatima.jpg",
    },
    {
      name: "Ayesha Siddiqua",
      role: "UX/UI Designer",
      desc: "Passionate about creating intuitive learning experiences",
      img: "/team/ayesha.jpg",
    },
    {
      name: "Karim Hossain",
      role: "Data Analyst & ML Engineer",
      desc: "Specializes in MCQ pattern analysis using AI",
      img: "/team/karim.jpg",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-600 py-24 md:py-32">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative container mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
              About MCQ Analysis BD
            </h1>
            <p className="text-lg md:text-xl font-roboto max-w-3xl mx-auto opacity-95">
              We are on a mission to transform how students prepare for competitive exams in Bangladesh
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-6">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-mt-2 text-3xl font-semibold text-teal-700 mb-6">
                  “Empowering students through smart MCQ analysis”
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-roboto">
                  We believe success in competitive exams isn't just about hard work—it's about smart work. 
                  Our platform helps students identify weaknesses, improve accuracy, optimize time management, 
                  and ultimately succeed in BCS, Bank, University Admission, Medical, and other competitive exams.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl p-12 shadow-2xl text-white">
                  <svg className="w-24 h-24 mb-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <p className="text-xl font-medium text-center">
                    Save 50% study time<br />with targeted practice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center md:text-left md:flex items-center gap-12">
              <div className="md:w-1/2">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-roboto">
                  Born out of the need for better performance tracking, <strong>MCQ Analysis BD</strong> was created by a team of educators and developers who deeply understand the struggles Bangladeshi students face in competitive exams.
                </p>
                <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-700 font-roboto">
                  What started as a simple tool to analyze mock test results has now grown into a powerful platform helping <span className="text-teal-600 font-bold">tens of thousands</span> of students streamline their preparation and achieve their dreams.
                </p>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-teal-600">10K+</div>
                    <div className="text-gray-600">Active Students</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-teal-600">500K+</div>
                    <div className="text-gray-600">MCQs Analyzed</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-teal-600">95%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-teal-600">4.9/5</div>
                    <div className="text-gray-600">User Rating</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                <div className="bg-gradient-to-tr from-teal-400 to-emerald-500 rounded-3xl w-80 h-80 shadow-2xl flex items-center justify-center">
                  <span className="text-white text-6xl font-bold rotate-12">2019 → 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-6">
                Meet the Team
              </h2>
              <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
              <p className="mt-6 text-xl text-gray-600 font-roboto max-w-3xl mx-auto">
                Passionate educators and technologists working together to revolutionize exam preparation in Bangladesh
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                  <div className="p-8 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-5xl font-bold border-4 border-white shadow-xl">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">{member.name}</h3>
                    <p className="text-teal-600 font-medium mt-1">{member.role}</p>
                    <p className="mt-4 text-gray-600 text-sm leading-relaxed font-roboto">
                      {member.desc}
                    </p>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="bg-teal-600 py-16">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-6">
              Ready to Transform Your Preparation?
            </h3>
            <button className="bg-white text-teal-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              Get Started Free
            </button>
          </div>
        </section>
      </div>
    </>
  );
}