export function generateDmsFoldersEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
