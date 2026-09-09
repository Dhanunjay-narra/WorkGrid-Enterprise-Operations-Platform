export class SecIpAllowlistRuleRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched SecIpAllowlistRule action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "security", executedAt: new Date().toISOString() } };
  }
}
