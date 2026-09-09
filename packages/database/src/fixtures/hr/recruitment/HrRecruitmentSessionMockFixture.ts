export function generateHrRecruitmentSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
