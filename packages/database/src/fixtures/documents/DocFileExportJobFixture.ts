export function createDocFileExportJobFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "doc_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-DOC",
    name: "DocFileExportJob Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
