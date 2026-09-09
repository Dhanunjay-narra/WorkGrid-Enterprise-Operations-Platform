import { IdDirectorySyncClient } from "../../../packages/sdk/src/clients/identity/IdDirectorySyncClient";

describe("IdDirectorySync SDK Client Integration Matrix", () => {
  const client = new IdDirectorySyncClient("test-api-key");

  test("fetches single IdDirectorySync via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("identity");
  });

  test("lists IdDirectorySync entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
