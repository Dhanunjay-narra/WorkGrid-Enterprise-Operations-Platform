export class FinanceForecastRecordWsGateway {
  public static handleClientConnection(socketId: string, tenantId: string): void {
    console.log("[WS-GATEWAY] Client " + socketId + " connected to FinanceForecastRecord channel in tenant " + tenantId);
  }

  public static handleClientDisconnection(socketId: string): void {
    console.log("[WS-GATEWAY] Client " + socketId + " disconnected from FinanceForecastRecord");
  }
}
