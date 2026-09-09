export class IntSyncHistoryRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched IntSyncHistory action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "integrations", executedAt: new Date().toISOString() } };
  }
}
