export type AiRagTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagTransactionStateMachine {
  private allowedTransitions: Record<AiRagTransactionState, AiRagTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagTransactionState, to: AiRagTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagTransactionState, to: AiRagTransactionState): AiRagTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
