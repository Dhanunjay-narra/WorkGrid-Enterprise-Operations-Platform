export type HrDepartmentsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrDepartmentsMetricStateMachine {
  private allowedTransitions: Record<HrDepartmentsMetricState, HrDepartmentsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrDepartmentsMetricState, to: HrDepartmentsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrDepartmentsMetricState, to: HrDepartmentsMetricState): HrDepartmentsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrDepartmentsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
