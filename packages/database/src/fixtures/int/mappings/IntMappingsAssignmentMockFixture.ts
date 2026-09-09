export function generateIntMappingsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
