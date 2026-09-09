import { WfWorkflowVersionClient } from "../../../packages/sdk/src/clients/workflow/WfWorkflowVersionClient";

describe("WfWorkflowVersion SDK Client Integration Matrix", () => {
  const client = new WfWorkflowVersionClient("test-api-key");

  test("fetches single WfWorkflowVersion via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("workflow");
  });

  test("lists WfWorkflowVersion entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
