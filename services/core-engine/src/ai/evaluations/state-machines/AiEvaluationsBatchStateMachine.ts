export type AiEvaluationsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsBatchStateMachine {
  private allowedTransitions: Record<AiEvaluationsBatchState, AiEvaluationsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsBatchState, to: AiEvaluationsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsBatchState, to: AiEvaluationsBatchState): AiEvaluationsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
