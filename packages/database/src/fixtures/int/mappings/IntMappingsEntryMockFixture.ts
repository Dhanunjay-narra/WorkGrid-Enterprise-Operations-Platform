export function generateIntMappingsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
