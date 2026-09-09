export class PrjEpicRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched PrjEpic action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "projects", executedAt: new Date().toISOString() } };
  }
}
