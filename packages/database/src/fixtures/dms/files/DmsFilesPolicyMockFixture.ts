export function generateDmsFilesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
