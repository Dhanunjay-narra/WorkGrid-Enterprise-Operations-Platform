export function generateCommPresenceAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
