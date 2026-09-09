export function createDocFolderFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "doc_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-DOC",
    name: "DocFolder Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
