export function generateAuthScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
