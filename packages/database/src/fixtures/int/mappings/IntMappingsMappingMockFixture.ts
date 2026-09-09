export function generateIntMappingsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
