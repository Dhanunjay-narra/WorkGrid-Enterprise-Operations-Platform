import { FinJournalEntryClient } from "../../../packages/sdk/src/clients/finance/FinJournalEntryClient";

describe("FinJournalEntry SDK Client Integration Matrix", () => {
  const client = new FinJournalEntryClient("test-api-key");

  test("fetches single FinJournalEntry via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("finance");
  });

  test("lists FinJournalEntry entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
