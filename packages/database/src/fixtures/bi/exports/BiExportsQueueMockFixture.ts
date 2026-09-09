export function generateBiExportsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
