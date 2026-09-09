export function generateCommCallsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
