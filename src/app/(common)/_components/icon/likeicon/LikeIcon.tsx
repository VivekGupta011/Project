import React from 'react'

const LikeIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="26"
            viewBox="0 0 30 26"
        >
            <defs>
                <clipPath id="clipPath">
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        d="M0 0H30V26H0z"
                        data-name="Rectangle 4"
                        transform="translate(-.154 .196)"
                    ></path>
                </clipPath>
            </defs>
            <g data-name="Group 2" transform="translate(.331 -.581)">
                <g
                    clipPath="url(#clipPath)"
                    data-name="Group 1"
                    transform="translate(-.177 .384)"
                >
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.846 5.688a7.5 7.5 0 016.033-3.218c3.572 0 6.034 3.3 6.034 7.151 0 4.453-3.356 9.722-12.067 14.3-8.711-4.578-12.067-9.851-12.067-14.3 0-3.851 2.462-7.151 6.034-7.151a7.5 7.5 0 016.033 3.218z"
                        data-name="Path 4"
                    ></path>
                </g>
            </g>
        </svg>
    )
}

export default React.memo(LikeIcon)