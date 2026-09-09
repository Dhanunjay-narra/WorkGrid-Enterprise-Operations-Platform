export class EvtEventSubscriptionGrpcService {
  public async getEvtEventSubscription(call: any, callback: any): Promise<void> {
    const entityId = call.request.id;
    callback(null, {
      id: entityId,
      tenant_id: "tenant-grpc-01",
      code: "GRPC-EVT",
      name: "EvtEventSubscription gRPC Entry",
      status: "ACTIVE",
      created_at_unix: Date.now()
    });
  }
}
