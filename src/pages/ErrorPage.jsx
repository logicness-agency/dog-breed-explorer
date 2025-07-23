import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-beigeLight text-textPrimary p-6">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="rounded-full px-6 py-3 text-lg font-semibold bg-primary hover:bg-beigeDark text-beigeLight transition-colors duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
}