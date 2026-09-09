export function generateIntOauthScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
