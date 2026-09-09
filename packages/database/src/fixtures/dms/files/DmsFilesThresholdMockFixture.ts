export function generateDmsFilesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
