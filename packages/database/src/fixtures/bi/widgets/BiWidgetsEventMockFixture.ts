export function generateBiWidgetsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
