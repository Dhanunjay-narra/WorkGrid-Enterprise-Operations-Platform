export function generateHrPayrollMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
