export function generateCommDigestAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
