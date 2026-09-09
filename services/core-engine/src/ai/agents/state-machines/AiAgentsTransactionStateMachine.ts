export type AiAgentsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsTransactionStateMachine {
  private allowedTransitions: Record<AiAgentsTransactionState, AiAgentsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsTransactionState, to: AiAgentsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsTransactionState, to: AiAgentsTransactionState): AiAgentsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
