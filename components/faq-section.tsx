import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "United Color Painters provides professional painting services throughout Pennsylvania, New Jersey, and New York. We cover major cities and surrounding areas in these states."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we offer free estimates for all our painting services. Contact us to schedule your free consultation, where we'll assess your project and provide a detailed quote."
  },
  {
    question: "What types of paint do you use?",
    answer: "We use high-quality, eco-friendly paints from reputable brands like Sherwin-Williams and Benjamin Moore. We can discuss specific paint options and finishes during your consultation to best suit your needs and preferences."
  },
  {
    question: "How long does a typical painting project take?",
    answer: "The duration of a project depends on its size and complexity. A single room might take 1-2 days, while a whole house exterior could take 1-2 weeks. We'll provide you with a detailed timeline during the estimation process."
  },
  {
    question: "Do you offer a warranty on your work?",
    answer: "Yes, we stand behind our work with a satisfaction guarantee. We offer a 2-year warranty on labor and will address any issues that arise from our workmanship during this period. We'll discuss our warranty terms in detail during your consultation."
  },
  {
    question: "What preparation work do you do before painting?",
    answer: "Our preparation process includes cleaning surfaces, repairing minor damages, sanding, priming (when necessary), and protecting non-paintable surfaces. For exteriors, we may also power wash the surfaces. Proper preparation ensures a long-lasting, high-quality finish."
  },
  {
    question: "Can you help with color selection?",
    answer: "We offer color consultation services to help you choose the perfect colors for your space. Our experienced designers can provide recommendations based on your preferences, lighting conditions, and the latest color trends."
  },
  {
    question: "Do you handle both interior and exterior painting?",
    answer: "Yes, United Color Painters specializes in both interior and exterior painting for residential and commercial properties. We have the expertise and equipment to handle any painting project, big or small."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, United Color Painters is fully licensed and insured. We carry general liability insurance and workers' compensation to protect both our clients and our team. We're happy to provide proof of insurance upon request."
  },
  {
    question: "How do you ensure a clean work environment?",
    answer: "We take cleanliness seriously. Our team uses drop cloths, plastic sheeting, and tape to protect your furniture, floors, and non-paintable surfaces. We clean up daily and perform a thorough clean-up after project completion, leaving your space spotless."
  },
  {
    question: "Can you work around my schedule?",
    answer: "We strive to be as flexible as possible. While most of our work is done during regular business hours, we can often accommodate evening or weekend work for commercial clients to minimize disruption. Discuss your scheduling needs with us during the consultation."
  },
  {
    question: "What safety measures do you follow?",
    answer: "Safety is our top priority. We follow OSHA guidelines, use proper equipment for heights, ensure proper ventilation when using paints with VOCs, and our team is trained in safe work practices. We also take necessary precautions to protect our clients and their property."
  }
]

export function FAQSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="py-4">
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="mt-2 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

