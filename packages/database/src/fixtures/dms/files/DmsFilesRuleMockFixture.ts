export function generateDmsFilesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
