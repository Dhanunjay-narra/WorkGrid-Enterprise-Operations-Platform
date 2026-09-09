export function generateHrRecruitmentTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
