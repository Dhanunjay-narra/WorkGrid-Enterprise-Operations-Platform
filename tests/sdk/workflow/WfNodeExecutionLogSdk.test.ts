import { WfNodeExecutionLogClient } from "../../../packages/sdk/src/clients/workflow/WfNodeExecutionLogClient";

describe("WfNodeExecutionLog SDK Client Integration Matrix", () => {
  const client = new WfNodeExecutionLogClient("test-api-key");

  test("fetches single WfNodeExecutionLog via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("workflow");
  });

  test("lists WfNodeExecutionLog entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
