export function generateIdentityAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
