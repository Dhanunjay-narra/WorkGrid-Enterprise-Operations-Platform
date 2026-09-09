export function generateRbacScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
