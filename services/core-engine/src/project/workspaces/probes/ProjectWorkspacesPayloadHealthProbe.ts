export class ProjectWorkspacesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesPayload" };
  }
}
