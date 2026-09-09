export class IotTelemetryPacketGrpcService {
  public async getIotTelemetryPacket(call: any, callback: any): Promise<void> {
    const entityId = call.request.id;
    callback(null, {
      id: entityId,
      tenant_id: "tenant-grpc-01",
      code: "GRPC-IOT",
      name: "IotTelemetryPacket gRPC Entry",
      status: "ACTIVE",
      created_at_unix: Date.now()
    });
  }
}
