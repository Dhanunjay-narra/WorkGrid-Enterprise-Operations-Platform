export type AiEvaluationsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsStateStateMachine {
  private allowedTransitions: Record<AiEvaluationsStateState, AiEvaluationsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsStateState, to: AiEvaluationsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsStateState, to: AiEvaluationsStateState): AiEvaluationsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsState: " + from + " -> " + to);
    }
    return to;
  }
}
