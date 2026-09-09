export function generateIntMappingsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
