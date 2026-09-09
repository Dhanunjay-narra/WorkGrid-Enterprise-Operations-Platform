export function generateBiExportsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
