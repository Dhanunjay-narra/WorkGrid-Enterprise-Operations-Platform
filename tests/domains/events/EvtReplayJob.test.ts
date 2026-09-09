import { EvtReplayJobService } from "../../../services/core-engine/src/events/services/EvtReplayJobService";
import { EvtReplayJobValidator } from "../../../packages/types/src/domains/events/EvtReplayJob";

describe("EvtReplayJob Service & Validation Suite", () => {
  const service = new EvtReplayJobService();

  test("creates a valid EvtReplayJob record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample EvtReplayJob",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = EvtReplayJobValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
