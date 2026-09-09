export type AiMemoryTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiMemoryTransactionStateMachine {
  private allowedTransitions: Record<AiMemoryTransactionState, AiMemoryTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiMemoryTransactionState, to: AiMemoryTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiMemoryTransactionState, to: AiMemoryTransactionState): AiMemoryTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiMemoryTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
