import Link from "next/link";

export default function Header() {
  return (
    <header className="py-2.5 bg-indigo-900 flex items-center justify-center border-b-2 border-lime-300 fixed w-full backdrop-blur-lg z-20">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="550.953 294.578 157.047 60.967"
          className="w-24 lg:w-32"
        >
          <path
            d=" M 557.105 355.545 L 557.105 355.545 L 557.105 355.545 Q 555.699 355.545 553.868 355.325 L 553.868 355.325 L 553.868 355.325 Q 552.037 355.105 550.953 354.813 L 550.953 354.813 L 550.953 345.877 L 550.953 345.877 Q 552.828 346.404 554.469 346.404 L 554.469 346.404 L 554.469 346.404 Q 557.955 346.404 557.955 341.424 L 557.955 341.424 L 557.955 307.938 L 569.41 307.938 L 569.41 343.826 L 569.41 343.826 Q 569.41 349.305 566.202 352.425 L 566.202 352.425 L 566.202 352.425 Q 562.994 355.545 557.105 355.545 Z  M 557.662 299.676 L 557.662 299.676 L 557.662 299.676 Q 557.662 297.098 559.098 295.838 L 559.098 295.838 L 559.098 295.838 Q 560.533 294.578 563.727 294.578 L 563.727 294.578 L 563.727 294.578 Q 566.92 294.578 568.385 295.867 L 568.385 295.867 L 568.385 295.867 Q 569.85 297.156 569.85 299.676 L 569.85 299.676 L 569.85 299.676 Q 569.85 304.715 563.727 304.715 L 563.727 304.715 L 563.727 304.715 Q 557.662 304.715 557.662 299.676 Z  M 601.998 341.131 L 594.059 341.131 L 591.861 336.736 L 591.627 336.736 L 591.627 336.736 Q 589.313 339.607 586.91 340.662 L 586.91 340.662 L 586.91 340.662 Q 584.508 341.717 580.699 341.717 L 580.699 341.717 L 580.699 341.717 Q 576.012 341.717 573.316 338.904 L 573.316 338.904 L 573.316 338.904 Q 570.621 336.092 570.621 330.994 L 570.621 330.994 L 570.621 330.994 Q 570.621 325.691 574.313 323.099 L 574.313 323.099 L 574.313 323.099 Q 578.004 320.506 585.006 320.184 L 585.006 320.184 L 590.543 320.008 L 590.543 319.539 L 590.543 319.539 Q 590.543 315.438 586.5 315.438 L 586.5 315.438 L 586.5 315.438 Q 582.867 315.438 577.271 317.898 L 577.271 317.898 L 573.961 310.34 L 573.961 310.34 Q 579.762 307.352 588.609 307.352 L 588.609 307.352 L 588.609 307.352 Q 594.996 307.352 598.497 310.516 L 598.497 310.516 L 598.497 310.516 Q 601.998 313.68 601.998 319.363 L 601.998 319.363 L 601.998 341.131 L 601.998 341.131 Z  M 585.563 333.631 L 585.563 333.631 L 585.563 333.631 Q 587.643 333.631 589.122 332.313 L 589.122 332.313 L 589.122 332.313 Q 590.602 330.994 590.602 328.885 L 590.602 328.885 L 590.602 326.307 L 587.965 326.424 L 587.965 326.424 Q 582.311 326.629 582.311 330.584 L 582.311 330.584 L 582.311 330.584 Q 582.311 333.631 585.563 333.631 Z  M 615.66 322.469 L 615.895 322.469 L 615.895 322.469 Q 617.975 319.158 619.439 317.313 L 619.439 317.313 L 626.881 307.938 L 639.654 307.938 L 628.141 322.059 L 640.387 341.131 L 627.291 341.131 L 620.025 329.236 L 616.305 332.078 L 616.305 341.131 L 604.791 341.131 L 604.791 295.545 L 616.305 295.545 L 616.305 313.475 L 616.305 313.475 Q 616.305 318.074 615.66 322.469 L 615.66 322.469 L 615.66 322.469 Z  M 655.367 341.717 L 655.367 341.717 L 655.367 341.717 Q 647.076 341.717 642.491 337.308 L 642.491 337.308 L 642.491 337.308 Q 637.906 332.898 637.906 324.754 L 637.906 324.754 L 637.906 324.754 Q 637.906 316.346 642.154 311.849 L 642.154 311.849 L 642.154 311.849 Q 646.402 307.352 654.283 307.352 L 654.283 307.352 L 654.283 307.352 Q 661.783 307.352 665.87 311.263 L 665.87 311.263 L 665.87 311.263 Q 669.957 315.174 669.957 322.527 L 669.957 322.527 L 669.957 327.625 L 649.479 327.625 L 649.479 327.625 Q 649.596 330.408 651.515 331.99 L 651.515 331.99 L 651.515 331.99 Q 653.434 333.572 656.744 333.572 L 656.744 333.572 L 656.744 333.572 Q 659.762 333.572 662.296 333.001 L 662.296 333.001 L 662.296 333.001 Q 664.83 332.43 667.789 331.053 L 667.789 331.053 L 667.789 339.285 L 667.789 339.285 Q 665.094 340.662 662.223 341.189 L 662.223 341.189 L 662.223 341.189 Q 659.352 341.717 655.367 341.717 Z  M 654.693 315.145 L 654.693 315.145 L 654.693 315.145 Q 652.672 315.145 651.31 316.419 L 651.31 316.419 L 651.31 316.419 Q 649.947 317.693 649.713 320.418 L 649.713 320.418 L 659.557 320.418 L 659.557 320.418 Q 659.498 318.016 658.194 316.58 L 658.194 316.58 L 658.194 316.58 Q 656.891 315.145 654.693 315.145 Z "
            fill="rgb(255,255,255)"
          />
          <path
            d=" M 704.686 334.744 C 706.771 331.864 708 328.324 708 324.5 C 708 314.841 700.159 307 690.5 307 C 680.841 307 673 314.841 673 324.5 C 673 328.656 674.452 332.475 676.875 335.478 Q 676.99 334.913 677.338 334.557 L 677.338 334.557 L 677.338 334.557 Q 677.857 334.023 678.842 334.023 L 678.842 334.023 L 678.842 334.023 Q 679.84 334.023 680.359 334.577 L 680.359 334.577 L 680.359 334.577 Q 680.879 335.131 680.879 336.088 L 680.879 336.088 L 680.879 336.088 Q 680.879 337.059 680.353 337.626 L 680.353 337.626 L 680.353 337.626 Q 680.022 337.983 679.51 338.115 L 679.51 338.115 C 682.515 340.544 686.339 342 690.5 342 C 694.688 342 698.534 340.526 701.547 338.069 Q 701.442 338.07 701.334 338.07 L 701.334 338.07 L 701.334 338.07 L 701.334 338.07 Q 697.902 338.07 696.118 336.067 L 696.118 336.067 L 696.118 336.067 Q 694.334 334.064 694.334 330.318 L 694.334 330.318 L 694.334 330.318 Q 694.334 326.504 696.2 324.453 L 696.2 324.453 L 696.2 324.453 Q 698.066 322.402 701.594 322.402 L 701.594 322.402 L 701.594 322.402 Q 703.986 322.402 705.9 323.291 L 705.9 323.291 L 704.93 325.875 L 704.93 325.875 Q 702.893 325.082 701.566 325.082 L 701.566 325.082 L 701.566 325.082 Q 697.643 325.082 697.643 330.291 L 697.643 330.291 L 697.643 330.291 Q 697.643 332.834 698.62 334.112 L 698.62 334.112 L 698.62 334.112 Q 699.598 335.391 701.484 335.391 L 701.484 335.391 L 701.484 335.391 Q 703.156 335.391 704.686 334.744 Z  M 686.67 335.609 L 686.67 335.609 L 686.67 335.609 Q 688.42 335.609 689.479 334.632 L 689.479 334.632 L 689.479 334.632 Q 690.539 333.654 690.539 331.891 L 690.539 331.891 L 690.539 330.578 L 688.598 330.66 L 688.598 330.66 Q 686.328 330.742 685.296 331.419 L 685.296 331.419 L 685.296 331.419 Q 684.264 332.096 684.264 333.49 L 684.264 333.49 L 684.264 333.49 Q 684.264 334.502 684.865 335.056 L 684.865 335.056 L 684.865 335.056 Q 685.467 335.609 686.67 335.609 L 686.67 335.609 Z  M 693.752 337.797 L 691.455 337.797 L 690.813 335.691 L 690.703 335.691 L 690.703 335.691 Q 689.609 337.072 688.502 337.571 L 688.502 337.571 L 688.502 337.571 Q 687.395 338.07 685.658 338.07 L 685.658 338.07 L 685.658 338.07 Q 683.43 338.07 682.179 336.867 L 682.179 336.867 L 682.179 336.867 Q 680.928 335.664 680.928 333.463 L 680.928 333.463 L 680.928 333.463 Q 680.928 331.125 682.664 329.936 L 682.664 329.936 L 682.664 329.936 Q 684.4 328.746 687.955 328.637 L 687.955 328.637 L 690.566 328.555 L 690.566 327.748 L 690.566 327.748 Q 690.566 326.299 689.89 325.581 L 689.89 325.581 L 689.89 325.581 Q 689.213 324.863 687.791 324.863 L 687.791 324.863 L 687.791 324.863 Q 686.629 324.863 685.563 325.205 L 685.563 325.205 L 685.563 325.205 Q 684.496 325.547 683.512 326.012 L 683.512 326.012 L 682.473 323.715 L 682.473 323.715 Q 683.703 323.072 685.166 322.737 L 685.166 322.737 L 685.166 322.737 Q 686.629 322.402 687.928 322.402 L 687.928 322.402 L 687.928 322.402 Q 690.812 322.402 692.282 323.66 L 692.282 323.66 L 692.282 323.66 Q 693.752 324.918 693.752 327.611 L 693.752 327.611 L 693.752 337.797 L 693.752 337.797 Z "
            fillRule="evenodd"
            fill="rgb(255,255,255)"
          />
        </svg>
      </Link>
    </header>
  );
}
