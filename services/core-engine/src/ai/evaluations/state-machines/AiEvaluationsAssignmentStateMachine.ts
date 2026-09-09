export type AiEvaluationsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiEvaluationsAssignmentStateMachine {
  private allowedTransitions: Record<AiEvaluationsAssignmentState, AiEvaluationsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiEvaluationsAssignmentState, to: AiEvaluationsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiEvaluationsAssignmentState, to: AiEvaluationsAssignmentState): AiEvaluationsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiEvaluationsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
