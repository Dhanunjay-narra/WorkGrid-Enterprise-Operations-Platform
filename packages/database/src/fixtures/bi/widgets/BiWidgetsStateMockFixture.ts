export function generateBiWidgetsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
