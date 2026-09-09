export function generateBiWidgetsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
