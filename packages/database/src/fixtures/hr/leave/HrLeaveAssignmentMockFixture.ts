export function generateHrLeaveAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
