
"use client"

import * as React from "react"
import { recommendBeautyStyle, type RecommendBeautyStyleOutput } from "@/ai/flows/recommend-beauty-style"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Sparkles, Loader2, RefreshCw } from "lucide-react"

export function StyleRecommender() {
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<RecommendBeautyStyleOutput | null>(null)
  const [form, setForm] = React.useState({
    serviceType: "hair" as const,
    occasion: "",
    desiredLook: "",
    userDescription: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const data = await recommendBeautyStyle(form)
      setResult(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 px-6 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Style Recommender AI</h2>
          <p className="text-muted-foreground text-lg">
            Let our AI-powered stylist suggest your next signature look based on your unique features.
          </p>
        </div>

        <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground p-8">
            <CardTitle className="text-2xl">Tailored Beauty Advice</CardTitle>
            <CardDescription className="text-primary-foreground/80">Fill in your details for a personalized consultation.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Service Type</label>
                  <Select 
                    value={form.serviceType} 
                    onValueChange={(v: "hair" | "makeup" | "nails") => setForm(f => ({ ...f, serviceType: v }))}
                  >
                    <SelectTrigger className="rounded-xl border-primary/20 bg-background">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hair">Hair Styling</SelectItem>
                      <SelectItem value="makeup">Makeup Artistry</SelectItem>
                      <SelectItem value="nails">Nail Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">The Occasion</label>
                  <Input 
                    placeholder="e.g. Wedding, Gala, Everyday" 
                    className="rounded-xl border-primary/20"
                    required
                    value={form.occasion}
                    onChange={e => setForm(f => ({ ...f, occasion: e.target.value }))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Desired Aesthetic</label>
                <Input 
                  placeholder="e.g. Edgy, Natural, Glamorous" 
                  className="rounded-xl border-primary/20"
                  required
                  value={form.desiredLook}
                  onChange={e => setForm(f => ({ ...f, desiredLook: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Tell us about yourself</label>
                <Textarea 
                  placeholder="e.g. Long curly hair, tan skin, or almond shaped nails..." 
                  className="rounded-xl border-primary/20 min-h-[120px]"
                  required
                  value={form.userDescription}
                  onChange={e => setForm(f => ({ ...f, userDescription: e.target.value }))}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl py-6 text-lg font-bold shadow-lg transition-all"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Styling your look...
                  </>
                ) : (
                  "Generate My Style"
                )}
              </Button>
            </form>

            {result && (
              <div className="mt-12 space-y-6 animate-fade-in">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-primary">Your Recommendations</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setResult(null)} 
                    className="text-muted-foreground hover:text-primary"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" /> Start Over
                  </Button>
                </div>
                <div className="grid gap-6">
                  {result.recommendations.map((rec, i) => (
                    <Card key={i} className="border border-primary/10 bg-primary/5 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-2">{rec.styleName}</h4>
                        <p className="text-muted-foreground mb-4 italic">"{rec.description}"</p>
                        <div className="p-4 bg-white/50 rounded-xl">
                          <p className="text-sm font-bold text-primary uppercase tracking-tighter mb-1">Why this fits you:</p>
                          <p className="text-sm leading-relaxed">{rec.reasoning}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
