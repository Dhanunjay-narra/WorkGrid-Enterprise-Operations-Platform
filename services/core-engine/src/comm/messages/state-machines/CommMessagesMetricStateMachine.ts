export type CommMessagesMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesMetricStateMachine {
  private allowedTransitions: Record<CommMessagesMetricState, CommMessagesMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesMetricState, to: CommMessagesMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesMetricState, to: CommMessagesMetricState): CommMessagesMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesMetric: " + from + " -> " + to);
    }
    return to;
  }
}
