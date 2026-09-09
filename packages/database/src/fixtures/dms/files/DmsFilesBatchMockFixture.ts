export function generateDmsFilesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
