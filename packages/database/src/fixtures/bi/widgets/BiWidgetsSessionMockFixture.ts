export function generateBiWidgetsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
