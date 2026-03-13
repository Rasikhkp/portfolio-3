export const projects = [
  {
    slug: 'pestindo-operations-system',
    title: 'Pestindo Field Operations System',
    shortDesc: 'Operational management system for pest control services.',
    longDesc: [
      "This comprehensive operations platform is engineered to streamline the entire lifecycle of a pest control business—from initial lead generation and customer management to complex field operations, inventory tracking, and real-time reporting.",
      "<h3 class=\"text-2xl md:text-3xl font-black uppercase mt-4 mb-2 tracking-tight border-b-4 border-black inline-block\">Core Modules & Features</h3>",
      "<div class=\"space-y-4\"><p><strong>1. Customer & Lead Management</strong></p><ul class=\"list-disc pl-6 space-y-1 text-lg md:text-xl\"><li><strong>Customer Directory:</strong> A centralized database for managing existing clients, including detailed profiles, job histories, and contact information.</li><li><strong>Prospective Customers:</strong> A dedicated CRM module for tracking sales leads and potential clients before they are converted into active customers.</li><li><strong>Data Import/Export:</strong> Robust support for bulk operations, allowing users to import customer lists from Excel templates and export data for external reporting.</li></ul></div>",
      "<div class=\"space-y-4\"><p><strong>2. Service Operations & Scheduling</strong></p><ul class=\"list-disc pl-6 space-y-1 text-lg md:text-xl\"><li><strong>Job Management:</strong> Defines the types of services provided (e.g., termite control, fumigation) and manages specific service contracts.</li><li><strong>Advanced Scheduling:</strong> A planning module for assigning technicians to specific jobs and time slots, ensuring efficient route and resource allocation.</li><li><strong>Service Reports:</strong> The \"core\" of the field operation. Technicians can generate detailed reports on-site, documenting pests identified, chemicals used, and dosages applied.</li><li><strong>Digital Signatures:</strong> Integrated signature canvas allowing clients to sign off on service reports directly on a mobile device.</li></ul></div>",
      "<div class=\"space-y-4\"><p><strong>3. Inventory & Supply Chain</strong></p><ul class=\"list-disc pl-6 space-y-1 text-lg md:text-xl\"><li><strong>Item & Stock Tracking:</strong> Manages the inventory of pesticides, equipment, and safety gear.</li><li><strong>Technician Inventory:</strong> Tracks \"mobile stock\"—the specific items and quantities currently held by individual technicians in their vehicles.</li><li><strong>Inventory Requests:</strong> An internal workflow for technicians to request more supplies from the central warehouse.</li><li><strong>Supplier Management:</strong> A directory of vendors and suppliers for restocking inventory items.</li></ul></div>",
      "<div class=\"space-y-4\"><p><strong>4. Workforce & Security</strong></p><ul class=\"list-disc pl-6 space-y-1 text-lg md:text-xl\"><li><strong>Employee Management:</strong> Manages staff profiles, including technicians, supervisors, and administrative personnel.</li><li><strong>RBAC (Role-Based Access Control):</strong> A sophisticated permission system that controls access to specific modules and actions based on user roles.</li><li><strong>Activity Logs:</strong> Audit trails that track system changes and user actions for accountability and security.</li></ul></div>",
      "<div class=\"space-y-4\"><p><strong>5. Real-time Features & Offline Support</strong></p><ul class=\"list-disc pl-6 space-y-1 text-lg md:text-xl\"><li><strong>PWA Capabilities:</strong> Designed for field use, the application is installable as a mobile app and optimized for varying network conditions.</li><li><strong>Real-time Notifications:</strong> Uses WebSockets (Laravel Echo/Pusher) to provide instant updates on job assignments and system alerts.</li><li><strong>Dashboard & Analytics:</strong> A high-level overview for management to monitor business health, job completion rates, and active schedules.</li></ul></div>",
      "<h3 class=\"text-2xl md:text-3xl font-black uppercase mt-8 mb-2 tracking-tight border-b-4 border-black inline-block\">Technical Architecture</h3>",
      "<ul class=\"list-disc pl-6 space-y-2 text-lg md:text-xl\"><li><strong>Frontend:</strong> React 18, Vite, Jotai (State), TanStack Query (Server State), TanStack Router.</li><li><strong>UI/UX:</strong> Tailwind CSS, Shadcn UI (Radix UI), Framer Motion.</li><li><strong>Validation & Utilities:</strong> Zod, React Hook Form, xlsx, jspdf, html2canvas, recharts.</li><li><strong>Backend & Real-time:</strong> Laravel Echo, Pusher (WebSockets), MySQL.</li></ul>"
    ],
    images: [
      '/images/pestindo 1.png',
      '/images/pestindo 2.png',
      '/images/pestindo 3.png',
      '/images/pestindo 4.png',
      '/images/pestindo 5.png',
      '/images/pestindo 6.png',
      '/images/pestindo 7.png',
      '/images/pestindo 8.png',
      '/images/pestindo 9.png',
      '/images/pestindo 10.png',
      '/images/pestindo 11.png',
      '/images/pestindo 12.png',
      '/images/pestindo 13.png',
      '/images/pestindo 14.png',
      '/images/pestindo 15.png',
      '/images/pestindo 16.png',
      '/images/pestindo 17.png',
      '/images/pestindo 18.png'
    ],
    techStack: 'Laravel / React / TypeScript / MySQL / TanStack Query',
    year: '2025',
    role: 'Fullstack Developer',
    link: null
  }
];
