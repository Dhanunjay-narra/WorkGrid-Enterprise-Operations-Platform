export function generateBiExportsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
