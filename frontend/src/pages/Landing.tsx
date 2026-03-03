import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Buttoncomponent } from "../components/Appbar";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Appbar */}
      <div className="px-4 py-6">
        <Appbar 
          buttoninput="Get Started" 
          navigateto={() => navigate("/signup")} 
        />
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Stay curious.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button
            onClick={() => navigate("/signup")}
            className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start writing
          </button>
          <button
            onClick={() => navigate("/signin")}
            className="border-2 border-gray-300 hover:border-gray-900 text-gray-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-200 hover:bg-gray-50"
          >
            Sign in
          </button>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Write with ease</h3>
            <p className="text-gray-600 leading-relaxed">
              Create and publish your stories with our intuitive editor. Share your thoughts with the world.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with readers</h3>
            <p className="text-gray-600 leading-relaxed">
              Build an audience and connect with readers who share your interests and passions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Discover ideas</h3>
            <p className="text-gray-600 leading-relaxed">
              Explore diverse perspectives and discover new ideas from writers around the world.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of writers sharing their stories and ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Buttoncomponent 
              title="Create Account" 
              onclick={() => navigate("/signup")} 
            />
            <button
              onClick={() => navigate("/signin")}
              className="text-blue-600 hover:text-blue-800 font-semibold py-2 px-6 transition-colors duration-200"
            >
              Already have an account? Sign in
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
              </svg>
              <span className="text-2xl font-bold">Scriptly</span>
            </div>
          </div>
          <p className="text-gray-400">
            © 2024 Scriptly. A place to share ideas and stories.
          </p>
        </div>
      </footer>
    </div>
  );
};
