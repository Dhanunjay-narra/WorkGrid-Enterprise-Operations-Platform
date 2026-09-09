export function generateCommCallsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
