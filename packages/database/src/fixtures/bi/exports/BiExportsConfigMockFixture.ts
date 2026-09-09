export function generateBiExportsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
