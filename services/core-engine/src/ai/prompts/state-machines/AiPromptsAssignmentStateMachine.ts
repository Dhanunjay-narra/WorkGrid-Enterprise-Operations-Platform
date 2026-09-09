export type AiPromptsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiPromptsAssignmentStateMachine {
  private allowedTransitions: Record<AiPromptsAssignmentState, AiPromptsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiPromptsAssignmentState, to: AiPromptsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiPromptsAssignmentState, to: AiPromptsAssignmentState): AiPromptsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiPromptsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
