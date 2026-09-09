export function generateCommThreadsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
