export type CommWebhooksTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksTransactionStateMachine {
  private allowedTransitions: Record<CommWebhooksTransactionState, CommWebhooksTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksTransactionState, to: CommWebhooksTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksTransactionState, to: CommWebhooksTransactionState): CommWebhooksTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
