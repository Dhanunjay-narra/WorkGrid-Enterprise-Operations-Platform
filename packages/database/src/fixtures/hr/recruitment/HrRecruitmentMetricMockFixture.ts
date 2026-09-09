export function generateHrRecruitmentMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
