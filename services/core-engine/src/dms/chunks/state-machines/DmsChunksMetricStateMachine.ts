export type DmsChunksMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksMetricStateMachine {
  private allowedTransitions: Record<DmsChunksMetricState, DmsChunksMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksMetricState, to: DmsChunksMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksMetricState, to: DmsChunksMetricState): DmsChunksMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksMetric: " + from + " -> " + to);
    }
    return to;
  }
}
