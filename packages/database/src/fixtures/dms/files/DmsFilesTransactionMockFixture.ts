export function generateDmsFilesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
