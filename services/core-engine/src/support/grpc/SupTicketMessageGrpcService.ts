export class SupTicketMessageGrpcService {
  public async getSupTicketMessage(call: any, callback: any): Promise<void> {
    const entityId = call.request.id;
    callback(null, {
      id: entityId,
      tenant_id: "tenant-grpc-01",
      code: "GRPC-SUP",
      name: "SupTicketMessage gRPC Entry",
      status: "ACTIVE",
      created_at_unix: Date.now()
    });
  }
}
