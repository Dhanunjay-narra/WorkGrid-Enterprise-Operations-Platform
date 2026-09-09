export function generateBiWidgetsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
