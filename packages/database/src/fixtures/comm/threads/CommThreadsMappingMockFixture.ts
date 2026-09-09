export function generateCommThreadsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
