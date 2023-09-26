// This component is basically for 404 pages where the content or requested URL doesn't exist
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div>
      {/* Header component */}
      <Header />
      <div className="flex justify-center mt-12 mb-10 mx-4">
        <p>Not Found</p>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default NotFound;
