export function generateIntMappingsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
