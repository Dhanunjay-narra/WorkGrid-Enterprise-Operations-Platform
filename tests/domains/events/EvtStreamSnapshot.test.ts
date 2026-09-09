import { EvtStreamSnapshotService } from "../../../services/core-engine/src/events/services/EvtStreamSnapshotService";
import { EvtStreamSnapshotValidator } from "../../../packages/types/src/domains/events/EvtStreamSnapshot";

describe("EvtStreamSnapshot Service & Validation Suite", () => {
  const service = new EvtStreamSnapshotService();

  test("creates a valid EvtStreamSnapshot record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample EvtStreamSnapshot",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = EvtStreamSnapshotValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
