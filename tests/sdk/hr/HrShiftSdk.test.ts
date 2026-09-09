import { HrShiftClient } from "../../../packages/sdk/src/clients/hr/HrShiftClient";

describe("HrShift SDK Client Integration Matrix", () => {
  const client = new HrShiftClient("test-api-key");

  test("fetches single HrShift via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("hr");
  });

  test("lists HrShift entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
