export function generateHrRecruitmentPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
