export const state = {
  selectedProjectId: null,

  projects: [
    {
      id: 1,
      name: 'Personal',
      color: '#e57373', // Red,
    },
    {
      id: 2,
      name: 'Work',
      color: '#f06292', // Pink,
    },
    {
      id: 3,
      name: 'School',
      color: '#ba68c8', // Purple,
    },
  ],

  tasks: [
    {
      id: 1,
      title: 'Finish Webpack setup',
      completed: false,
      projectId: 1,
    },
    {
      id: 2,
      title: 'Build Todo UI',
      completed: false,
      projectId: 1,
    },
    {
      id: 3,
      title: 'Connect Supabase',
      completed: false,
      projectId: 1,
    },
  ],
};