export type DmsOcrMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsOcrMetricStateMachine {
  private allowedTransitions: Record<DmsOcrMetricState, DmsOcrMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsOcrMetricState, to: DmsOcrMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsOcrMetricState, to: DmsOcrMetricState): DmsOcrMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsOcrMetric: " + from + " -> " + to);
    }
    return to;
  }
}
