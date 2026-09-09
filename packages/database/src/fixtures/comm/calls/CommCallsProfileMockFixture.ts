export function generateCommCallsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
