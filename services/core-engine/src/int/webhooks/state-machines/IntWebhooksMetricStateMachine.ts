export type IntWebhooksMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksMetricStateMachine {
  private allowedTransitions: Record<IntWebhooksMetricState, IntWebhooksMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksMetricState, to: IntWebhooksMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksMetricState, to: IntWebhooksMetricState): IntWebhooksMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksMetric: " + from + " -> " + to);
    }
    return to;
  }
}
