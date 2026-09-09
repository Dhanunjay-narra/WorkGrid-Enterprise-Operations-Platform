export function generateIntMappingsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
