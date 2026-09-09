export type AiEvaluationsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsTransactionStateMachine {
  private allowedTransitions: Record<AiEvaluationsTransactionState, AiEvaluationsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsTransactionState, to: AiEvaluationsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsTransactionState, to: AiEvaluationsTransactionState): AiEvaluationsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
