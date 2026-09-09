export class DocChunkIndexRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched DocChunkIndex action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "documents", executedAt: new Date().toISOString() } };
  }
}
