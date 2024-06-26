import commonData from './common.json';

const data = {
  page: 'resume',
  title: 'Nichole &quot;Nickel&quot; Mattera',
  description: 'Résumé for Nichole Mattera',
  about: {
    image: '/images/nickel.webp 1x, /images/nickel@2x.webp 2x',
    imageAlt: 'Selfie of Nichole Mattera',
    imageHeight: '256px',
    imageWidth: '192px',
    description:
      "<p>I've been interested in and passionate about programming since I was a kid. I started tinkering on an old 486 laptop with Borland C++ modifying examples to make fake installation applications. Once I got my Sony PSP in high school, I created and released homebrew applications. With that experience, I got a job out of high school with PosiMotion.</p><p>Today, I still have a passion for programming with plenty of side projects outside of work, such as Outclimb, Prideful.li and my Nintendo Switch homebrew applications. I have also picked up a few more hobbies, such as rock climbing, hiking, and photography. In my free time, I also volunteer with Open Arms of Minnesota, helping to provide nourishing meals to critically ill individuals and their families.</p>",
  },
  experiences: [
    {
      organization: 'Nearpod',
      logo: '',
      logoAlt: '',
      roles: [
        {
          title: 'Staff Frontend Engineer',
          start: '2023-07',
          description:
            "<p>I joined the Core Platform team to help build a solid foundation and support their feature teams. I have worked on and led the effort to update Nearpod's Component Library to match their internal design system. I also created a tool to query across their vast number of repositories to audit where things are being used. I've also worked on documenting processes and building an agreement with the team on how we work.</p>",
        },
      ],
    },
    {
      organization: 'Pendo.io',
      logo: '',
      logoAlt: '',
      roles: [
        {
          title: 'Staff Front End Engineer',
          start: '2023-01',
          end: '2023-06',
          description:
            '<p>I continued for a few months on the team responsible for Data Explorer once the Tech Lead returned from paternity leave. For the transition, I documented all the process changes and everything the team and squad had accomplished while they were out to help get them back up to speed faster. I then transitioned to the team responsible for Integrations, the public API, and Webhooks, where I helped with the final touches on Data Sync. In addition, I supported their customers by fixing some long-standing bugs in a few of our key integrations. I also began upgrading the dependencies of their Resource Center integration repository.</p>',
        },
        {
          title: 'Staff Front End Engineer, Tech Lead',
          start: '2022-02',
          end: '2023-01',
          description:
            "<p>I continued to lead the team responsible for Workflows in Pendo's Adopt product. In my time as Tech Lead for this team, we delivered multiple features on time, such as Workflows for Recurring Processes, the ability to Segment by Workflow, and the ability to Visualize Progress Over Time. I then proceeded to be the temporary Tech Lead for the team responsible for Data Explorer in Pendo's Engage product while their Tech Lead was out on paternity leave. While being Tech Lead on that team, I helped improve the team's and squad's process by implementing a fixed template and strategy of documenting our Epics into Confluence. In addition, I worked on reducing the number of meetings between team leadership to allow the Tech Lead to work more with the team. During my time as Tech Lead for this team, we delivered General Improvements to Data Explorer, the ability to search and view Metadata Values in the Segment Builder, and added functionality to filter by Event Properties in Data Explorer.</p>",
        },
        {
          title: 'GSRM Affinity Group Co-Chair',
          start: '2021-02',
          end: '2022-04',
          description:
            "<p>As the co-chair of the GSRM affinity group at Pendo, I helped plan monthly meetings and events with our community. I also aided in educating Pendozers both in and outside of the group on important GSRM issues, such as daily slack posts for Transgender Awareness Week, Aromantic Spectrum Awareness Week, and much more. Being a co-chair also made me part of Pendo's Diversity Advisory Board, where I would advocate for changes for the GSRM group.</p>",
        },
        {
          title: 'Senior Front End Engineer, Tech Lead',
          start: '2021-08',
          end: '2022-02',
          description:
            "<p>I was allowed to lead a brand new team for Pendo's Adopt product. This team was focused on the Workflows feature, which would allow our Adopt users to gather valuable insight into their business processes. This highly efficient team delivered everything we set out to do in a quarter in time for the release of the Adopt product at the annual Company Kick-Off event. We then consistently produced new features and developed highly efficient processes to run our team flat and lean. Some of those features include Workflows, recurring Workflows, completion over time charts for recurring and non-recurring Workflows, and segmentation by Workflows.</p>",
        },
        {
          title: 'Senior Front End Engineer',
          start: '2020-06',
          end: '2021-08',
          description:
            '<p>I came in at the tail end of a project to allow customers to subscribe to account and visitor reports and receive weekly email updates. Even then, I helped with the final finishing touches on the email templates to prepare them for release. After that project, we continued working on Core Events, Core Event Dashboard widgets, Core Event Dropdowns, Product Engagement Score, and Product Engagement Score drill-downs. I then moved on to another team working on our Adopt product, specifically Adopt Studio, getting that project off the ground and primarily working around the WYSIWYG.</p>',
        },
      ],
    },
    {
      organization: 'Cision',
      logo: '',
      logoAlt: '',
      roles: [
        {
          title: 'Software Engineer',
          start: '2016-09',
          end: '2020-06',
          description:
            '<p>When I joined, I started working in the frontend of the Analytics area for our main product, Cision Communication Cloud. While at Cision, I moved into more of a full-stack role working on both the Angular.js frontend and C# backend. At Cision, I helped on the Analytics Dashboard, Social Analytics Tracking, and the Earned/Placed Impact areas of Cision Communication Cloud. Near the end of my time at Cision, we acquired TrendKite, where I worked on their ReactJS frontend, specifically in the Email Marketing area.</p>',
        },
      ],
    },
    {
      organization: 'Mindtree',
      logo: '',
      logoAlt: '',
      roles: [
        {
          title: 'Techinical Project Lead',
          start: '2014-01',
          end: '2016-09',
          description:
            "<p>Was lead programmer on most mobile projects at Mindtree's Gainesville Delivery Center. Some of my day-to-day responsibilities included:</p><ul><li>Estimations for statements of work.</li><li>Creating build processes for the team.</li><li>Setting up continuous integration using Git and Jenkins.</li><li>Meeting with clients to help the business analysis flush out user stories.</li><li>Setting up basic frameworks and design database structures.</li><li>Managing code quality.</li><li>Conducting technical interviews.</li><li>raining/teaching junior programmers. (iOS, Android, HTML, CSS, JS, TDD)</li><li>Helping clients adapt to agile methodology.</li></ul>",
        },
      ],
    },
    {
      organization: 'Zgraph',
      logo: '',
      logoAlt: '',
      roles: [
        {
          title: 'Lead Internet Engineer',
          start: '2011-11',
          end: '2014-01',
          description:
            '<p>I was the Lead Internet Engineer at Zgraph, Inc, and was the lead programmer on many of the large projects that came into Zgraph. I was also in charge of making sure the eight servers owned by Zgraph at the time stayed up and healthy.</p>',
        },
      ],
    },
    {
      organization: 'PosiMotion',
      logo: '',
      logoAlt: '',
      roles: [
        {
          title: 'Lead Programmer',
          start: '2008-06',
          end: '2011-11',
          description:
            '<p>I was the lead programmer at PosiMotion, LLC. In this position I was in charge of any main projects that came in or out of the company. I also acted as a mentor for the other programmers that were not as experienced. Additionally I interfaced with the technical teams from other companies or individuals that were interested in publishing and/or working with us.</p>',
        },
      ],
    },
  ],
  publications: [
    {
      name: 'Pendo Developers Blog - Creating Delightful Graphs using HTML5 Canvas',
      link: 'https://developers.pendo.io/engineering/creating-delightful-graphs-using-html-5-canvas/',
    },
    {
      name: 'iPhone Games Project - Chapter 5 - Starting with a Game Design Document: A Methodology for Success',
      link: 'https://books.google.com/books?id=84yR6Re7RwAC&hl=en',
    },
  ],
  education: [
    {
      name: 'A.S. in Computer Programming and Analysis',
      description:
        "<p>I was dual enrolled for my Junior and Senior years of High School. I continued taking classes afterward to wrap up the degree and graduated with honors.</p>",
    },
    {
      name: 'A.S. Certificate in Computer Programming',
      description:
        "<p>This certificate had similar course requirements to my A.S. Degree, so when graduating, I also qualified for this.</p>",
    },
  ],
  certifications: [
    {
      name: 'NOLS Wilderness First Aid',
      description: "Issued on February 4th, 2024 and expires on February 4th, 2026."
    },
    {
      name: 'NOLS Epinephrine Auto-Injector',
      description: "Issued on February 4th, 2024 and expires on February 4th, 2026."
    },
    {
      name: 'Pendo Essentials',
      description:
        "<p>I completed the Pendo Essentials class with a certified instructor. The Pendo Essentials certification certifies that I can install Pendo, tag features, and pages, create and use segments, implement guides and layouts, and interpret behavioral analytics.</p>",
      link: 'https://www.credly.com/badges/cafd0eb7-6a6a-4e66-8e9f-a41d4b1b1bf9',
    },
    {
      name: 'Orchestra Commerce Platform Technical Training',
    },
    {
      name: 'Scaled Agile Framework Practitioner (SP)',
    },
  ],
  projects: [
    {
      name: 'Pendo Adopt',
      type: 'Web App',
      description: '<p>Worked on Adopt Studio and Workflows.</p>',
    },
    {
      name: 'Pendo Engage',
      type: 'Web App',
      description:
        "<p>Worked on Scheduled Reports for Visitor and Accounts, Core Events and Product Engagement Score.</p>",
    },
    {
      name: 'Cision Communication Cloud',
      type: 'Web App',
      description:
        "<p>Worked on the Analytic Dashboards, Impact, and Report Generation.</p>",
    },
    {
      name: 'Volvo Scout Master & Mack CV360',
      type: 'iPad App',
      description:
        "<p>CRM iPad application for dealerships to record sales people day-to-day work.</p>",
    },
    {
      name: 'National Marker Company',
      type: 'E-Commerce Website',
      description:
        "<p>Completely custom e-commerce website with a backend C service to synchronize the site data with their internal systems.</p>",
    },
    {
      name: 'Monterey Boat: Boat Guide',
      type: 'iOS App',
      description:
        "<p>iPhone and iPad application for browsing features and specifications of boat models.</p>",
    },
    {
      name: "Toys 'R' Us Big Book",
      type: 'iPhone App',
      description:
        "<p>Basic wish list application for Toys 'R' Us holiday catalog.</p>",
    },
    {
      name: 'National Geographic Jigsaw/Spot It',
      type: 'iPhone Games',
      description:
        "<p>Six different edutainment iPhone games around National Geographic content.</p>",
    },
    {
      name: 'G-Park',
      type: 'iPhone App',
      description:
        "<p>App that let you save the location of your parked car along with additional data. Was featured on a iPhone 3G commercial internationally by Apple.</p>",
    },
  ],
  awards: [
    {
      organization: 'Pendo.io',
      honors: [
        {
          name: 'Most Win Together Panks for Q3FY22',
          date: '2021-11',
          description:
            "<p>For receiving the most 'Win Together' Panks (co-workers commendations) in a quarter for upholding Pendo's Win Together core value - We succeed together and challenge each other to grow. We collaborate and support one another as a team.</p>",
        },
        {
          name: 'Most Total Panks for Q3FY22',
          date: '2021-11',
          description:
            "<p>For receiving the most overall Panks (co-workers commendations) in a quarter for upholding Pendo's core values.</p>",
        },
      ],
    },
    {
      organization: 'Mindtree',
      honors: [
        {
          name: 'A-Team',
          issuer: 'Reporting Manager',
          date: '2016-09',
          description:
            "<p>Congratulations to the Mindtree MGIC Team for the outstanding SPORT Delivery. This project was the prime example of AGILE success. The team completed almost twice the amount of Scope for Desktop and Mobile delivery than originally anticipated and Agile implementation as part of the SDLC. The team developed a strong relationship with the client building trust and helped progress the organization towards an Agile transformation while delivering the first MVP 3 weeks before the deadline. Team work, professionalism and dedication is what defines this team and contributed to it's success!</p>",
        },
        {
          name: 'Bronze Pillar',
          issuer: 'Reporting Manager',
          date: '2016-09',
          description:
            "<p>For scoring a 4.5 or higher on my yearly appraisal for the second year in a row.</p>",
        },
        {
          name: 'A-Team',
          issuer: 'Project Manager for MSC eVMI App',
          date: '2016-06',
          description:
            "<p>For the fantastic Job performed during the phase 1 of eVMI iOS Mobile App</p>",
        },
        {
          name: 'Partnership',
          issuer: 'Business Analysis for MGIC SPORT Project',
          date: '2016-06',
          description:
            "<p>I have really appreciated your positivity and and teaming spirit on this engagement! I dont think we could do all of this without you. Thanks for all you have done to help our MGIC partners understand agile! and all you have done to get us set up and off to a great start!</p>",
        },
        {
          name: 'Unstoppable',
          issuer: 'Head of Delivery for the USA Delivery Center',
          date: '2016-06',
          description:
            "<p>During a recent customer visit with MGIC in Milwaukee I met with their CIO, Greg Chi. While he had many positive things to say about the team, he specifically cited the contributions and accomplishments from Nichole. From Greg's comments it became clear Nichole has delivered the perfect trifecta: collaborative spirit, unrelenting dedication and expert thinking to exceed MGIC's expectations to replace a Salesforce application with a mobile solution.</p>",
        },
        {
          name: 'Unstoppable',
          issuer: 'Scrum Master for MGIC SPORT Project',
          date: '2016-06',
          description:
            "<p>Nichole has been an outstanding contributor for the MGIC project from the outset. She has worked hard to get the initial designs in place to impress the client. Her innovative thinking, technical expertise, and mentoring while putting the team on the ground have made the process streamlined and a lot less stressful for the junior developers.</p>",
        },
        {
          name: 'A-Team',
          issuer: 'Reporting Manager',
          date: '2016-04',
          description:
            "<p>Continuously changing Product Owner and requirements being the blocker team demonstrated dedication and passion to get the MVP release for Agile Assessment tool 'Age' which is going to be Mindtree Proprietary tool for Agile Assessments used heavily in Agile Transformation projects. Contribution from Carrie was amazing without which this was nightmare..! Ed and Andrew being fresh graduated from C2IT demonstrated the quick learning and ability to pivot which was fantastic and Nichole helped the team getting technical roadblocks removed..! All in all great work done..!</p>",
        },
        {
          name: 'A-Team',
          issuer: 'Reporting Manager',
          date: '2016-04',
          description:
            "<p>Team has done a great job with MSC project Mobile Client development in Swift making a digital footprint in RCM IG as our first engagement with from GDC. Team has received 7/7 for CSAT score with every individual component being rated as 7. This is unique and inspiring to all of us. Great Job team and Good luck ...!</p>",
        },
        {
          name: 'A-Team',
          issuer: 'US VP of Sales for the High Tech Vertical',
          date: '2016-01',
          description:
            "<p>For creating and executing an extremely successful and memorable visit for the executives of American Red Cross that involved extensive collaboration together with:</p><ul><li>Attention to every single detail of the visit visible in all planning and preparation</li><li>Creating an agenda that resonated with everyone and showed our understanding of the customer</li><li>Demonstrating Mindtree's expertise and how thorough and passionate everyone is in what we do</li><li>Making them feel comfortable and welcome</li></ul>",
        },
        {
          name: 'Outstanding Performer',
          issuer: 'Reporting Manager',
          date: '2015-09',
          description:
            "<p>For scoring a 4.5 or higher on my yearly appraisal.</p>",
        },
        {
          name: 'Unstoppable',
          issuer: 'Reporting Manager',
          date: '2014-12',
          description:
            "<p>Nichole has been Unstoppable Mind consistently showing a excellence in execution for her Project work at Volvo. She has been recognized by client not just for her iOS expertise but she had been showing her excellence in Android related work, UI libraries and the list goes on. She has been mentoring new developers in Digital team for iOS, knowledge on Git repo, Continuos integration and Jenkins setup. She has built very nice applications like Responder, which showcases her technical excellence and proactive nature. She get things done while we keep thinking about them at times. It's really great to have her part of Digital team and GDC. Keep up the good work...!</p>",
        },
        {
          name: 'Unstoppable',
          issuer: 'Reporting Manager',
          date: '2014-08',
          description:
            "<p>Nichole is a great team player and hard core developer who just keeps coding all the time :) She has successfully implemented the Test Driven Development for Mobile application and showcased it to client within the timeframe. She helped the Marriott team getting geared up for Bootstrap in very short time and helped the team with initial deliverables and bring it to speed. She always contributes to ideas, quick prototyping and educating team with development tools. She is really unstoppable and would like to appreciate her efforts. Keep up the good work.</p>",
        },
      ],
    },
  ],
};

function formatDate(dateString) {
  const dateFormatter = new Intl.DateTimeFormat('en', {
    month: 'long',
    year: 'numeric',
  });
  const [year, month] = dateString
    .split('-')
    .map((value) => parseInt(value, 10));
  return dateFormatter.format(Date.UTC(year, month - 1, 15, 12, 30, 30, 500));
}

function formatTimeSpan(startDateString, endDateString) {
  const [startYear, startMonth] = startDateString
    .split('-')
    .map((value) => parseInt(value, 10));
  const [endYear, endMonth] = endDateString
    .split('-')
    .map((value) => parseInt(value, 10));

  let yearSpan,
    monthSpan = 0;
  if (startMonth - 1 > endMonth) {
    yearSpan = endYear - startYear - 1;
    monthSpan = 12 + endMonth - (startMonth - 1);
  } else {
    yearSpan = endYear - startYear;
    monthSpan = endMonth - (startMonth - 1);
  }

  let result = '';
  if (yearSpan === 1) {
    result += '1 year ';
  } else if (yearSpan > 1) {
    result += `${yearSpan} years `;
  }

  if (monthSpan === 1) {
    result += '1 month';
  } else if (monthSpan > 1) {
    result += `${monthSpan} months`;
  }

  return result.trimEnd();
}

export default {
  ...commonData,
  ...data,
  awards: data.awards.map((award) => {
    return {
      ...award,
      honors: award.honors.map((honor) => {
        honor.dateText = formatDate(honor.date);

        return honor;
      }),
    };
  }),
  experiences: data.experiences.map((experience) => {
    return {
      ...experience,
      roles: experience.roles.map((role) => {
        if (role.end) {
          role.endText = formatDate(role.end);
          role.timeSpan = formatTimeSpan(role.start, role.end);
        }

        role.isPresent = !role.end;
        role.startText = formatDate(role.start);

        return role;
      }),
    };
  }),
};
