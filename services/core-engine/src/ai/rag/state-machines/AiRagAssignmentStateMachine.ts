export type AiRagAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiRagAssignmentStateMachine {
  private allowedTransitions: Record<AiRagAssignmentState, AiRagAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiRagAssignmentState, to: AiRagAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiRagAssignmentState, to: AiRagAssignmentState): AiRagAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiRagAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
