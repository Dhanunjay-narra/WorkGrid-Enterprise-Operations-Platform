export function generateIntMappingsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
