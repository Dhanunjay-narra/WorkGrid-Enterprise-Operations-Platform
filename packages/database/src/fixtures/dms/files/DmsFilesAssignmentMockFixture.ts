export function generateDmsFilesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_files",
    entity: "DmsFilesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
