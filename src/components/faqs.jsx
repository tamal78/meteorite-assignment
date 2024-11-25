import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I access the Guide and Map?",
      answer:
        "You can access the guide and map through our online portal or mobile app after purchase.",
    },
    {
      question: "Do I need an internet connection?",
      answer:
        "No, the guide and map can be downloaded and used offline within the app.",
    },
    {
      question: "How long will I have access?",
      answer:
        "You will have lifetime access to the guide and map after purchasing.",
    },
    {
      question: "Can I share it with my travel buddy?",
      answer:
        "No, the guide is for personal use only. Sharing with others is not permitted.",
    },
  ];

  return (
    <div className="bg-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div className="col-span-1">
          <p className="text-3xl font-bold">Your questions,</p>
          <p className="text-3xl font-bold">answered</p>
        </div>

        {/* Accordion Section */}
        <div className="col-span-1 md:col-span-3 divide-y divide-slate-200">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="border-none"
            >
              <AccordionItem value={`faq-${index}`} className="mb-4">
                {/* Disable underline on hover */}
                <AccordionTrigger className="text-lg font-medium text-gray-600 hover:no-underline focus:no-underline">
                  {faq?.question}
                </AccordionTrigger>
                <AccordionContent className="text-md text-gray-600 mt-2">
                  {faq?.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
