export function generateIntMappingsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
