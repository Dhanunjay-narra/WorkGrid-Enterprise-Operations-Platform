export function generateAbacAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
