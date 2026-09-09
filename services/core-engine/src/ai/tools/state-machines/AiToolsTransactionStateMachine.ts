export type AiToolsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsTransactionStateMachine {
  private allowedTransitions: Record<AiToolsTransactionState, AiToolsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsTransactionState, to: AiToolsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsTransactionState, to: AiToolsTransactionState): AiToolsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
