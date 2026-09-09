export type AiAgentsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsAssignmentStateMachine {
  private allowedTransitions: Record<AiAgentsAssignmentState, AiAgentsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsAssignmentState, to: AiAgentsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsAssignmentState, to: AiAgentsAssignmentState): AiAgentsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
