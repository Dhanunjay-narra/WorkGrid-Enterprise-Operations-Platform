export function generateDmsFoldersAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
