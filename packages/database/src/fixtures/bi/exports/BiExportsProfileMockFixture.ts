export function generateBiExportsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
