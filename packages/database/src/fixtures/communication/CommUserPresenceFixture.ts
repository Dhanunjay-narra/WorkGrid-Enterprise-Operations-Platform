export function createCommUserPresenceFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "com_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-COMM",
    name: "CommUserPresence Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
