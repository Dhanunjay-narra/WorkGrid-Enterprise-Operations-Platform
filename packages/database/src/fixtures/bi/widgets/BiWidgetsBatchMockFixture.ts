export function generateBiWidgetsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
