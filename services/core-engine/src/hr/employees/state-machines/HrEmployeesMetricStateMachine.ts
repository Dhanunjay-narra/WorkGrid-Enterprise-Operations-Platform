export type HrEmployeesMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrEmployeesMetricStateMachine {
  private allowedTransitions: Record<HrEmployeesMetricState, HrEmployeesMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrEmployeesMetricState, to: HrEmployeesMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrEmployeesMetricState, to: HrEmployeesMetricState): HrEmployeesMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrEmployeesMetric: " + from + " -> " + to);
    }
    return to;
  }
}
