export function generateDmsFilesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
