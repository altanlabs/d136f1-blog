import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  category: string
  imageUrl: string
}

export function BlogPost({ title, excerpt, date, category, imageUrl }: BlogPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-background/50 backdrop-blur-sm">
        <div className="relative">
          <div className="aspect-video overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="backdrop-blur-md bg-background/50">
              {category}
            </Badge>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="text-sm text-muted-foreground">
            {date}
          </div>
          <h3 className="text-2xl font-bold tracking-tight hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-2">
            {excerpt}
          </p>
        </div>
      </Card>
    </motion.div>
  )
}