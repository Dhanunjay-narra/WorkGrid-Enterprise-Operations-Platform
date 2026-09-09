export function generateIntMappingsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
