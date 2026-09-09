export function generateBiWidgetsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
