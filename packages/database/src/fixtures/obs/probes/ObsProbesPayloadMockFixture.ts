export function generateObsProbesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
