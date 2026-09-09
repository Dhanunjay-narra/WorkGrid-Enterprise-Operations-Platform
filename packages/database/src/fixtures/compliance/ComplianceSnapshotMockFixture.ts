export function generateComplianceSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "compliance",
    entity: "ComplianceSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
