export function generateIdentityScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentitySchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
