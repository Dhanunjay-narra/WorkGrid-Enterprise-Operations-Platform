export function generateHrRecruitmentEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
