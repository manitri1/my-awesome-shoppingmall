export function Footer() {
  const footerSections = [
    {
      title: "회사소개",
      links: ["브랜드 스토리", "채용정보", "지속가능성", "투자자 정보"],
    },
    {
      title: "제품",
      links: ["여성복", "남성복", "액세서리", "신상품"],
    },
    {
      title: "고객지원",
      links: ["고객센터", "배송안내", "교환/반품", "사이즈 가이드"],
    },
  ]

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex flex-col">
              <div className="text-xl font-bold tracking-tight">STYLE</div>
              <div className="text-xl font-bold tracking-tight">COLLECTIONS</div>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-medium">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">© 2025 Style Collections. 모든 권리 보유.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
