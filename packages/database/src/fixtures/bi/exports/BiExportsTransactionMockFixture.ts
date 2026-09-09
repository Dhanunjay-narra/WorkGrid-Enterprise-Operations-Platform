export function generateBiExportsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
