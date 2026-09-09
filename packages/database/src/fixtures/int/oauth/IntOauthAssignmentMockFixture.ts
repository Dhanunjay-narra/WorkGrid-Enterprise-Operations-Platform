export function generateIntOauthAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
