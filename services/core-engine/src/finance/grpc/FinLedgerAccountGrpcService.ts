export class FinLedgerAccountGrpcService {
  public async getFinLedgerAccount(call: any, callback: any): Promise<void> {
    const entityId = call.request.id;
    callback(null, {
      id: entityId,
      tenant_id: "tenant-grpc-01",
      code: "GRPC-FIN",
      name: "FinLedgerAccount gRPC Entry",
      status: "ACTIVE",
      created_at_unix: Date.now()
    });
  }
}
