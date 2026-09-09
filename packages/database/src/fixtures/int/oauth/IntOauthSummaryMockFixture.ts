export function generateIntOauthSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
