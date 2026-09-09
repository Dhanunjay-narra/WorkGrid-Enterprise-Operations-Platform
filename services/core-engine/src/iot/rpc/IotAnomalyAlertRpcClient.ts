export class IotAnomalyAlertRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched IotAnomalyAlert action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "iot", executedAt: new Date().toISOString() } };
  }
}
