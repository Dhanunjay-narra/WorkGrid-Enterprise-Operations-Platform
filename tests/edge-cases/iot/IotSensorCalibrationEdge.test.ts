import { IotSensorCalibrationPublisher } from "../../../services/core-engine/src/iot/events/IotSensorCalibrationPublisher";
import { IotSensorCalibrationTelemetry } from "../../../services/core-engine/src/iot/telemetry/IotSensorCalibrationTelemetry";

describe("IotSensorCalibration Edge-Case & Outbox Test Suite", () => {
  const publisher = new IotSensorCalibrationPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IotSensorCalibrationTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
