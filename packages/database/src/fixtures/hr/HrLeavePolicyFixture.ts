export function createHrLeavePolicyFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "hr_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-HR",
    name: "HrLeavePolicy Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
