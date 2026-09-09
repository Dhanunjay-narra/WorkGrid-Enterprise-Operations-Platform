export function generateHrRecruitmentRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
