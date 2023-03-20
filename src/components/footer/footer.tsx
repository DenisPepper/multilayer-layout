import css from './footer.module.css';
import { useInView } from 'react-intersection-observer';

interface FooterProps {
  handleFooterScroll: (arg: boolean) => void;
}

export const Footer = (props: FooterProps) => {
  const { handleFooterScroll } = props;

  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  handleFooterScroll(inView);

  return (
    <footer className={css.footer} ref={ref}>
      Footer
    </footer>
  );
};
