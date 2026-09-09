import { IotDeviceLocationClient } from "../../../packages/sdk/src/clients/iot/IotDeviceLocationClient";

describe("IotDeviceLocation SDK Client Integration Matrix", () => {
  const client = new IotDeviceLocationClient("test-api-key");

  test("fetches single IotDeviceLocation via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("iot");
  });

  test("lists IotDeviceLocation entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
