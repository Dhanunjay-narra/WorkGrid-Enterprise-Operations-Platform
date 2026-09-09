export function generateDmsSignaturesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
