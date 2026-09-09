export type HrLeaveMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrLeaveMetricStateMachine {
  private allowedTransitions: Record<HrLeaveMetricState, HrLeaveMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrLeaveMetricState, to: HrLeaveMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrLeaveMetricState, to: HrLeaveMetricState): HrLeaveMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrLeaveMetric: " + from + " -> " + to);
    }
    return to;
  }
}
