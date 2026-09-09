export type AiEvaluationsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsTaskStateMachine {
  private allowedTransitions: Record<AiEvaluationsTaskState, AiEvaluationsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsTaskState, to: AiEvaluationsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsTaskState, to: AiEvaluationsTaskState): AiEvaluationsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsTask: " + from + " -> " + to);
    }
    return to;
  }
}
