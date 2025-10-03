import { Button } from "@/components/ui/button"
import { Menu, ShoppingBag } from "lucide-react"

export function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <div className="text-xl font-bold tracking-tight">STYLE</div>
          <div className="text-xl font-bold tracking-tight">COLLECTIONS</div>
        </div>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
      </Button>

      <div className="hidden md:flex items-center gap-8">
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
            브랜드 스토리
          </a>
          <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
            컬렉션
          </a>
          <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
            회사소개
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm">
            매장 방문 예약
          </Button>
        </div>
      </div>
    </header>
  )
}
