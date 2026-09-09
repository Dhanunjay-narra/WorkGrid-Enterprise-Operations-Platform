export function generateComplianceTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
