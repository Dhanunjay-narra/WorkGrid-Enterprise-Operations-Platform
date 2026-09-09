import { IotSensorCalibrationClient } from "../../../packages/sdk/src/clients/iot/IotSensorCalibrationClient";

describe("IotSensorCalibration SDK Client Integration Matrix", () => {
  const client = new IotSensorCalibrationClient("test-api-key");

  test("fetches single IotSensorCalibration via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("iot");
  });

  test("lists IotSensorCalibration entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
