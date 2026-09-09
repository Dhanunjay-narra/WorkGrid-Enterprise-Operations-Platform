export function generateDmsFoldersPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
