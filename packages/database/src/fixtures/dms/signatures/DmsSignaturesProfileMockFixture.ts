export function generateDmsSignaturesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "dms_signatures",
    entity: "DmsSignaturesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
