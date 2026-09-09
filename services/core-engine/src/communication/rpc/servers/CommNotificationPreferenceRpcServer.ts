export class CommNotificationPreferenceRpcServer {
  public async handleRpcRequest(method: string, params: Record<string, any>): Promise<any> {
    console.log("[RPC-SERVER] Handled CommNotificationPreference method " + method);
    return { success: true, processedAt: new Date().toISOString() };
  }
}
