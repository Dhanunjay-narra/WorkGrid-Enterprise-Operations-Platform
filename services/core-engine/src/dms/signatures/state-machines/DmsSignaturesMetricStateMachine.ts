export type DmsSignaturesMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsSignaturesMetricStateMachine {
  private allowedTransitions: Record<DmsSignaturesMetricState, DmsSignaturesMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsSignaturesMetricState, to: DmsSignaturesMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsSignaturesMetricState, to: DmsSignaturesMetricState): DmsSignaturesMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsSignaturesMetric: " + from + " -> " + to);
    }
    return to;
  }
}
