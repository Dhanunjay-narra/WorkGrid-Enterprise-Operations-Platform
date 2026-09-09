export function generateIntMappingsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
