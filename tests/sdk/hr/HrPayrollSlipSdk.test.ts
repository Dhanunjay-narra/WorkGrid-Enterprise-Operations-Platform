import { HrPayrollSlipClient } from "../../../packages/sdk/src/clients/hr/HrPayrollSlipClient";

describe("HrPayrollSlip SDK Client Integration Matrix", () => {
  const client = new HrPayrollSlipClient("test-api-key");

  test("fetches single HrPayrollSlip via SDK client", async () => {
    const res = await client.get("sdk-001");
    expect(res.id).toBe("sdk-001");
    expect(res.domain).toBe("hr");
  });

  test("lists HrPayrollSlip entities with pagination", async () => {
    const items = await client.list("tenant-corp", 10);
    expect(Array.isArray(items)).toBe(true);
  });
});
