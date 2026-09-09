export function generateHrRecruitmentProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
