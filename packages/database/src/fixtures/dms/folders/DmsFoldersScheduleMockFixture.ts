export function generateDmsFoldersScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
