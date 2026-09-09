export function generateProjectEpicsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
