import { IotDeviceCommandClient } from "../../../packages/sdk/src/clients/iot/IotDeviceCommandClient";

describe("IotDeviceCommand SDK Client Integration Matrix", () => {
  const client = new IotDeviceCommandClient("test-api-key");

  test("fetches single IotDeviceCommand via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("iot");
  });

  test("lists IotDeviceCommand entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
