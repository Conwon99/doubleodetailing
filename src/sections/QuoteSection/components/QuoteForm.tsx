import { useState } from "react";

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("Image size must be less than 10MB");
        return;
      }
      setImageFile(file);
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Use FormData to support file uploads
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("serviceType", formData.serviceType);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("website", "https://ampmwatchrepair.com/");
      
      if (imageFile) {
        formDataToSend.append("image", imageFile);
      }

      const response = await fetch("https://formspree.io/f/xvzzebzl", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          description: "",
        });
        setImageFile(null);
        setImagePreview(null);
        // Reset file input
        const fileInput = document.getElementById("image") as HTMLInputElement;
        if (fileInput) {
          fileInput.value = "";
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[700px]">
      <form onSubmit={handleSubmit} action="https://formspree.io/f/xvzzebzl" method="POST" className="bg-black rounded-xl p-6 md:p-8 shadow-xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          <div className="md:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-cta focus:border-cta outline-none transition placeholder:text-gray-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-cta focus:border-cta outline-none transition placeholder:text-gray-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-cta focus:border-cta outline-none transition placeholder:text-gray-500"
              placeholder="+44 123 456 7890"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="serviceType" className="block text-sm font-medium text-white mb-2">
              Service Type *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-cta focus:border-cta outline-none transition"
            >
              <option value="">Select a service...</option>
              <option value="full-service">Full Service</option>
              <option value="part-repair">Part Repair</option>
              <option value="glass-replacement">Glass Replacement</option>
              <option value="battery-replacement">Battery Replacement</option>
              <option value="vintage-restoration">Vintage Restoration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
              Description of Issue or Service Needed *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-cta focus:border-cta outline-none transition resize-none placeholder:text-gray-500"
              placeholder="Please describe the issue with your watch or the service you require..."
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="image" className="block text-sm font-medium text-white mb-2">
              Upload Image (Optional)
            </label>
            <div className="space-y-3">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-cta focus:border-cta outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-cta file:text-white hover:file:bg-cta-dark file:cursor-pointer cursor-pointer"
              />
              {imagePreview && (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg border border-gray-700"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 text-sm font-medium transition"
                    aria-label="Remove image"
                  >
                    ×
                  </button>
                </div>
              )}
              <p className="text-xs text-gray-400">
                Accepted formats: JPG, PNG, GIF. Max size: 10MB
              </p>
            </div>
          </div>
        </div>

        {submitStatus === "success" && (
          <div className="mt-6 p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-300">
            Thank you! Your quote request has been submitted. We'll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mt-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-300">
            There was an error submitting your request. Please try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 bg-cta hover:bg-cta-dark text-white font-medium py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Request Quote"}
        </button>
      </form>
    </div>
  );
};
