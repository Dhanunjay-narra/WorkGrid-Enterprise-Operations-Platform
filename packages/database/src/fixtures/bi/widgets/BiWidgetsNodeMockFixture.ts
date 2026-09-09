export function generateBiWidgetsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
