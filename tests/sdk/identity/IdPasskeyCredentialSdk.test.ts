import { IdPasskeyCredentialClient } from "../../../packages/sdk/src/clients/identity/IdPasskeyCredentialClient";

describe("IdPasskeyCredential SDK Client Integration Matrix", () => {
  const client = new IdPasskeyCredentialClient("test-api-key");

  test("fetches single IdPasskeyCredential via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("identity");
  });

  test("lists IdPasskeyCredential entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
