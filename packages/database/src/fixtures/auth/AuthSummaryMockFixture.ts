export function generateAuthSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
