export class AiPromptTemplateRpcClient {
  public async invokeRemoteAction(action: string, entityId: string, params: Record<string, any>): Promise<{ status: string; result: any }> {
    console.log("[RPC-CALL] Dispatched AiPromptTemplate action " + action + " on target " + entityId);
    return { status: "OK", result: { entityId, domain: "ai", executedAt: new Date().toISOString() } };
  }
}
