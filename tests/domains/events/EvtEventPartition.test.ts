import { EvtEventPartitionService } from "../../../services/core-engine/src/events/services/EvtEventPartitionService";
import { EvtEventPartitionValidator } from "../../../packages/types/src/domains/events/EvtEventPartition";

describe("EvtEventPartition Service & Validation Suite", () => {
  const service = new EvtEventPartitionService();

  test("creates a valid EvtEventPartition record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample EvtEventPartition",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = EvtEventPartitionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
