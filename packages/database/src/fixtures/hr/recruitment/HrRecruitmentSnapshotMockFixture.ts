export function generateHrRecruitmentSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
