export function generateBiExportsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
