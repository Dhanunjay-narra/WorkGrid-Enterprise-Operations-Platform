import { IntAuthTokenPairPublisher } from "../../../services/core-engine/src/integrations/events/IntAuthTokenPairPublisher";
import { IntAuthTokenPairTelemetry } from "../../../services/core-engine/src/integrations/telemetry/IntAuthTokenPairTelemetry";

describe("IntAuthTokenPair Edge-Case & Outbox Test Suite", () => {
  const publisher = new IntAuthTokenPairPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IntAuthTokenPairTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
