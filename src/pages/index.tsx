import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { BlogPost } from "@/components/blocks/BlogPost"

// Sample blog posts data
const blogPosts = [
  {
    title: "The Future of AI in 2024",
    excerpt: "Exploring the latest breakthroughs in artificial intelligence and their impact on society.",
    date: "March 15, 2024",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
  },
  {
    title: "Sustainable Living in Modern Cities",
    excerpt: "How urban communities are adapting to create more sustainable living spaces.",
    date: "March 14, 2024",
    category: "Lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1682687982501-1e58ab814714"
  },
  {
    title: "Digital Art Revolution",
    excerpt: "The intersection of technology and creativity in the digital age.",
    date: "March 13, 2024",
    category: "Art",
    imageUrl: "https://images.unsplash.com/photo-1683009427513-28e163f0a5d7"
  }
]

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <motion.section 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 backdrop-blur-sm">
            Welcome to the Future of Blogging
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            Thoughts from
            <br />
            Tomorrow
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Explore ideas that shape the future through our curated collection of forward-thinking articles.
          </p>
          <Button size="lg" className="mt-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
            Start Reading <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.section>

        {/* Featured Posts Grid */}
        <section className="space-y-8">
          <motion.h2 
            className="text-3xl font-bold tracking-tighter text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Latest Articles
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <motion.section 
          className="max-w-2xl mx-auto text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold">Stay Updated</h3>
          <p className="text-muted-foreground">
            Get notified about the latest futuristic insights and technological breakthroughs.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Subscribe</Button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}