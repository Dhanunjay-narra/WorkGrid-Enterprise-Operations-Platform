export function generateIntMappingsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
