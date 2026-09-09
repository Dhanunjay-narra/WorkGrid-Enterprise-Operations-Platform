export function generateBiWidgetsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
