export type IntWebhooksThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksThresholdStateMachine {
  private allowedTransitions: Record<IntWebhooksThresholdState, IntWebhooksThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksThresholdState, to: IntWebhooksThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksThresholdState, to: IntWebhooksThresholdState): IntWebhooksThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
