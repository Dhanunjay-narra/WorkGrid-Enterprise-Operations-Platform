export function generateObsProbesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
