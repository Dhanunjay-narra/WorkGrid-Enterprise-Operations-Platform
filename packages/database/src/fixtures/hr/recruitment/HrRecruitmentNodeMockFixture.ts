export function generateHrRecruitmentNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
