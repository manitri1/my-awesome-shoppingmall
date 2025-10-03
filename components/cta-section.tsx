import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-light text-balance">당신의 프로젝트에 대해 이야기해보세요</h2>

        <Button size="lg" className="mt-8">
          문의하기
        </Button>
      </div>
    </section>
  )
}
