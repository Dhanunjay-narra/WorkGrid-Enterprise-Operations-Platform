export function generateObsProbesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
