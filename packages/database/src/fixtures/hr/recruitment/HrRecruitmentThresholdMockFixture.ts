export function generateHrRecruitmentThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
