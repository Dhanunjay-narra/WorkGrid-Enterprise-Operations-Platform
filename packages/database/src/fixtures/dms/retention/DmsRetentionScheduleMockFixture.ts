export function generateDmsRetentionScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
