export function generateDmsFoldersQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
