import { useEffect, useRef, useState } from 'react';
import { Person, Code, Article, SportsEsports } from '@mui/icons-material';
import About from './text-components/About';
import Development from './text-components/Development';
import TechnicalWriting from './text-components/TechnicalWriting';
import Games from './text-components/Games';

const Body: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);

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
      .map((_, i) => (i === index ? '1fr' : 'min-content'))
      .join(' ');
    items.forEach((el, i) => {
      el.dataset.active = (i === index).toString();
    });
    list.style.gridTemplateColumns = template;
  };

  const setGridRows = (index: number) => {
    const list = listRef.current;
    if (!list) return;
    const items = Array.from(list.children) as HTMLElement[];
    const template = items
      .map((_, i) => (i === index ? '1fr' : 'min-content'))
      .join(' ');
    items.forEach((el, i) => {
      el.dataset.active = (i === index).toString();
    });
    list.style.gridTemplateRows = template;
  };

  const handleEvent = (e: React.MouseEvent | React.PointerEvent) => {
    const li = (e.target as HTMLElement).closest('li');
    if (!li || !listRef.current) return;
    const index = Array.from(listRef.current.children).indexOf(li);
    if (index >= 0) {
      setActiveIndex(index);
      if (isMobile) {
        setGridRows(index);
      } else {
        setGridColumns(index);
      }
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isTabletOrSmaller) {
      handleEvent(e);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isTabletOrSmaller) {
      handleEvent(e);
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTabletOrSmaller(window.innerWidth <= 1000);
    };

    const resize = () => {
      if (!listRef.current) return;
      const w = Math.max(...Array.from(listRef.current.children).map(i => (i as HTMLElement).offsetWidth));
      listRef.current.style.setProperty('--article-width', `${w}`);
    };

    checkScreenSize();
    resize();
    
    window.addEventListener('resize', () => {
      checkScreenSize();
      resize();
    });
    
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <main>
      <ul 
        ref={listRef} 
        onPointerMove={handlePointerMove} 
        onClick={handleClick}
      >
        {sections.map((section, i) => (
          <li key={i} data-active={i === activeIndex}>
            <article>
              <div className="title-wrapper">
                <h3>{section.title}</h3>
                <div className="icon-wrapper">{section.icon}</div>
              </div>
              <div className="content-wrapper">{section.description}</div>
              
              {/* <img src={section.image} alt="" /> */}
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Body; 