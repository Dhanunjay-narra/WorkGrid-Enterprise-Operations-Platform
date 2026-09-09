export type HrShiftsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrShiftsMetricStateMachine {
  private allowedTransitions: Record<HrShiftsMetricState, HrShiftsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrShiftsMetricState, to: HrShiftsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrShiftsMetricState, to: HrShiftsMetricState): HrShiftsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrShiftsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
