export function generateComplianceQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
