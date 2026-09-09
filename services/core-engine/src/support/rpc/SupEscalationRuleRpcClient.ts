export class SupEscalationRuleRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched SupEscalationRule action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "support", executedAt: new Date().toISOString() } };
  }
}
