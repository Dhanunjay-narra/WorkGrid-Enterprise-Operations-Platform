export function generateIntMappingsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
