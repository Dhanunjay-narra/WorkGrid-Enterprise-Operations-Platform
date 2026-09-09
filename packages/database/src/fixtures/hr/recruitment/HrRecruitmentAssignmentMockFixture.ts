export function generateHrRecruitmentAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
