import { EvtDomainEventSchemaGrpcService } from "../../../services/core-engine/src/events/grpc/EvtDomainEventSchemaGrpcService";
import { EvtDomainEventSchemaMetrics } from "../../../services/core-engine/src/events/metrics/EvtDomainEventSchemaMetrics";

describe("EvtDomainEventSchema End-to-End Enterprise Scenario", () => {
  const grpcService = new EvtDomainEventSchemaGrpcService();

  test("dispatches and verifies EvtDomainEventSchema gRPC call", (done) => {
    grpcService.getEvtDomainEventSchema({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      EvtDomainEventSchemaMetrics.recordOperation("READ");
      expect(EvtDomainEventSchemaMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
