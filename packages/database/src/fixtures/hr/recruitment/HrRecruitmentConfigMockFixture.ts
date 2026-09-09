export function generateHrRecruitmentConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
