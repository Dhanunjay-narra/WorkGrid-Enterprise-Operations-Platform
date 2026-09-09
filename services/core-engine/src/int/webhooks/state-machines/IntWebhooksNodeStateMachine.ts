export type IntWebhooksNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksNodeStateMachine {
  private allowedTransitions: Record<IntWebhooksNodeState, IntWebhooksNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksNodeState, to: IntWebhooksNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksNodeState, to: IntWebhooksNodeState): IntWebhooksNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksNode: " + from + " -> " + to);
    }
    return to;
  }
}
