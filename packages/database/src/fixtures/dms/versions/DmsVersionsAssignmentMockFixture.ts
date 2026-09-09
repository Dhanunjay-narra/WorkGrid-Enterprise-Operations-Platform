export function generateDmsVersionsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_versions",
    entity: "DmsVersionsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
