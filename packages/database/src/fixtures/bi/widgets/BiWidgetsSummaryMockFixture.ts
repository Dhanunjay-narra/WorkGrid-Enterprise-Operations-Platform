export function generateBiWidgetsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
