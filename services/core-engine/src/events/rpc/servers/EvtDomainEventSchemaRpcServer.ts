export class EvtDomainEventSchemaRpcServer {
  public async handleRpcRequest(method: string, params: Record<string, any>): Promise<any> {
    console.log("[RPC-SERVER] Handled EvtDomainEventSchema method " + method);
    return { success: true, processedAt: new Date().toISOString() };
  }
}
