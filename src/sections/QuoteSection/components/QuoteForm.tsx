import { useState, useEffect } from "react";
import { services } from "../../../data/services";

const validServiceValues = new Set(services.map((s) => s.slug));

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
  });

  // Prefill service from ?service=slug when coming from a service page
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam && validServiceValues.has(serviceParam)) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, []);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formStarted, setFormStarted] = useState(false);

  const trackFormStart = () => {
    if (!formStarted && typeof window !== 'undefined') {
      setFormStarted(true);
      const pathname = window.location.pathname;
      let eventName = 'formstart_contact';
      
      if (pathname.includes('/services')) {
        eventName = 'formstart_service';
      }
      
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, {
          event_category: 'Form',
          event_label: pathname
        });
      }
    }
  };

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
      if (formData.service) {
        formDataToSend.append("service", formData.service);
      }
      formDataToSend.append("description", formData.description);
      formDataToSend.append("website", "https://jimboscleaning.com/");
      
      if (imageFile) {
        formDataToSend.append("image", imageFile);
      }

      const response = await fetch("https://formspree.io/f/movnnnry", {
        method: "POST",
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      // Formspree returns 200 OK with JSON on success
      if (response.ok) {
        // Redirect to thank you page on success
        window.location.href = "/thank-you";
      } else {
        // Try to get error message from response
        try {
          const errorData = await response.json();
          console.error('Form submission error:', errorData);
        } catch (e) {
          console.error('Form submission failed');
        }
        setSubmitStatus("error");
        setIsSubmitting(false);
      }
    } catch (error) {
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[700px]">
      <form onSubmit={handleSubmit} action="https://formspree.io/f/movnnnry" method="POST" encType="multipart/form-data" className="bg-white rounded-xl p-6 md:p-8 shadow-xl border border-blue-200">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          <div className="md:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              onFocus={trackFormStart}
              className="w-full px-4 py-3 bg-white border border-blue-200 text-neutral-900 rounded-lg focus:ring-2 focus:ring-cta focus:border-cta outline-none transition placeholder:text-neutral-400"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={trackFormStart}
              className="w-full px-4 py-3 bg-white border border-blue-200 text-neutral-900 rounded-lg focus:ring-2 focus:ring-cta focus:border-cta outline-none transition placeholder:text-neutral-400"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-blue-200 text-neutral-900 rounded-lg focus:ring-2 focus:ring-cta focus:border-cta outline-none transition placeholder:text-neutral-400"
              placeholder="+44 123 456 7890"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="service" className="block text-sm font-medium text-neutral-900 mb-2">
              Service (Optional)
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-blue-200 text-neutral-900 rounded-lg focus:ring-2 focus:ring-cta focus:border-cta outline-none transition"
            >
              <option value="">Select a service...</option>
              {services.map((svc) => (
                <option key={svc.slug} value={svc.slug}>
                  {svc.title}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-neutral-900 mb-2">
              Description of Issue or Service Needed *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-blue-200 text-neutral-900 rounded-lg focus:ring-2 focus:ring-cta focus:border-cta outline-none transition resize-none placeholder:text-neutral-400"
              placeholder="Please describe the service you require for your property..."
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="image" className="block text-sm font-medium text-neutral-900 mb-2">
              Upload Image (Optional)
            </label>
            <div className="space-y-3">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 bg-white border border-blue-200 text-neutral-900 rounded-lg focus:ring-2 focus:ring-cta focus:border-cta outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-cta file:text-white hover:file:bg-cta-dark file:cursor-pointer cursor-pointer"
              />
              {imagePreview && (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg border border-blue-200"
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
              <p className="text-xs text-neutral-600">
                Accepted formats: JPG, PNG, GIF. Max size: 10MB
              </p>
            </div>
          </div>
        </div>

        {submitStatus === "error" && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
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
