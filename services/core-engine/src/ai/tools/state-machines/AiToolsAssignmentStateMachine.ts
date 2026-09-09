export type AiToolsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiToolsAssignmentStateMachine {
  private allowedTransitions: Record<AiToolsAssignmentState, AiToolsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiToolsAssignmentState, to: AiToolsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiToolsAssignmentState, to: AiToolsAssignmentState): AiToolsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiToolsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
