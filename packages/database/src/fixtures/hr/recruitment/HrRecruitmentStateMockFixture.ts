export function generateHrRecruitmentStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
