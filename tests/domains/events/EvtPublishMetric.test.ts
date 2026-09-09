import { EvtPublishMetricService } from "../../../services/core-engine/src/events/services/EvtPublishMetricService";
import { EvtPublishMetricValidator } from "../../../packages/types/src/domains/events/EvtPublishMetric";

describe("EvtPublishMetric Service & Validation Suite", () => {
  const service = new EvtPublishMetricService();

  test("creates a valid EvtPublishMetric record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample EvtPublishMetric",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = EvtPublishMetricValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
