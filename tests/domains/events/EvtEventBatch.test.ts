import { EvtEventBatchService } from "../../../services/core-engine/src/events/services/EvtEventBatchService";
import { EvtEventBatchValidator } from "../../../packages/types/src/domains/events/EvtEventBatch";

describe("EvtEventBatch Service & Validation Suite", () => {
  const service = new EvtEventBatchService();

  test("creates a valid EvtEventBatch record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample EvtEventBatch",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = EvtEventBatchValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
