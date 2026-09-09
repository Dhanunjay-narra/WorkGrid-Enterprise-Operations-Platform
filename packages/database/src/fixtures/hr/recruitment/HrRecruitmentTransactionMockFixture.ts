export function generateHrRecruitmentTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
