export function generateDmsSignaturesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
