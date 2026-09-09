export function generateCommThreadsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
