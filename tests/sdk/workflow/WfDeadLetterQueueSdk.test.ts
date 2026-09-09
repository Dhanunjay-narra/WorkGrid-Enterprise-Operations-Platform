import { WfDeadLetterQueueClient } from "../../../packages/sdk/src/clients/workflow/WfDeadLetterQueueClient";

describe("WfDeadLetterQueue SDK Client Integration Matrix", () => {
  const client = new WfDeadLetterQueueClient("test-api-key");

  test("fetches single WfDeadLetterQueue via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("workflow");
  });

  test("lists WfDeadLetterQueue entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
