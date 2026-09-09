export class SupCannedResponseRpcServer {
  public async handleRpcRequest(method: string, params: Record<string, any>): Promise<any> {
    console.log("[RPC-SERVER] Handled SupCannedResponse method " + method);
    return { success: true, processedAt: new Date().toISOString() };
  }
}
