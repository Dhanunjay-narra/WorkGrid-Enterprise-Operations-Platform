export function createIdPolicyFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "ide_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-ID",
    name: "IdPolicy Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
