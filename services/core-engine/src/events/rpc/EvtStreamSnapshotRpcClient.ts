export class EvtStreamSnapshotRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched EvtStreamSnapshot action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "events", executedAt: new Date().toISOString() } };
  }
}
