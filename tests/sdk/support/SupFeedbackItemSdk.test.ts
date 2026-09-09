import { SupFeedbackItemClient } from "../../../packages/sdk/src/clients/support/SupFeedbackItemClient";

describe("SupFeedbackItem SDK Client Integration Matrix", () => {
  const client = new SupFeedbackItemClient("test-api-key");

  test("fetches single SupFeedbackItem via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("support");
  });

  test("lists SupFeedbackItem entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
