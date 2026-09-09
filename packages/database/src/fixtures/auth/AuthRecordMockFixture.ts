export function generateAuthRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
