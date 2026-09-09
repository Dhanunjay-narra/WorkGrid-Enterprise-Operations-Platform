export function generateDmsChunksRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
