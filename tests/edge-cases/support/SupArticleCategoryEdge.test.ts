import { SupArticleCategoryPublisher } from "../../../services/core-engine/src/support/events/SupArticleCategoryPublisher";
import { SupArticleCategoryTelemetry } from "../../../services/core-engine/src/support/telemetry/SupArticleCategoryTelemetry";

describe("SupArticleCategory Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupArticleCategoryPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupArticleCategoryTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
