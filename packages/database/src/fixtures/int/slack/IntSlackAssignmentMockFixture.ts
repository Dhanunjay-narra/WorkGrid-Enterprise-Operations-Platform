export function generateIntSlackAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
