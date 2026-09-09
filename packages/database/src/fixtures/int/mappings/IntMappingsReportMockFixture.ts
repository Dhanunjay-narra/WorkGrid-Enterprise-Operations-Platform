export function generateIntMappingsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_mappings",
    entity: "IntMappingsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
