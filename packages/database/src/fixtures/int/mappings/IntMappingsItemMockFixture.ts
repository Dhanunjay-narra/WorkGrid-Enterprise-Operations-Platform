export function generateIntMappingsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
