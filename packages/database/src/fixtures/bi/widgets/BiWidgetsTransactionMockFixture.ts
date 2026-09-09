export function generateBiWidgetsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
