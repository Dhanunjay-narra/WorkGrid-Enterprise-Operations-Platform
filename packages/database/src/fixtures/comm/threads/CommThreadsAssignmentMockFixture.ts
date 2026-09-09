export function generateCommThreadsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
