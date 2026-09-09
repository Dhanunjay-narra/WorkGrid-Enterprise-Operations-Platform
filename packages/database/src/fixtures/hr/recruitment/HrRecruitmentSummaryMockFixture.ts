export function generateHrRecruitmentSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
