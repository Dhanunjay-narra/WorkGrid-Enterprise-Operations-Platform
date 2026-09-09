import { IotDeviceClient } from "../../../packages/sdk/src/clients/iot/IotDeviceClient";

describe("IotDevice SDK Client Integration Matrix", () => {
  const client = new IotDeviceClient("test-api-key");

  test("fetches single IotDevice via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("iot");
  });

  test("lists IotDevice entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
