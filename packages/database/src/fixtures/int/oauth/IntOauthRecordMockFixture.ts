export function generateIntOauthRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
