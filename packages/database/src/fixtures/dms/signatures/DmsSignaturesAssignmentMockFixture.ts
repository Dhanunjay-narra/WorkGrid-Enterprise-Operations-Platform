export function generateDmsSignaturesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
