export function generateHrRecruitmentBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
