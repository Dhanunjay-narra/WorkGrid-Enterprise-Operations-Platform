export type IntWebhooksEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksEventStateMachine {
  private allowedTransitions: Record<IntWebhooksEventState, IntWebhooksEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksEventState, to: IntWebhooksEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksEventState, to: IntWebhooksEventState): IntWebhooksEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksEvent: " + from + " -> " + to);
    }
    return to;
  }
}
