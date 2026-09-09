export function generateDmsRetentionAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_retention",
    entity: "DmsRetentionAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
