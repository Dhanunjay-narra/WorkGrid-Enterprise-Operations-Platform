export function generateDmsOcrAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
