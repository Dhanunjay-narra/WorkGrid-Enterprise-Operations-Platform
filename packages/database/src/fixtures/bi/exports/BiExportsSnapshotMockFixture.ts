export function generateBiExportsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
