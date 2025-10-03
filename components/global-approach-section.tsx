export function GlobalApproachSection() {
  const approaches = [
    {
      image: "/handshake-business-partnership.jpg",
      title: "파트너십",
      description: "글로벌 파트너들과의 협력을 통해 더 나은 미래를 만들어갑니다.",
    },
    {
      image: "/modern-stairs-architecture-minimalist.jpg",
      title: "성장",
      description: "지속적인 혁신과 발전을 통해 패션 산업의 새로운 기준을 제시합니다.",
    },
    {
      image: "/luxury-jewelry-diamonds-elegant.jpg",
      title: "품질",
      description: "최고급 소재와 정교한 기술력으로 완성되는 프리미엄 품질을 보장합니다.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">
            글로벌 접근 방식으로
            <br />
            미래 모델을 제시합니다
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="group">
              <div className="aspect-square bg-card rounded-lg overflow-hidden mb-6">
                <img
                  src={approach.image || "/placeholder.svg"}
                  alt={approach.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">{approach.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
