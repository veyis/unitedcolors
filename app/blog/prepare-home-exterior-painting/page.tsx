import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { MarketingHeader } from "@/components/marketing-header";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Prepare Your Home for Exterior Painting",
  description:
    "Learn how to properly prepare your home for exterior painting with this step-by-step guide from United Color Painters.",
  openGraph: {
    title: "How to Prepare Your Home for Exterior Painting | United Color Painters",
    description:
      "Follow our expert tips to ensure your home is ready for a professional exterior painting job. Proper preparation is key to a long-lasting finish.",
  },
};

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <StructuredData page="blog" />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        <article className="py-16">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800 leading-tight">
              How to Prepare Your Home for Exterior Painting
            </h1>
            <p className="text-gray-500 text-center mb-8">
              Published on <span className="font-medium">February 1, 2024</span>
            </p>
            <Image
              src="/images/blog/prepare-home-exterior-painting.jpg"
              alt="Home Exterior Preparation for Painting"
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-lg mb-12 shadow-lg"
            />
            <div className="prose max-w-none">
              <p>
                Preparing your home&apos;s exterior for painting is crucial for
                achieving a long-lasting, professional-looking finish. At United
                Color Painters, we always emphasize the importance of proper
                preparation. Here&apos;s a step-by-step guide to help you get
                your home ready for its new coat of paint.
              </p>

              <h2>1. Inspect the Exterior</h2>
              <p>Begin by thoroughly inspecting your home&apos;s exterior. Look for:</p>
              <ul>
                <li>Peeling or chipping paint</li>
                <li>Rotted wood</li>
                <li>Cracks or holes in siding</li>
                <li>Loose caulking around windows and doors</li>
              </ul>

              <h2>2. Make Necessary Repairs</h2>
              <p>Address any issues found during the inspection:</p>
              <ul>
                <li>Replace rotted wood</li>
                <li>Fill cracks and holes with appropriate filler</li>
                <li>Re-caulk windows and doors as needed</li>
              </ul>

              <h2>3. Clean the Exterior</h2>
              <p>A clean surface is essential for paint adhesion:</p>
              <ul>
                <li>Power wash the entire exterior to remove dirt, dust, and loose paint</li>
                <li>Use a mildew-removing solution if necessary</li>
                <li>Allow the surface to dry completely before proceeding</li>
              </ul>

              <h2>4. Remove Loose Paint</h2>
              <p>After cleaning, remove any remaining loose paint:</p>
              <ul>
                <li>Use a paint scraper or wire brush to remove peeling or flaking paint</li>
                <li>Sand rough edges to create a smooth surface</li>
              </ul>

              <h2>5. Prime Bare Spots</h2>
              <p>Apply primer to any bare wood or repaired areas:</p>
              <ul>
                <li>Use a high-quality exterior primer</li>
                <li>Allow the primer to dry completely before painting</li>
              </ul>

              <h2>6. Protect Non-Paintable Surfaces</h2>
              <p>Before painting, protect areas that shouldn&apos;t be painted:</p>
              <ul>
                <li>Cover windows, doors, and hardware with plastic sheeting and painter&apos;s tape</li>
                <li>Use drop cloths to protect plants, walkways, and driveways</li>
              </ul>

              <h2>7. Check the Weather</h2>
              <p>Plan your painting project around suitable weather conditions:</p>
              <ul>
                <li>Avoid painting in direct sunlight or extreme temperatures</li>
                <li>Ensure there&apos;s no rain in the forecast for at least 24 hours after painting</li>
              </ul>

              <div className="bg-blue-100 p-6 rounded-lg mt-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="mr-2 text-blue-600" /> Professional Tip
                </h3>
                <p>
                  For the best results, consider hiring professional painters like United Color Painters. We have the experience, tools, and expertise to properly prepare your home&apos;s exterior and apply paint for a flawless, long-lasting finish.
                </p>
              </div>

              <h2>Ready to Transform Your Home&apos;s Exterior?</h2>
              <p>
                Proper preparation is key to a successful exterior painting project. If you&apos;re ready to give your home a fresh new look,{" "}
                <Link href="/contact" className="text-blue-600 hover:underline">
                  contact United Color Painters
                </Link>{" "}
                today. Our team of experts will ensure your home&apos;s exterior is properly prepared and painted to perfection.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link href="/blog" className="text-blue-600 hover:underline">
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}