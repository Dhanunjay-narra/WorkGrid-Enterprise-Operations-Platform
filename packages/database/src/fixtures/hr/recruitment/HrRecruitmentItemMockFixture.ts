export function generateHrRecruitmentItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
