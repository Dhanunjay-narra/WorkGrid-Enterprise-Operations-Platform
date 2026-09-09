export function generateHrRecruitmentEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_recruitment",
    entity: "HrRecruitmentEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
