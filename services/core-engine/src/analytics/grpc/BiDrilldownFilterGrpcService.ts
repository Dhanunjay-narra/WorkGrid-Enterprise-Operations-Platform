export class BiDrilldownFilterGrpcService {
  public async getBiDrilldownFilter(call: any, callback: any): Promise<void> {
    const entityId = call.request.id;
    callback(null, {
      id: entityId,
      tenant_id: "tenant-grpc-01",
      code: "GRPC-BI",
      name: "BiDrilldownFilter gRPC Entry",
      status: "ACTIVE",
      created_at_unix: Date.now()
    });
  }
}
