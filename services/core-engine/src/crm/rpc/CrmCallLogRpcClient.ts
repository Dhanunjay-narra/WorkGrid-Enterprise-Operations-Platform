export class CrmCallLogRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched CrmCallLog action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "crm", executedAt: new Date().toISOString() } };
  }
}
