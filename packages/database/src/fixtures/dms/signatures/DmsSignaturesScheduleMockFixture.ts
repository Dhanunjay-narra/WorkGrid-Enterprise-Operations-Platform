export function generateDmsSignaturesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
