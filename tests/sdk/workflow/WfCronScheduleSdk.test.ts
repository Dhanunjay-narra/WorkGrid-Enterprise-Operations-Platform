import { WfCronScheduleClient } from "../../../packages/sdk/src/clients/workflow/WfCronScheduleClient";

describe("WfCronSchedule SDK Client Integration Matrix", () => {
  const client = new WfCronScheduleClient("test-api-key");

  test("fetches single WfCronSchedule via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("workflow");
  });

  test("lists WfCronSchedule entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
