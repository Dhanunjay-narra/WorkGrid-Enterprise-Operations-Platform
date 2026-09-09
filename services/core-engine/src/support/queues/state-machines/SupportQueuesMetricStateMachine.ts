export type SupportQueuesMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesMetricStateMachine {
  private allowedTransitions: Record<SupportQueuesMetricState, SupportQueuesMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesMetricState, to: SupportQueuesMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesMetricState, to: SupportQueuesMetricState): SupportQueuesMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesMetric: " + from + " -> " + to);
    }
    return to;
  }
}
