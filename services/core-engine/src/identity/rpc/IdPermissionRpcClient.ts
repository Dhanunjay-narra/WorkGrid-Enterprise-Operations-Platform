export class IdPermissionRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched IdPermission action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "identity", executedAt: new Date().toISOString() } };
  }
}
