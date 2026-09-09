import { WfDeadLetterQueueService } from "../../../services/core-engine/src/workflow/services/WfDeadLetterQueueService";
import { WfDeadLetterQueueValidator } from "../../../packages/types/src/domains/workflow/WfDeadLetterQueue";

describe("WfDeadLetterQueue Service & Validation Suite", () => {
  const service = new WfDeadLetterQueueService();

  test("creates a valid WfDeadLetterQueue record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample WfDeadLetterQueue",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = WfDeadLetterQueueValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
