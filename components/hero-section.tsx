import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl font-light leading-tight text-balance">
          완벽한 스타일과
          <br />
          세련된 디자인의 만남
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Style Collections는 현대적인 감각과 클래식한 우아함을 결합하여 당신만의 독특한 스타일을 완성합니다.
        </p>
      </div>

      <div className="mt-16 w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <p className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                브랜드 스토리 알아보기
              </p>
              <Button variant="ghost" className="p-0 h-auto font-normal text-base hover:text-accent">
                우리의 이야기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <p className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                프리미엄 컬렉션 둘러보기
              </p>
              <Button variant="ghost" className="p-0 h-auto font-normal text-base hover:text-accent">
                컬렉션 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
            <img
              src="/elegant-fashion-store-interior-with-modern-minimal.jpg"
              alt="Style Collections 매장 내부"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
