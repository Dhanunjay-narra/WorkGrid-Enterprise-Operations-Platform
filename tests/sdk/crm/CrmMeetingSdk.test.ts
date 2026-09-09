import { CrmMeetingClient } from "../../../packages/sdk/src/clients/crm/CrmMeetingClient";

describe("CrmMeeting SDK Client Integration Matrix", () => {
  const client = new CrmMeetingClient("test-api-key");

  test("fetches single CrmMeeting via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("crm");
  });

  test("lists CrmMeeting entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
