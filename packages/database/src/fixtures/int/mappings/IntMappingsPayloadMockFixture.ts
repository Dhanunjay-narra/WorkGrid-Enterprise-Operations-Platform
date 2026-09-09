export function generateIntMappingsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
