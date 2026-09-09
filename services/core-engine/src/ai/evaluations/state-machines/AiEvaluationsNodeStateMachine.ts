export type AiEvaluationsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsNodeStateMachine {
  private allowedTransitions: Record<AiEvaluationsNodeState, AiEvaluationsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsNodeState, to: AiEvaluationsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsNodeState, to: AiEvaluationsNodeState): AiEvaluationsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsNode: " + from + " -> " + to);
    }
    return to;
  }
}
