export function generateBiWidgetsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
