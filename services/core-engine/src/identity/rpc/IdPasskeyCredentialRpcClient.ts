export class IdPasskeyCredentialRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched IdPasskeyCredential action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "identity", executedAt: new Date().toISOString() } };
  }
}
