export function generateDmsFoldersThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
