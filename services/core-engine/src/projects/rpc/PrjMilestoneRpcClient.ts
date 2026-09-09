export class PrjMilestoneRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched PrjMilestone action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "projects", executedAt: new Date().toISOString() } };
  }
}
