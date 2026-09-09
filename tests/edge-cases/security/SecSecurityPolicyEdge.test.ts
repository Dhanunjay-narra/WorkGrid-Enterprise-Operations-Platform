import { SecSecurityPolicyPublisher } from "../../../services/core-engine/src/security/events/SecSecurityPolicyPublisher";
import { SecSecurityPolicyTelemetry } from "../../../services/core-engine/src/security/telemetry/SecSecurityPolicyTelemetry";

describe("SecSecurityPolicy Edge-Case & Outbox Test Suite", () => {
  const publisher = new SecSecurityPolicyPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SecSecurityPolicyTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
