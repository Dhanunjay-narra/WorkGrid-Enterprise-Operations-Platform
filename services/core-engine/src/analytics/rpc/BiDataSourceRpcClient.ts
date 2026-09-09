export class BiDataSourceRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched BiDataSource action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "analytics", executedAt: new Date().toISOString() } };
  }
}
