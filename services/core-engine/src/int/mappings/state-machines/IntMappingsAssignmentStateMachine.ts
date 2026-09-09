export type IntMappingsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsAssignmentStateMachine {
  private allowedTransitions: Record<IntMappingsAssignmentState, IntMappingsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsAssignmentState, to: IntMappingsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsAssignmentState, to: IntMappingsAssignmentState): IntMappingsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
