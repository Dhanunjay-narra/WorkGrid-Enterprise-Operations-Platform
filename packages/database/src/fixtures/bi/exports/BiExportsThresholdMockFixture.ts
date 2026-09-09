export function generateBiExportsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
