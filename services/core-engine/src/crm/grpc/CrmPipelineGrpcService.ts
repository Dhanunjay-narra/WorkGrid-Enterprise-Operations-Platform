export class CrmPipelineGrpcService {
  public async getCrmPipeline(call: any, callback: any): Promise<void> {
    const entityId = call.request.id;
    callback(null, {
      id: entityId,
      tenant_id: "tenant-grpc-01",
      code: "GRPC-CRM",
      name: "CrmPipeline gRPC Entry",
      status: "ACTIVE",
      created_at_unix: Date.now()
    });
  }
}
