export function generateHrRecruitmentPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
