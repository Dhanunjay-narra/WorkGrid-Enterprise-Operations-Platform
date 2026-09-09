export function generateCommPresenceMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
