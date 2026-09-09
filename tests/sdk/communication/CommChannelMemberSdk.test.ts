import { CommChannelMemberClient } from "../../../packages/sdk/src/clients/communication/CommChannelMemberClient";

describe("CommChannelMember SDK Client Integration Matrix", () => {
  const client = new CommChannelMemberClient("test-api-key");

  test("fetches single CommChannelMember via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("communication");
  });

  test("lists CommChannelMember entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
