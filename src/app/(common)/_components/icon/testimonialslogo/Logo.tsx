import React from 'react';

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
      width="176"
      height="176"
      viewBox="0 0 176 176"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.233"
          y1="0.105"
          x2="0.733"
          y2="1.36"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#f1ce55" />
          <stop offset="0.3" stopColor="#f9522d" />
          <stop offset="0.596" stopColor="#c441ce" />
          <stop offset="0.808" stopColor="#81a98b" />
          <stop offset="1" stopColor="#95ffe8" />
        </linearGradient>
        <clipPath id="clipPath">
          <rect
            id="Rectangle_55"
            data-name="Rectangle 55"
            width="102"
            height="79.423"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Group_23" data-name="Group 23" transform="translate(-605 -3915)">
        <circle
          id="Ellipse_10"
          data-name="Ellipse 10"
          cx="88"
          cy="88"
          r="88"
          transform="translate(605 3915)"
          fill="url(#linear-gradient)"
        />
        <circle
          id="Ellipse_9"
          data-name="Ellipse 9"
          cx="83"
          cy="83"
          r="83"
          transform="translate(610 3920)"
          fill="#fff"
        />
        <g id="Group_22" data-name="Group 22" transform="translate(642 3973)">
          <g id="Group_21" data-name="Group 21" clipPath="url(#clipPath)">
            <path
              id="Path_18"
              data-name="Path 18"
              d="M9.645.338C8.99.44,8.36,2.853,7.093,4.11c-.926.907-2.083.851-2.7,1.972C4.163,6.5,4.239,7.216,3.974,7.9,3.457,9.277,1.637,9.4,1.637,10.9c-.006,1.616,1.518,1.925,2.838,3.072,1.03.923,1.131,1.559,2.379,2.007,1.065.362,2.65-.822,4.077-.4,1.172.35,2.293.6,2.558,1.805.233,1.109-.016,2.829-1.437,2.631a15.557,15.557,0,0,0-5.107-.482c-3.078.35-6.591,1.355-6.934,4.786-.189,1.919,2.183,4.181,4.474,3.721,1.585-.312.835-2.18,1.7-3.088,1.131-1.162,7.539,4.058,13.5,4.058A7.783,7.783,0,0,0,25.9,26.434c.173-.148.384-.466.652-.485a2.278,2.278,0,0,1,.838.375c4.8,3.856,8.424,11.591,26.058,11.682a11.873,11.873,0,0,1,7.611,3.3c2.057,1.9,3.261,4.861,4.43,7.863,1.764,4.505,4.928,8.888,9.722,13.765.262.261,4.209,3.33,4.524,3.56a1.9,1.9,0,0,1,.24,1.112c-.117,2.924-.542,11.427,5.8,11.811,1.55.079,1.144-1.011,1.144-1.761,0-1.481-.274-2.952.507-4.467,1.068-2.085-2.265-3.047-2.168-7.555.069-3.361-2.754-2.788-4.187-5.349-.825-1.484-1.559-2.271-1.506-4.086.321-10.214-2.174-16.924-3.418-18.572-.97-1.244-1.774-1.739-.885-2.316,5.29-3.494,6.49-6.745,6.49-6.745,2.813-6.613,5.343-12.652,8.831-15.311a26.172,26.172,0,0,1,3.611-2.423c3.254-1.534,4.968-2.464,5.913-3.384,1.5-1.459,2.678-4.5,1.244-6.342-1.783-2.275-4.867-.469-6.228.337C85.4,7.216,83.965,17.4,80.6,23.246c-2.687,4.672-7.057,8.1-10.963,8.383A19.5,19.5,0,0,1,60.4,29.874a46.449,46.449,0,0,1-12.816-8.446c-2.054-1.585-18-17.24-30.922-17.879,0,0-1.6-3.21-2.007-3.264C13.712.165,12.745,2.2,12.052,2.44,11.4,2.657,10.3.231,9.645.339"
              transform="translate(0 0)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default React.memo(Logo);
