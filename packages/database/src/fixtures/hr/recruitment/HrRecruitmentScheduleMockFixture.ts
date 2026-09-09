export function generateHrRecruitmentScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
