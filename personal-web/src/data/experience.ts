export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  institution: string;
  description: string;
  type: 'education' | 'certification' | 'achievement' | 'milestone';
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'apu-software-engineering',
    date: 'Graduation Date 2028',
    title: 'BSc (Hons), Software Engineering',
    institution: 'Asia Pacific University of Technology & Innovation, Kuala Lumpur',
    description:
      'Pursuing software engineering with a GPA of 3.94. Relevant coursework includes Object-Oriented Programming and Database Systems.',
    type: 'education',
  },
  {
    id: 'dmu-dual-degree',
    date: 'Graduation Date 2028',
    title: 'Dual Degree Programme',
    institution: 'De Montfort University, Leicester',
    description:
      'Completing a dual degree programme with De Montfort University alongside studies at Asia Pacific University.',
    type: 'education',
  },
  {
    id: 'dharma-loka',
    date: 'Graduation Date 2025',
    title: 'Senior High School',
    institution: 'Dharma Loka Senior High School, Pekanbaru',
    description:
      'Graduated from Dharma Loka Senior High School with a grade of 96.',
    type: 'education',
  },
  {
    id: 'osis-religious-division',
    date: 'Nov 2023 - Nov 2024',
    title: 'Head of Religious Division',
    institution: 'Organisasi Siswa Intra Sekolah - OSIS, Pekanbaru',
    description:
      'Led and coordinated a team of 5 members in organizing school religious events and programs, ensuring activities ran smoothly, on schedule, and met organizational objectives.',
    type: 'achievement',
  },
  {
    id: 'aws-cloud-club',
    date: 'Jan 2026 - Present',
    title: 'Member',
    institution: 'AWS Cloud Club, Kuala Lumpur',
    description:
      'Participates in workshops, discussions, and activities focused on cloud computing, AWS services, industry practices, and foundational deployment workflows.',
    type: 'milestone',
  },
];
