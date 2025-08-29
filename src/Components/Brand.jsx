import {getContrastYIQ} from '../helpers';

function Brand({ brand }) {
  return (
    <div className="brand">
      <h5>{brand.title}</h5>
      <div className="brand-colors">
        {brand.colors.map((color, index) => (
          <span 
            style={{ '--bgColor': `#${color}`,'--textColor':`${getContrastYIQ(color)}` }} 
            key={index}

          >
            {color}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Brand;
