import { Button } from "@/components/ui/button"

export function InnovationSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">혁신, 지속가능성 그리고 효율성의 조화</h2>
        </div>

        <div className="relative">
          <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden mb-8">
            <img
              src="/fashion-designer-working-in-modern-atelier-with-su.jpg"
              alt="지속가능한 패션 디자인 과정"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Style Collections는 해양 제품 분야의 혁신을 선도하며, 지속가능한 솔루션을 기업 서비스 영역에 제공합니다.
            </p>

            <Button className="mt-8">더 알아보기</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
