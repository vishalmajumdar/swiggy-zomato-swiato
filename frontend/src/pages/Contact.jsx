// This is a contact page component in which nothing is special as of now
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      {/* Header component */}
      <Header />
      <div className="flex justify-center mt-12 mb-10 mx-4">
        <p>Contact me</p>
      </div>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Contact;
