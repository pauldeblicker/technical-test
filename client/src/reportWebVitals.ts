import { onCLS, onFCP,onINP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = () => {
    import('web-vitals').then(() => {
      onCLS(console.log);
      onINP(console.log);
      onFCP(console.log);
      onLCP(console.log);
      onTTFB(console.log);
    });
};

export default reportWebVitals;
