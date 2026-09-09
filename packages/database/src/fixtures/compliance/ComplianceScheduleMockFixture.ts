export function generateComplianceScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
