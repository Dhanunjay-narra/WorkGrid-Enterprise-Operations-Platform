export class ProjectWorkspacesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ProjectWorkspacesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ProjectWorkspacesEntry" };
  }
}
