export function generateDmsExportAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_export",
    entity: "DmsExportAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
