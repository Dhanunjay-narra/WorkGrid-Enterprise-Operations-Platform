export function createDocStorageBucketFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "doc_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-DOC",
    name: "DocStorageBucket Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
