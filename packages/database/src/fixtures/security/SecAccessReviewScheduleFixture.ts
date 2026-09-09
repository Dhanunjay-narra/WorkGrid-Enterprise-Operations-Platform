export function createSecAccessReviewScheduleFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "sec_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-SEC",
    name: "SecAccessReviewSchedule Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
