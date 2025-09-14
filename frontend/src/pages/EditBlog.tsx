import { Appbar } from "../components/Appbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, type ChangeEvent } from "react";
import { BackendUrl } from "../config";
import axios from "axios";

export const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  // Fetch blog on mount
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setError(null);
        setLoading(true);
        const response = await axios.get(`${BackendUrl}/api/v1/blog/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setTitle(response.data.post.title);
        setContent(response.data.post.content);
        setRetryCount(0); // Reset retry count on success
      } catch (e: any) {
        const errorMessage = e.response?.data?.message || "Failed to fetch blog details";
        setError(errorMessage);
        console.error("Error fetching blog:", e);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id, retryCount]);

  const editBlog = async () => {
    try {
      setUpdating(true);
      setError(null);
      
      const response = await axios.put(
        `${BackendUrl}/api/v1/blog/${id}`,
        { title, content },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (!response.data) {
        setError("Blog not updated");
        return;
      }

      alert("Blog Updated! Redirecting...");
      setTimeout(() => {
        navigate(`/blog/${response.data.updatedpost.id}`);
      }, 2000);
    } catch (e: any) {
      const errorMessage = e.response?.data?.message || "Connection to backend failed! Try again";
      setError(errorMessage);
      console.error("Error updating blog:", e);
    } finally {
      setUpdating(false);
    }
  };

  const retryFetch = () => {
    if (retryCount < 3) {
      setRetryCount(prev => prev + 1);
    }
  };

  // Loading skeleton
  if (loading) return <EditBlogSkeleton />;

  // Error state with retry option
  if (error && retryCount < 3) {
    return (
      <div className="flex flex-col min-h-screen">
        <Appbar buttoninput="Home" navigateto={() => navigate("/blogs")} />
        <div className="flex flex-col items-center justify-center flex-1 px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-red-800 mb-2">Failed to load blog</h3>
            <p className="text-red-600 mb-4">{error}</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={retryFetch}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Try Again ({retryCount}/3)
              </button>
              <button
                onClick={() => navigate("/blogs")}
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Max retries reached
  if (error && retryCount >= 3) {
    return (
      <div className="flex flex-col min-h-screen">
        <Appbar buttoninput="Home" navigateto={() => navigate("/blogs")} />
        <div className="flex flex-col items-center justify-center flex-1 px-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Unable to load blog</h3>
            <p className="text-gray-600 mb-4">Maximum retry attempts reached. Please try again later.</p>
            <button
              onClick={() => navigate("/blogs")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Go to Blogs
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Appbar buttoninput="Home" navigateto={() => navigate("/blogs")} />

      <div className="flex flex-col justify-center items-center w-full gap-5 pt-3">
        <div className="text-4xl font-extrabold mt-10 mx-10 pb-2">Edit Blog</div>

        {/* Error display for update errors */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl w-full mx-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-600 font-medium">{error}</p>
            </div>
          </div>
        )}

        <div className="w-full">
          <TextArea
            rows={3}
            value={title}
            onchange={(e) => setTitle(e.target.value)}
            disabled={updating}
          />
        </div>

        <div className="w-full">
          <TextArea
            rows={15}
            value={content}
            onchange={(e) => setContent(e.target.value)}
            disabled={updating}
          />
        </div>

        <div className="flex gap-4">
          <button 
            onClick={editBlog}
            disabled={updating}
            className={`font-medium rounded-lg text-sm px-5 py-2.5 my-2 text-center me-2 mb-2 transition-all duration-200
                ${updating 
                    ? 'text-gray-400 bg-gray-300 cursor-not-allowed' 
                    : 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
                }`}
          >
            {updating ? "Updating..." : "Update"}
          </button>
          {updating && (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function TextArea({
  rows,
  value,
  onchange,
  disabled = false,
}: {
  rows: number;
  value: string;
  onchange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}) {
  return (
    <div className="px-10 flex flex-col justify-center items-center">
      <textarea
        onChange={onchange}
        value={value}
        rows={rows}
        disabled={disabled}
        className={`block p-2.5 w-1/2 text-sm shadow-lg rounded-lg border font-semibold
          ${disabled 
            ? 'text-gray-500 bg-gray-100 border-gray-200 cursor-not-allowed' 
            : 'text-gray-900 bg-gray-50 border-white focus:outline-none focus:ring-0 focus:border-white dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-400 dark:text-black dark:focus:ring-0 dark:focus:border-gray-100'
          }`}
      />
    </div>
  );
}

// Edit Blog Loading Skeleton
function EditBlogSkeleton() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Appbar Skeleton */}
      <div className="px-4 py-6">
        <div className="border border-slate-100 shadow-md rounded-xl flex justify-between px-5 animate-pulse">
          <div className="flex items-center">
            <div className="m-3 w-6 h-6 bg-gray-200 rounded"></div>
            <div className="w-20 h-6 bg-gray-200 rounded"></div>
          </div>
          <div className="p-1 gap-3 flex items-center">
            <div className="w-24 h-10 bg-gray-200 rounded-lg"></div>
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex flex-col justify-center items-center w-full gap-5 pt-3 animate-pulse">
        {/* Title Skeleton */}
        <div className="w-48 h-12 bg-gray-200 rounded-lg mt-10"></div>

        {/* Title Input Skeleton */}
        <div className="w-full">
          <div className="px-10 flex flex-col justify-center items-center">
            <div className="block p-2.5 w-1/2 h-20 bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* Content Input Skeleton */}
        <div className="w-full">
          <div className="px-10 flex flex-col justify-center items-center">
            <div className="block p-2.5 w-1/2 h-80 bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="w-32 h-12 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}