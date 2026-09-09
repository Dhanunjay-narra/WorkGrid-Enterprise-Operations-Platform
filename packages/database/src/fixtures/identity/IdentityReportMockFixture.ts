export function generateIdentityReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
