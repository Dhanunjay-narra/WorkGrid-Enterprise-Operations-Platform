import { CommBroadcastAnnouncementClient } from "../../../packages/sdk/src/clients/communication/CommBroadcastAnnouncementClient";

describe("CommBroadcastAnnouncement SDK Client Integration Matrix", () => {
  const client = new CommBroadcastAnnouncementClient("test-api-key");

  test("fetches single CommBroadcastAnnouncement via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("communication");
  });

  test("lists CommBroadcastAnnouncement entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
