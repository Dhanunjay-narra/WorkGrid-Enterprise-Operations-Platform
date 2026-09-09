export type DmsVersionsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsVersionsMetricStateMachine {
  private allowedTransitions: Record<DmsVersionsMetricState, DmsVersionsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsVersionsMetricState, to: DmsVersionsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsVersionsMetricState, to: DmsVersionsMetricState): DmsVersionsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsVersionsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
