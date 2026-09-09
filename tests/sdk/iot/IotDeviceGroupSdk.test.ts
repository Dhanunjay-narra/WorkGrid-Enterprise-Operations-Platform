import { IotDeviceGroupClient } from "../../../packages/sdk/src/clients/iot/IotDeviceGroupClient";

describe("IotDeviceGroup SDK Client Integration Matrix", () => {
  const client = new IotDeviceGroupClient("test-api-key");

  test("fetches single IotDeviceGroup via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("iot");
  });

  test("lists IotDeviceGroup entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
