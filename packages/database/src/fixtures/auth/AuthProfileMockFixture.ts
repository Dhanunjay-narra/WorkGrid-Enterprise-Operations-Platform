export function generateAuthProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
