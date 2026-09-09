export function generateHrRecruitmentReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
