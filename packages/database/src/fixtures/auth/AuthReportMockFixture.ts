export function generateAuthReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
