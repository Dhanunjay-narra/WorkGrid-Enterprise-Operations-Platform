export class IntHealthCheckPingGrpcService {
  public async getIntHealthCheckPing(call: any, callback: any): Promise<void> {
    const entityId = call.request.id;
    callback(null, {
      id: entityId,
      tenant_id: "tenant-grpc-01",
      code: "GRPC-INT",
      name: "IntHealthCheckPing gRPC Entry",
      status: "ACTIVE",
      created_at_unix: Date.now()
    });
  }
}
