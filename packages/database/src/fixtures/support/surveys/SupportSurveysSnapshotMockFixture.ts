export function generateSupportSurveysSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
