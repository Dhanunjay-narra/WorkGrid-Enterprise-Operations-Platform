export type SupportAgentsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsTransactionStateMachine {
  private allowedTransitions: Record<SupportAgentsTransactionState, SupportAgentsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsTransactionState, to: SupportAgentsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsTransactionState, to: SupportAgentsTransactionState): SupportAgentsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
