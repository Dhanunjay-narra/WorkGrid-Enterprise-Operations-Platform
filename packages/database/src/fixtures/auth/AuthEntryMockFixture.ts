export function generateAuthEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
