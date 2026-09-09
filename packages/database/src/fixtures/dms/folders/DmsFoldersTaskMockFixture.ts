export function generateDmsFoldersTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
