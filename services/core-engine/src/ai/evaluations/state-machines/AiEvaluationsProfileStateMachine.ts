export type AiEvaluationsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsProfileStateMachine {
  private allowedTransitions: Record<AiEvaluationsProfileState, AiEvaluationsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsProfileState, to: AiEvaluationsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsProfileState, to: AiEvaluationsProfileState): AiEvaluationsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
