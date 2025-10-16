import workImage01 from '@/assets/images/work/work-image-01.webp';
import workImage02 from '@/assets/images/work/work-image-02.webp';
import workImage03 from '@/assets/images/work/work-image-03.webp';
import workImage04 from '@/assets/images/work/work-image-04.webp';
import workLogo01 from '@/assets/images/work/work-logo-01.svg';
import workLogo02 from '@/assets/images/work/work-logo-02.svg';
import workLogo03 from '@/assets/images/work/work-logo-03.svg';
import workLogo04 from '@/assets/images/work/work-logo-04.svg';

export const projects = [
  {
    id: 1,
    image: workImage02,
    logo: workLogo02,
    titleKey: 'projects.project1.title',
    descriptionKey: 'projects.project1.description',
    tags: ['tags.websites', 'tags.branding'],
  },
  {
    id: 2,
    image: workImage03,
    logo: workLogo03,
    titleKey: 'projects.project2.title',
    descriptionKey: 'projects.project2.description',
    tags: ['tags.design', 'tags.applications'],
  },
  {
    id: 3,
    image: workImage04,
    logo: workLogo04,
    titleKey: 'projects.project3.title',
    descriptionKey: 'projects.project3.description',
    tags: ['tags.branding', 'tags.websites'],
  },
  {
    id: 4,
    image: workImage01,
    logo: workLogo01,
    titleKey: 'projects.project4.title',
    descriptionKey: 'projects.project4.description',
    tags: ['tags.uxui', 'tags.integrations', 'tags.ecommerce'],
  },
];
