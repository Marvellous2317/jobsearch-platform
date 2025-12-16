import React, { useState } from "react";
import {
  Copy,
  Check,
  X,
  Briefcase,
  MapPin,
  Building2,
  DollarSign,
  Clock,
  Search,
} from "lucide-react";

const DashboardPage = ({ setCurrentPage, jobListings }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Briefcase className="text-blue-600" size={28} />
            <span className="text-2xl font-bold text-gray-900">JobSearch</span>
          </div>
          <button
            onClick={() => setCurrentPage("register")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold shadow-md"
          >
            Post Jobs
          </button>
        </div>
      </div>
    </nav>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Find Your Dream Job Today
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Browse thousands of opportunities from top companies
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-4 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
            <Search className="text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="bg-transparent outline-none w-full text-gray-900"
            />
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Search
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Latest Job Openings
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">
                    {job.logo}
                  </span>
                </div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {job.type}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {job.title}
              </h3>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Building2 size={16} />
                <span className="text-sm">{job.company}</span>
              </div>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign size={16} />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>Posted {job.posted}</span>
                </div>
              </div>

              <button className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-sm">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const RegistrationPage = ({
  formData,
  handleInputChange,
  handleRegistration,
  setCurrentPage,
}) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => setCurrentPage("dashboard")}
            className="flex items-center gap-2"
          >
            <Briefcase className="text-blue-600" size={28} />
            <span className="text-2xl font-bold text-gray-900">JobSearch</span>
          </button>
        </div>
      </div>
    </nav>

    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-4">
            <Building2 className="text-blue-600" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Register Your Company
          </h2>
          <p className="text-gray-600">
            Start posting jobs and connect with top talent
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your company name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="company@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Industry
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            >
              <option value="">Select industry</option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Retail">Retail</option>
              <option value="Manufacturing">Manufacturing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="City, Country"
            />
          </div>

          <button
            onClick={handleRegistration}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl"
          >
            Complete Registration
          </button>
        </div>
      </div>
    </div>
  </div>
);

const SuccessModal = ({ newCompany, copied, handleCopy, closeModal }) => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-scale-in">
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
          <Check className="text-white" size={48} strokeWidth={3} />
        </div>
      </div>

      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X size={20} />
      </button>

      <div className="pt-16 pb-8 px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Registration Successful! 🎉
          </h2>
          <p className="text-gray-600 text-sm">
            Your company profile has been created. Here's your unique shareable
            link
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 mb-6 border-2 border-blue-200">
          <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
            Your Profile Link
          </label>
          <div className="bg-white rounded-lg px-4 py-3 mb-3 border border-gray-200">
            <p className="text-gray-900 font-mono text-sm break-all">
              https://{newCompany?.shortLink}
            </p>
          </div>
          <button
            onClick={handleCopy}
            className={`w-full py-3 rounded-lg font-semibold transition-all shadow-md ${
              copied
                ? "bg-green-500 text-white"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            }`}
          >
            {copied ? (
              <span className="flex items-center justify-center gap-2">
                <Check size={20} />
                Copied to Clipboard!
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Copy size={20} />
                Copy Link
              </span>
            )}
          </button>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700 text-center">
            💡 Share this link with candidates on social media, email, or your
            website to showcase your company and job openings
          </p>
        </div>

        <button
          onClick={closeModal}
          className="w-full py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
        >
          Done
        </button>
      </div>
    </div>
  </div>
);

export default function JobSearchPlatform() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    industry: "",
    location: "",
  });
  const [newCompany, setNewCompany] = useState(null);

  const jobListings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Industries",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $150k",
      posted: "2 days ago",
      logo: "TC",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "Lagos, NG",
      type: "Full-time",
      salary: "$80k - $100k",
      posted: "5 days ago",
      logo: "SX",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignHub",
      location: "Hybrid",
      type: "Contract",
      salary: "$60k - $90k",
      posted: "1 week ago",
      logo: "DH",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataFlow Inc",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $130k",
      posted: "3 days ago",
      logo: "DF",
    },
    {
      id: 5,
      title: "Backend Engineer",
      company: "CloudTech",
      location: "Abuja, NG",
      type: "Full-time",
      salary: "$90k - $120k",
      posted: "4 days ago",
      logo: "CT",
    },
    {
      id: 6,
      title: "Mobile Developer",
      company: "AppWorks",
      location: "Remote",
      type: "Full-time",
      salary: "$95k - $125k",
      posted: "1 week ago",
      logo: "AW",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistration = () => {
    if (
      !formData.companyName ||
      !formData.email ||
      !formData.industry ||
      !formData.location
    ) {
      alert("Please fill in all fields");
      return;
    }

    const slug = formData.companyName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    const company = {
      ...formData,
      slug: slug,
      shortLink: `jobsearch.co/${slug}`,
    };

    setNewCompany(company);
    setShowSuccessModal(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${newCompany.shortLink}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setCurrentPage("dashboard");
    setFormData({ companyName: "", email: "", industry: "", location: "" });
  };

  return (
    <>
      {currentPage === "dashboard" && (
        <DashboardPage
          setCurrentPage={setCurrentPage}
          jobListings={jobListings}
        />
      )}
      {currentPage === "register" && (
        <RegistrationPage
          formData={formData}
          handleInputChange={handleInputChange}
          handleRegistration={handleRegistration}
          setCurrentPage={setCurrentPage}
        />
      )}
      {showSuccessModal && (
        <SuccessModal
          newCompany={newCompany}
          copied={copied}
          handleCopy={handleCopy}
          closeModal={closeModal}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}
