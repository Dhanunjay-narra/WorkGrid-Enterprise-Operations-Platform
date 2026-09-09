export function generateDmsChunksAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_chunks",
    entity: "DmsChunksAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
