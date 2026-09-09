export type BiKpisMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisMetricStateMachine {
  private allowedTransitions: Record<BiKpisMetricState, BiKpisMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisMetricState, to: BiKpisMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisMetricState, to: BiKpisMetricState): BiKpisMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisMetric: " + from + " -> " + to);
    }
    return to;
  }
}
