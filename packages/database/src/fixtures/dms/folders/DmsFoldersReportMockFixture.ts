export function generateDmsFoldersReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_folders",
    entity: "DmsFoldersReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
