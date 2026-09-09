export class AiPromptsMappingWsGateway {
  public static handleClientConnection(socketId: string, tenantId: string): void {
    console.log("[WS-GATEWAY] Client " + socketId + " connected to AiPromptsMapping channel in tenant " + tenantId);
  }

  public static handleClientDisconnection(socketId: string): void {
    console.log("[WS-GATEWAY] Client " + socketId + " disconnected from AiPromptsMapping");
  }
}
