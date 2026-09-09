export function generateHrRecruitmentRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
