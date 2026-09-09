export type AiEvaluationsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsSessionStateMachine {
  private allowedTransitions: Record<AiEvaluationsSessionState, AiEvaluationsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsSessionState, to: AiEvaluationsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsSessionState, to: AiEvaluationsSessionState): AiEvaluationsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsSession: " + from + " -> " + to);
    }
    return to;
  }
}
