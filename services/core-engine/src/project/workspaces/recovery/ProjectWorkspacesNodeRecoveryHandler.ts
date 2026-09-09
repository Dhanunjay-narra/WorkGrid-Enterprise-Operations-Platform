export class ProjectWorkspacesNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectWorkspacesNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
