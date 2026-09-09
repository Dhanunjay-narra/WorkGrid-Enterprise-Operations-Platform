export function generateBiWidgetsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
