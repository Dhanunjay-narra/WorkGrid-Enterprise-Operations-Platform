import { IdDeviceClient } from "../../../packages/sdk/src/clients/identity/IdDeviceClient";

describe("IdDevice SDK Client Integration Matrix", () => {
  const client = new IdDeviceClient("test-api-key");

  test("fetches single IdDevice via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("identity");
  });

  test("lists IdDevice entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
