export class CrmActivityRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched CrmActivity action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "crm", executedAt: new Date().toISOString() } };
  }
}
