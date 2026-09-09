export function generateBiWidgetsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
