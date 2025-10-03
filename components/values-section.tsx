export function ValuesSection() {
  const values = [
    {
      number: "01",
      title: "혁신적인 디자인",
      description: "전통적인 패션의 경계를 넘나드는 창의적이고 혁신적인 디자인으로 새로운 트렌드를 제시합니다.",
    },
    {
      number: "02",
      title: "지속가능한 패션",
      description: "환경을 생각하는 지속가능한 소재와 생산 방식을 통해 미래 세대를 위한 책임감 있는 패션을 추구합니다.",
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">우리의 핵심 가치</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {values.map((value) => (
            <div key={value.number} className="space-y-6">
              <div className="text-6xl font-light text-muted-foreground">{value.number}</div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
