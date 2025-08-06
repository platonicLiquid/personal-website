import { useEffect, useRef, useState } from 'react';
import { Person, Code, Article, SportsEsports } from '@mui/icons-material';
import About from './text-components/About';
import Development from './text-components/Development';
import TechnicalWriting from './text-components/TechnicalWriting';
import Games from './text-components/Games';

const Body: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "About",
      description: <About />,
      icon: <Person />,
    },
    {
      title: "Development",
      description: <Development />,
      icon: <Code />,
    },
    {
      title: "Technical Writing",
      description: <TechnicalWriting />,
      icon: <Article />,
    },
    {
      title: "Games",
      description: <Games />,
      icon: <SportsEsports />,
    },
  ];

  const setGridColumns = (index: number) => {
    const list = listRef.current;
    if (!list) return;
    const items = Array.from(list.children) as HTMLElement[];
    const template = items
      .map((_, i) => (i === index ? '10fr' : '1fr'))
      .join(' ');
    items.forEach((el, i) => {
      el.dataset.active = (i === index).toString();
    });
    list.style.gridTemplateColumns = template;
  };

  const handleEvent = (e: React.MouseEvent | React.PointerEvent) => {
    const li = (e.target as HTMLElement).closest('li');
    if (!li || !listRef.current) return;
    const index = Array.from(listRef.current.children).indexOf(li);
    if (index >= 0) {
      setActiveIndex(index);
      setGridColumns(index);
    }
  };

  useEffect(() => {
    const resize = () => {
      if (!listRef.current) return;
      const w = Math.max(...Array.from(listRef.current.children).map(i => (i as HTMLElement).offsetWidth));
      listRef.current.style.setProperty('--article-width', `${w}`);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <main>
      <ul ref={listRef} onPointerMove={handleEvent} onClick={handleEvent}>
        {sections.map((section, i) => (
          <li key={i} data-active={i === activeIndex}>
            <article>
              <h3>{section.title}</h3>
              <div className="content-wrapper">{section.description}</div>
              <div className="icon-wrapper">{section.icon}</div>
              {/* <img src={section.image} alt="" /> */}
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Body; 