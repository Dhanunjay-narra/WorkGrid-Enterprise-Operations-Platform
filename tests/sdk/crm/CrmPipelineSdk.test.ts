import { CrmPipelineClient } from "../../../packages/sdk/src/clients/crm/CrmPipelineClient";

describe("CrmPipeline SDK Client Integration Matrix", () => {
  const client = new CrmPipelineClient("test-api-key");

  test("fetches single CrmPipeline via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("crm");
  });

  test("lists CrmPipeline entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
