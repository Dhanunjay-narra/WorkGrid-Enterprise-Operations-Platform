import { WfVariableStoreClient } from "../../../packages/sdk/src/clients/workflow/WfVariableStoreClient";

describe("WfVariableStore SDK Client Integration Matrix", () => {
  const client = new WfVariableStoreClient("test-api-key");

  test("fetches single WfVariableStore via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("workflow");
  });

  test("lists WfVariableStore entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
