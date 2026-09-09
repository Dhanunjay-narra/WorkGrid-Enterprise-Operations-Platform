export function generateHrRecruitmentQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
