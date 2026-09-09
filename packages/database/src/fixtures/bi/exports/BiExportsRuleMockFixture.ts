export function generateBiExportsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
