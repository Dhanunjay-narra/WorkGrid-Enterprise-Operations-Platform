export function generateHrRecruitmentMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
