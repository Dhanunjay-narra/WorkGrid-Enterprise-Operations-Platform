export function generateIntMappingsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
