export class HrLeaveRequestGrpcService {
  public async getHrLeaveRequest(call: any, callback: any): Promise<void> {
    const entityId = call.request.id;
    callback(null, {
      id: entityId,
      tenant_id: "tenant-grpc-01",
      code: "GRPC-HR",
      name: "HrLeaveRequest gRPC Entry",
      status: "ACTIVE",
      created_at_unix: Date.now()
    });
  }
}
