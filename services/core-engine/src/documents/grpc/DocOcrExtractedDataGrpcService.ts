export class DocOcrExtractedDataGrpcService {
  public async getDocOcrExtractedData(call: any, callback: any): Promise<void> {
    const entityId = call.request.id;
    callback(null, {
      id: entityId,
      tenant_id: "tenant-grpc-01",
      code: "GRPC-DOC",
      name: "DocOcrExtractedData gRPC Entry",
      status: "ACTIVE",
      created_at_unix: Date.now()
    });
  }
}
