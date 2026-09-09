export class HrEmployeesTransactionWsGateway {
  public static handleClientConnection(socketId: string, tenantId: string): void {
    console.log("[WS-GATEWAY] Client " + socketId + " connected to HrEmployeesTransaction channel in tenant " + tenantId);
  }

  public static handleClientDisconnection(socketId: string): void {
    console.log("[WS-GATEWAY] Client " + socketId + " disconnected from HrEmployeesTransaction");
  }
}
