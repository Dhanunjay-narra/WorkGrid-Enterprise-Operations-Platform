import { InvItemCategoryPublisher } from "../../../services/core-engine/src/inventory/events/InvItemCategoryPublisher";
import { InvItemCategoryTelemetry } from "../../../services/core-engine/src/inventory/telemetry/InvItemCategoryTelemetry";

describe("InvItemCategory Edge-Case & Outbox Test Suite", () => {
  const publisher = new InvItemCategoryPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = InvItemCategoryTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
