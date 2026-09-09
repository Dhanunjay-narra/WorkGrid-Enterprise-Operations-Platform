export function generateCommCallsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
