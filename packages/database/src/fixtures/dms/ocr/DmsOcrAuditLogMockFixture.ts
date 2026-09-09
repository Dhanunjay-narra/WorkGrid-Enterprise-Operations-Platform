export function generateDmsOcrAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_ocr",
    entity: "DmsOcrAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
