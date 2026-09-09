export class FinGeneralLedgerRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched FinGeneralLedger action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "finance", executedAt: new Date().toISOString() } };
  }
}
