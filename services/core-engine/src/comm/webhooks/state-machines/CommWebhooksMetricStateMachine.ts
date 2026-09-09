export type CommWebhooksMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksMetricStateMachine {
  private allowedTransitions: Record<CommWebhooksMetricState, CommWebhooksMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksMetricState, to: CommWebhooksMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksMetricState, to: CommWebhooksMetricState): CommWebhooksMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksMetric: " + from + " -> " + to);
    }
    return to;
  }
}
