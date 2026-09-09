export function generateBiKpisTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
