export function generateBiExportsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
