export function generateProjectEpicsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
