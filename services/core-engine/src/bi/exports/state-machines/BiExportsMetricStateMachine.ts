export type BiExportsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsMetricStateMachine {
  private allowedTransitions: Record<BiExportsMetricState, BiExportsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsMetricState, to: BiExportsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsMetricState, to: BiExportsMetricState): BiExportsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
