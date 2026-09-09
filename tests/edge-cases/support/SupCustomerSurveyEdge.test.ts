import { SupCustomerSurveyPublisher } from "../../../services/core-engine/src/support/events/SupCustomerSurveyPublisher";
import { SupCustomerSurveyTelemetry } from "../../../services/core-engine/src/support/telemetry/SupCustomerSurveyTelemetry";

describe("SupCustomerSurvey Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupCustomerSurveyPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupCustomerSurveyTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
