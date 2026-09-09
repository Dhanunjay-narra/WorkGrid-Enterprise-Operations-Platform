import { CommNotificationPreferenceClient } from "../../../packages/sdk/src/clients/communication/CommNotificationPreferenceClient";

describe("CommNotificationPreference SDK Client Integration Matrix", () => {
  const client = new CommNotificationPreferenceClient("test-api-key");

  test("fetches single CommNotificationPreference via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("communication");
  });

  test("lists CommNotificationPreference entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
