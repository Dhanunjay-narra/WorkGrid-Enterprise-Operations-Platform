export function generateBiWidgetsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
