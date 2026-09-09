export function generateSupportSurveysAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_surveys",
    entity: "SupportSurveysAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
