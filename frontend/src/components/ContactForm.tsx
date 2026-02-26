import { useState } from 'react';
import { Phone, MessageCircle, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useSubmitEnquiry } from '@/hooks/useQueries';

interface FormData {
  name: string;
  phone: string;
  message: string;
  requestCallback: boolean;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: '',
    requestCallback: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const submitEnquiry = useSubmitEnquiry();

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[0-9+\s-]{7,15}$/.test(formData.phone.trim())) newErrors.phone = 'Enter a valid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await submitEnquiry.mutateAsync({
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        requestCallback: formData.requestCallback,
      });

      setSubmitted(true);

      // Open WhatsApp with pre-filled message
      const waText = `Hi! I am ${formData.name} from Akhnoor. ${formData.message}. My phone: ${formData.phone}.${formData.requestCallback ? ' Please call me back.' : ''}`;
      window.open(`https://wa.me/919419100159?text=${encodeURIComponent(waText)}`, '_blank');
    } catch {
      // Still open WhatsApp even if backend fails
      const waText = `Hi! I am ${formData.name}. ${formData.message}. My phone: ${formData.phone}.`;
      window.open(`https://wa.me/919419100159?text=${encodeURIComponent(waText)}`, '_blank');
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest font-body mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Send Us an Enquiry
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Have a question or want to place a bulk order? Fill in the form below and we'll get back to you right away.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Enquiry Sent!</h3>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  Thank you! Your enquiry has been received. WhatsApp has been opened for instant chat.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', message: '', requestCallback: false });
                  }}
                  className="text-gold font-semibold font-body text-sm hover:text-gold-dark transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="font-body font-medium text-foreground">
                    Your Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`font-body ${errors.name ? 'border-destructive' : ''}`}
                  />
                  {errors.name && <p className="text-destructive text-xs font-body">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="font-body font-medium text-foreground">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`font-body ${errors.phone ? 'border-destructive' : ''}`}
                  />
                  {errors.phone && <p className="text-destructive text-xs font-body">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="font-body font-medium text-foreground">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what you're looking for..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`font-body resize-none ${errors.message ? 'border-destructive' : ''}`}
                  />
                  {errors.message && <p className="text-destructive text-xs font-body">{errors.message}</p>}
                </div>

                {/* Callback checkbox */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="callback"
                    checked={formData.requestCallback}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, requestCallback: checked === true })
                    }
                    className="border-gold data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                  />
                  <Label htmlFor="callback" className="font-body text-sm text-foreground cursor-pointer">
                    📞 Request a Call Back
                  </Label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitEnquiry.isPending}
                  className="w-full flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark disabled:opacity-60 text-steel-dark font-bold py-3.5 rounded-full transition-all duration-200 font-body"
                >
                  {submitEnquiry.isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {submitEnquiry.isPending ? 'Sending...' : 'Send Enquiry via WhatsApp'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Prefer to Contact Directly?
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                We're available 6 days a week to help you find the perfect kitchen utensils and cookware. Call us or WhatsApp for instant assistance.
              </p>
            </div>

            {/* Direct Call */}
            <a
              href="tel:+919419100159"
              className="flex items-center gap-4 bg-steel-dark text-white rounded-2xl p-5 hover:bg-steel transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-steel-dark" />
              </div>
              <div>
                <div className="font-body text-white/70 text-xs mb-0.5">Call us directly</div>
                <div className="font-bold text-lg font-body">+91 9419100159</div>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919419100159?text=Hi!%20I%20want%20to%20enquire%20about%20products%20at%20Dwarka%20Bartan%20Store%2C%20Akhnoor."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-600 text-white rounded-2xl p-5 hover:bg-green-700 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-body text-white/70 text-xs mb-0.5">Instant WhatsApp Chat</div>
                <div className="font-bold text-lg font-body">Chat with Us Now</div>
              </div>
            </a>

            {/* Store info */}
            <div className="bg-gold/10 border border-gold/20 rounded-2xl p-5">
              <h4 className="font-display font-bold text-foreground mb-2">Store Location</h4>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Main Market, Akhnoor<br />
                Jammu & Kashmir, India<br />
                <span className="text-gold font-medium">Mon–Sat: 9AM–8PM · Sun: 10AM–6PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
