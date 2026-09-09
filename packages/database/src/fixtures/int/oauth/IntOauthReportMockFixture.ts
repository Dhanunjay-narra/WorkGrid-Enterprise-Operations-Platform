export function generateIntOauthReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
