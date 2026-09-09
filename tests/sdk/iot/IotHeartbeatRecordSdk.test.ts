import { IotHeartbeatRecordClient } from "../../../packages/sdk/src/clients/iot/IotHeartbeatRecordClient";

describe("IotHeartbeatRecord SDK Client Integration Matrix", () => {
  const client = new IotHeartbeatRecordClient("test-api-key");

  test("fetches single IotHeartbeatRecord via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("iot");
  });

  test("lists IotHeartbeatRecord entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
