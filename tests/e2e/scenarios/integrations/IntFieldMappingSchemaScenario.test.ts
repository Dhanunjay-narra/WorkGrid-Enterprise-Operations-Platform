import { IntFieldMappingSchemaGrpcService } from "../../../services/core-engine/src/integrations/grpc/IntFieldMappingSchemaGrpcService";
import { IntFieldMappingSchemaMetrics } from "../../../services/core-engine/src/integrations/metrics/IntFieldMappingSchemaMetrics";

describe("IntFieldMappingSchema End-to-End Enterprise Scenario", () => {
  const grpcService = new IntFieldMappingSchemaGrpcService();

  test("dispatches and verifies IntFieldMappingSchema gRPC call", (done) => {
    grpcService.getIntFieldMappingSchema({ request: { id: "scenario-001" } }, (err: any, response: any) => {
      expect(err).toBeNull();
      expect(response.id).toBe("scenario-001");
      IntFieldMappingSchemaMetrics.recordOperation("READ");
      expect(IntFieldMappingSchemaMetrics.getCounter()).toBeGreaterThan(0);
      done();
    });
  });
});
