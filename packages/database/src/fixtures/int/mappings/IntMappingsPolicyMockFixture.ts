export function generateIntMappingsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
