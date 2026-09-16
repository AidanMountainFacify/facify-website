import facifyWordmark from '../assets/facify-wordmark.svg'

// Stacked lockup matching the app's sign-in screen: the large "F" mark
// above the FACiFY wordmark. The mark's paths are the app's own vector
// source and take their colour from `currentColor`; the wordmark is a
// flat brand-blue asset generated from the official logo artwork.
export default function FacifyLockup({ className = '' }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 22.74 26.2"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-24 sm:w-28"
      >
        <path
          fill="currentColor"
          d="M6.22 4.49C6.22 2.01 8.23 0 10.71 0h12.03c0 3.5-2.84 6.34-6.34 6.34h-3.36v13.05c0 3.76-3.05 6.82-6.82 6.82V4.49Z"
        />
        <circle fill="currentColor" cx="1.96" cy="11.08" r="1.96" />
        <circle fill="currentColor" cx="17.28" cy="11.08" r="1.96" />
      </svg>

      <img
        src={facifyWordmark}
        alt="Facify"
        className="mt-6 w-48 sm:w-52"
      />
    </div>
  )
}
