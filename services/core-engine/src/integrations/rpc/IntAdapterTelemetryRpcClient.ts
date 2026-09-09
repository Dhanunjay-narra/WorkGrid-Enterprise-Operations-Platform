export class IntAdapterTelemetryRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched IntAdapterTelemetry action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "integrations", executedAt: new Date().toISOString() } };
  }
}
