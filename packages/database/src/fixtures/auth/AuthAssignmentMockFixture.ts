export function generateAuthAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
