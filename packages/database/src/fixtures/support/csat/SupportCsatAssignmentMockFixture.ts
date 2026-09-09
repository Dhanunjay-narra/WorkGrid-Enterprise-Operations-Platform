export function generateSupportCsatAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
