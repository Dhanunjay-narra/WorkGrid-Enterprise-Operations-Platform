import { IotFirmwareVersionClient } from "../../../packages/sdk/src/clients/iot/IotFirmwareVersionClient";

describe("IotFirmwareVersion SDK Client Integration Matrix", () => {
  const client = new IotFirmwareVersionClient("test-api-key");

  test("fetches single IotFirmwareVersion via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("iot");
  });

  test("lists IotFirmwareVersion entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
