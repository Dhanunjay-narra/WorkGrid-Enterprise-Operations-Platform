export function generateRbacAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
